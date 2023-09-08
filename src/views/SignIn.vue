<template>

  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-primary">
                    Sign In
                  </h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start">

                    <div class="form-floating mb-3">
                      <input
                          type="email"
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          v-model="loginForm.email">
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                      <input
                          type="password"
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          v-model="loginForm.password">
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="d-grid gap-2">
                      <button
                          @click="login"
                          :disabled="isSubmitting"
                          type="button"
                          class="btn btn-primary btn-lg my-4 mb-2">Sign in
                      </button>
                    </div>
                    <div class="alert alert-danger text-white" role="alert" v-if="errMessage">
                      {{ errMessage }}
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <!--                  <p class="mx-auto mb-4 text-sm">-->
                  <!--                    Don't have an account?-->
                  <!--                    <router-link-->
                  <!--                        :to="{ name: 'SignUp' }"-->
                  <!--                        class="text-primary font-weight-bold"-->
                  <!--                    >Sign up-->
                  <!--                    </router-link-->
                  <!--                    >-->
                  <!--                  </p>-->
                  <p class="mx-auto mb-4 text-sm">
                    Forgot password?
                    <router-link
                        to="/forgot-password"
                        class="text-primary font-weight-bold">Reset
                    </router-link>
                  </p>
                  <p class="mx-auto mb-4 text-sm">
                    Need to explore our services?
                    <router-link
                        to="/home"
                        class="text-primary font-weight-bold">Back to home page
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                  class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8">
                <div class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                     :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/insutance_login.jpeg') +
                      ')',
                  }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer/>
</template>
<script>
import jwt_decode from "jwt-decode";
// import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
// import SoftInput from "@/components/SoftInput.vue";
// import SoftSwitch from "@/components/SoftSwitch.vue";
// import SoftButton from "@/components/SoftButton.vue";

const body = document.getElementsByTagName("body")[0];
import {mapMutations} from "vuex";
import {useToast} from 'vue-toastification'

import {loginUser} from '@/services/auth.service'

const toast = useToast()

export default {
  name: "SignIn",
  components: {
    // Navbar,
    AppFooter,
    // SoftInput,
    // SoftButton,
  },

  data() {
    return {
      errMessage: '',
      isSubmitting: false,
      loginForm: {
        email: '',
        password: '',
      }
    }

  },

  created() {
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    // body.classList.remove("bg-gray-100");
  },

  mounted() {
    // const authToken = this.$cookie.isCookieAvailable('access_token');
    const authToken = localStorage.getItem('access_token');
    // const isUserVerified = this.$cookie.isCookieAvailable('is_verified');
    const isUserVerified = localStorage.getItem('is_verified');
    console.log('auth token present: ', authToken);
    console.log('is verified status: ', isUserVerified);

    if (authToken && isUserVerified == "true") {
      console.log('handeyi ku dashboard');
      this.$router.push('/dashboard');
    }

    if (authToken && isUserVerified == "false") {
      this.$router.push('/password-reset');
      console.log('handeyi ku password reset');
    }
  },

  beforeUnmount() {
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },

  methods: {

    login() {
      this.isSubmitting = true;
      this.errMessage = '';
      loginUser(this.loginForm).then((response) => {
        const { is_verified, access, refresh, email } = response.data;
        const decodedAccessToken = jwt_decode(access);
        const decodedRefreshToken = jwt_decode(refresh);
        const accessTokenExp = new Date(decodedAccessToken.exp * 1000)
        const refreshTokenExp = new Date(decodedRefreshToken.exp * 1000);

        this.isSubmitting = false;

        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);
        localStorage.setItem('user_email', email);
        localStorage.setItem('is_verified', is_verified);

        this.$cookie.setCookie('access_token', access, {
          expire: accessTokenExp,
          path: '/',
          domain: '',
          secure: true,
          sameSite: '',
        });
        this.$cookie.setCookie('refresh_token', refresh, {
          expire: refreshTokenExp,
          path: '/',
          domain: '',
          secure: true,
          sameSite: '',
        });
        this.$cookie.setCookie('user_email', email, {
          expire: refreshTokenExp,
          path: '/',
          domain: '',
          secure: true,
          sameSite: '',
        });
        this.$cookie.setCookie('is_verified', is_verified, {
          expire: refreshTokenExp,
          path: '/',
          domain: '',
          secure: true,
          sameSite: '',
        });

        if (is_verified) {
          this.$router.push("/dashboard");
          toast.success(`Welcome`);
        } else {
          this.$router.push("/admin/main");
        }
      }).catch((err) => {
        console.log(err);
        this.isSubmitting = false;
        this.errMessage = 'Incorrect email or password and try again!';
        this.$router.push("/admin/main");
      })
    },
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
  },

};
</script>
