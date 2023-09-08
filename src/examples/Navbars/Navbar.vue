<template>
  <nav
      class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
      v-bind="$attrs"
      id="navbarBlur"
      data-scroll="true">
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" :textWhite="textWhite"/>
      <div
          class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
          :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
          id="navbar">
        <div
            class="pe-md-3 d-flex align-items-center"
            :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'">
          <!-- currency option -->

          <!-- /currency option -->
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <a class="px-0 nav-link font-weight-bold"
               @click="signOut"
               :class="textWhite ? textWhite : 'text-body'">
              <i class="fa fa-user" :class="this.$store.state.isRTL ? 'ms-sm-2' : 'me-sm-1'"></i>
              <span v-if="this.$store.state.isRTL" class="d-sm-inline d-none">يسجل دخول</span>
              <span v-else class="d-sm-inline d-none">Sign Out </span>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import {mapMutations, mapActions} from "vuex";

import {useToast} from 'vue-toastification'
import Swal from "sweetalert2";

const toast = useToast();

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
    };
  },

  props: ["minNav", "textWhite"],

  created() {
    this.minNav;
  },

  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    },

    signOut() {
      Swal.fire({
        title: 'Attention',
        text: "Confirm you want to sign out",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        allowOutsideClick: false,
        confirmButtonText: 'Confirm'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user_email');
          localStorage.removeItem('is_verified');
          // clear cookies
          this.$cookie.removeCookie('access_token');
          this.$cookie.removeCookie('refresh_token');
          this.$cookie.removeCookie('user_email');
          this.$cookie.removeCookie('is_verified');
          //
          this.$router.push({path: '/sign-in'});
          toast.info(`Signed out`);
        }
      })
    }
  },

  components: {
    Breadcrumbs,

  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },

  updated() {
    const navbar = document.getElementById("navbarBlur");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10 && this.$store.state.isNavFixed) {
        navbar.classList.add("blur");
        navbar.classList.add("position-sticky");
        //navbar.classList.add("shadow-blur");
      } else {
        navbar.classList.remove("blur");
        navbar.classList.remove("position-sticky");
        //navbar.classList.remove("shadow-blur");
      }
    });
  },
};
</script>
