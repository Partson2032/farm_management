<style scoped>
@import url("https://fonts.gstatic.com");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&amp;display=swap");
@import url("../assets/css/theme.css");
@import url("../assets/css/user.css");
@import url("../assets/css/custom.css");
</style>

<template>
  <!-- ===============================================-->
  <!--    Main Content-->
  <!-- ===============================================-->
  <div class="main" id="top">
    <nav
        class="navbar navbar-expand-lg navbar-light fixed-top py-3"
        data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div class="container">
        <a class="navbar-brand" href="#"
        ><span class="text-success fs-3 ms-2 fw-bolder">Samanyama </span
        ><span class="fw-thin fs-3">Farm Managment</span></a
        >
        <!-- <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div
            class="collapse navbar-collapse pt-4 pt-lg-0"
            id="navbarSupportedContent"
        >
          <p class="mb-0 ms-auto fs-0 fw-normal">
            <i class="fas fa-phone-alt me-2"></i>Call Us Now
            <a class="" href="tel:+604-680-9785">+263(000)0000</a>
          </p>
          <ul
              class="
              navbar-nav
              ms-auto
              border-bottom border-lg-bottom-0
              pt-2 pt-lg-0
            "
          >
            <li class="nav-item px-2">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#products">Services</a>
            </li>

<!--            <li class="nav-item px-2">-->

<!--              <a class="nav-link" @click="gotoAdmin">Admin</a>-->
<!--            </li>-->

            <!-- <li class="nav-item px-2"><a class="nav-link" href="#news">News &amp; Blog</a></li> -->
            <li class="nav-item px-2">
              <a class="nav-link" href="#contact">Get In Touch</a>
            </li>
          </ul>
          <div class="d-flex mt-2 align-items-center mt-lg-0">
            <router-link
                to="/sign-in"
                class="btn btn-sm btn-round mb-0 me-1 bg-gradient-primary"
            >Account
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <section class="py-0">
      <div
          class="bg-holder"
          style="
          background-image: url(../assets/image/illustrations/bg.png);
          background-position: left center;
          background-size: auto 816px;
        "
      ></div>
      <!--/.bg-holder-->

      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-md-7 col-xl-7 pt-9 text-md-start text-center">
            <h1 class="display-2 fw-thin">
              We provide the best <br class="d-none d-xl-block"/>Farm management
              <strong class="fw-bolder">software </strong>
            </h1>
            <p class="fs-2">
              Simple Steps You Can Take to Improve Your
              <br class="d-none d-xxl-block"/>Financial Well-Being for the rest
              of Your Life
            </p>x
            <a class="btn btn-primary btn-ensurance mt-5" href="#products"
            ><span class="fas fa-chevron-right fa-xs btn-icon"></span
            ><span class="btn-text">Our Services</span></a
            >
          </div>
<!--          <div class="col-md-5 col-xl-5 pe-xxl-0">-->
<!--            &lt;!&ndash; get a quote form &ndash;&gt;-->
<!--            <div class="card shadow hero-header-form">-->
<!--              <div class="card-body p-4 p-xl-6">-->
<!--                <h2 class="text-center">Get a Quote</h2>-->
<!--                <form class="mb-3">-->
<!--                  <div class="row">-->
<!--                    <div class="col-lg-6 col-sm-12">-->
<!--                      <div class="form-floating mb-3">-->
<!--                        <input-->
<!--                            class="form-control input-box"-->
<!--                            id="floatingFirstName"-->
<!--                            type="text"-->
<!--                            placeholder="e.g. First name"-->
<!--                            :disabled="disableUserDetails"-->
<!--                            v-model="getAQuoteForm.firstname"/>-->
<!--                        <label for="floatingFirstName">First name</label>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6 col-sm-12">-->
<!--                      <div class="form-floating mb-3">-->
<!--                        <input-->
<!--                            class="form-control input-box"-->
<!--                            id="floatingLastName"-->
<!--                            type="text"-->
<!--                            placeholder="e.g. Lastname"-->
<!--                            :disabled="disableUserDetails"-->
<!--                            v-model="getAQuoteForm.lastname"/>-->
<!--                        <label for="floatingLastName">Last name</label>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="row">-->
<!--                    <div class="col-lg-6 col-sm-12">-->
<!--                      <div class="form-floating mb-3">-->
<!--                        <input-->
<!--                            class="form-control input-box"-->
<!--                            id="floatingPhone"-->
<!--                            type="tel"-->
<!--                            placeholder="0777000000"-->
<!--                            :disabled="disableUserDetails"-->
<!--                            v-model="getAQuoteForm.phoneNumber"/>-->
<!--                        <label for="floatingPhone">Phone</label>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6 col-sm-12">-->
<!--                      <div class="form-floating mb-3">-->
<!--                        <input-->
<!--                            class="form-control input-box"-->
<!--                            id="floatingEmail"-->
<!--                            type="email"-->
<!--                            placeholder="name@example.com"-->
<!--                            :disabled="disableUserDetails"-->
<!--                            v-model="getAQuoteForm.email"/>-->
<!--                        <label for="floatingEmail">Email</label>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                  <div class="form-floating mb-3">-->
<!--                    <input-->
<!--                        class="form-control input-box"-->
<!--                        id="floatingIdNumber"-->
<!--                        type="text"-->
<!--                        placeholder="00-000000L00"-->
<!--                        :disabled="disableUserDetails"-->
<!--                        v-model="getAQuoteForm.idNumber"/>-->
<!--                    <label for="floatingIdNumber">ID/Passport Number</label>-->
<!--                  </div>-->

<!--                  <div class="form-floating mb-3">-->
<!--                    <select-->
<!--                        id="floatingCatrgory"-->
<!--                        class="form-select input-box"-->
<!--                        aria-label="Default select example"-->
<!--                        v-model="getAQuoteForm.productName">-->
<!--                      <option v-for="(product, index) of productTypes"-->
<!--                              :key="index"-->
<!--                              :value="product">-->
<!--                        {{ product }}-->
<!--                      </option>-->
<!--                    </select>-->
<!--                    <label for="floatingCatrgory">Insurance Category</label>-->
<!--                  </div>-->
<!--                  <div class="col-12 d-grid">-->
<!--                    <button @click="registerNewUserDetails"-->
<!--                            :disabled="isSubmitting"-->
<!--                            class="btn btn-primary rounded-pill"-->
<!--                            type="button">-->
<!--                      Get Quote <span v-if="isSubmitting">...</span>-->
<!--                    </button>-->
<!--                    <button @click="clearClientInfo"-->
<!--                            v-if="disableUserDetails"-->
<!--                            :disabled="isSubmitting"-->
<!--                            class="btn btn-warning rounded-pill"-->
<!--                            type="button">-->
<!--                      Clear Info-->
<!--                    </button>-->
<!--                    <div v-if="errorMessage" class="alert alert-danger"-->
<!--                         role="alert"-->
<!--                         style="color: #fff !important;">-->
<!--                      {{ errorMessage }}-->
<!--                    </div>-->
<!--                    &lt;!&ndash;{{ getAQuoteForm }}&ndash;&gt;-->
<!--                  </div>-->
<!--                </form>-->
<!--              </div>-->
<!--            </div>-->
<!--            &lt;!&ndash; /get a quote form &ndash;&gt;-->
<!--          </div>-->
        </div>
      </div>
    </section>
    <section id="products">
      <div
          class="bg-holder d-none d-md-block"
          style="
          background-image: url(../assets/image/illustrations/bg-car-insurance.png);
          background-position: 0 200px;
          background-size: 100% 45%;
        "
      ></div>
      <!--/.bg-holder-->

      <div
          class="bg-holder d-none d-md-block"
          style="
          background-image: url(../assets/image/illustrations/bg-left.png);
          background-position: left;
          background-size: 15% 100%;
        "
      ></div>
      <!--/.bg-holder-->

      <div
          class="bg-holder d-none d-xl-block mt-11"
          style="
          background-image: url(../assets/image/illustrations/circle.png);
          background-position: 18% 49%;
          background-size: auto;
        "
      ></div>
      <!--/.bg-holder-->

      <div class="container-lg">
        <div class="row flex-center pb-8 pb-md-10">
          <div class="col-12 mt-6">
            <div class="d-flex align-items-start">
              <div
                  class="nav flex-column nav-tab"
                  id="nav-tab"
                  role="tablist"
                  aria-orientation="vertical"
              >
                <a
                    class="circle-hover-wrapper nav-link mb-lg-4 active"
                    id="nav-car-tab"
                    href="#!"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-car"
                    role="tab"
                    aria-controls="nav-car"
                    aria-selected="true"
                >
                  <div class="icon-box">
                    <img
                        class="car-insurance-icon"
                        src="@/assets/img/icons/products/car-insurance.png"
                        alt="..."
                    />
                    <img
                        class="car-insurance-icon car-insurance-icon-hover"
                        src="@/assets/img/icons/products/car-insurance.png"
                        alt="..."
                    />
                  </div>
                </a
                ><a
                  class="circle-hover-wrapper nav-link mb-lg-4"
                  id="nav-home-tab"
                  href="#!"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="false"
              >
                <div class="icon-box">
                  <img
                      class="car-insurance-icon"
                      src="@/assets/img/icons/products/house.png"
                      alt="..."
                  /><img
                    class="car-insurance-icon car-insurance-icon-hover"
                    src="@/assets/img/icons/products/house.png"
                    alt="..."
                />
                </div>
              </a
              ><a
                  class="circle-hover-wrapper nav-link mb-lg-4"
                  id="nav-paw-tab"
                  href="#!"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-paw"
                  role="tab"
                  aria-controls="nav-paw"
                  aria-selected="false"
              >
                <div class="icon-box">
                  <img
                      class="car-insurance-icon"
                      src="@/assets/img/icons/products/protection.png"
                      alt="..."
                  /><img
                    class="car-insurance-icon car-insurance-icon-hover"
                    src="@/assets/img/icons/products/protection.png"
                    alt="..."
                />
                </div>
              </a
              ><a
                  class="circle-hover-wrapper nav-link mb-lg-4"
                  id="nav-plane-tab"
                  href="#!"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-plane"
                  role="tab"
                  aria-controls="nav-plane"
                  aria-selected="false"
              >
                <div class="icon-box">
                  <img
                      class="car-insurance-icon"
                      src="@/assets/img/icons/products/funeral.png"
                      alt="..."
                  /><img
                    class="car-insurance-icon car-insurance-icon-hover"
                    src="@/assets/img/icons/products/funeral.png"
                    alt="..."
                />
                </div>
              </a>
              </div>
              <div class="tab-content w-100" id="nav-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="nav-car"
                    role="tabpanel"
                    aria-labelledby="nav-car-tab"
                >
                  <div class="row align-items-center offset-sm-1 g-3">
                    <div class="col-md-6 col-xl-4 order-1 order-md-0">
                      <h2 class="mb-md-5">Motor Insurance</h2>
                      <p class="">
                        Make a plan for the emergence of life. We protect your
                        most precious assets, allowing you to devote your time
                        and energy to more essential things in life.
                      </p>
                      <p class="mt-3">
                        Discover the most appropriate fit for you and your
                        Family.
                      </p>
                      <a class="btn btn-primary btn-ensurance mt-5" href="#"
                      ><span
                          class="fas fa-chevron-right fa-xs btn-icon"
                      ></span
                      ><span class="btn-text">Get A Quote</span></a
                      >
                    </div>
                    <div class="col-md-6 col-xl-8 text-end">
                      <div class="img-shape">
                        <img
                            class="feature-img"
                            src="https://dummyimage.com/558%E2%80%8Ax%E2%80%8A391/000/ffffff.png"
                            alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    class="tab-pane fade"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                >
                  <div class="row align-items-center offset-sm-1 g-3">
                    <div class="col-md-6 col-xl-4 order-1 order-md-0">
                      <h2 class="mb-md-5">Home Insurance</h2>
                      <p class="">
                        Make a plan for the emergence of life. We protect your
                        most precious assets, allowing you to devote your time
                        and energy to more essential things in life.
                      </p>
                      <p class="mt-3">
                        Discover the most appropriate fit for you and your
                        Family.
                      </p>
                      <a class="btn btn-primary btn-ensurance mt-5" href="#"
                      ><span
                          class="fas fa-chevron-right fa-xs btn-icon"
                      ></span
                      ><span class="btn-text">Get A Quote</span></a
                      >
                    </div>
                    <div class="col-md-6 col-xl-8 text-end">
                      <div class="img-shape">
                        <img
                            class="feature-img"
                            src="https://dummyimage.com/558%E2%80%8Ax%E2%80%8A391/000/ffffff.png"
                            alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    class="tab-pane fade"
                    id="nav-paw"
                    role="tabpanel"
                    aria-labelledby="nav-paw-tab"
                >
                  <div class="row align-items-center offset-sm-1 g-3">
                    <div class="col-md-6 col-xl-4 order-1 order-md-0">
                      <h2 class="mb-md-5">Health Insurance</h2>
                      <p class="">
                        Make a plan for the emergence of life. We protect your
                        most precious assets, allowing you to devote your time
                        and energy to more essential things in life.
                      </p>
                      <p class="mt-3">
                        Discover the most appropriate fit for you and your
                        Family.
                      </p>
                      <a class="btn btn-primary btn-ensurance mt-5" href="#"
                      ><span
                          class="fas fa-chevron-right fa-xs btn-icon"
                      ></span
                      ><span class="btn-text">Get A Quote</span></a
                      >
                    </div>
                    <div class="col-md-6 col-xl-8 text-end">
                      <div class="img-shape">
                        <img
                            class="feature-img"
                            src="https://dummyimage.com/558%E2%80%8Ax%E2%80%8A391/000/ffffff.png"
                            alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    class="tab-pane fade"
                    id="nav-plane"
                    role="tabpanel"
                    aria-labelledby="nav-plane-tab"
                >
                  <div class="row align-items-center offset-sm-1 g-3">
                    <div class="col-md-6 col-xl-4 order-1 order-md-0">
                      <h2 class="mb-md-5">Funeral Insurance</h2>
                      <p class="">
                        Make a plan for the emergence of life. We protect your
                        most precious assets, allowing you to devote your time
                        and energy to more essential things in life.
                      </p>
                      <p class="mt-3">
                        Discover the most appropriate fit for you and your
                        Family.
                      </p>
                      <a class="btn btn-primary btn-ensurance mt-5" href="#"
                      ><span
                          class="fas fa-chevron-right fa-xs btn-icon"
                      ></span
                      ><span class="btn-text">Get A Quote</span></a
                      >
                    </div>
                    <div class="col-md-6 col-xl-8 text-end">
                      <div class="img-shape">
                        <img
                            class="feature-img"
                            src="https://dummyimage.com/558%E2%80%8Ax%E2%80%8A391/000/ffffff.png"
                            alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row offset-xl-2">
          <div class="col-12">
            <div class="mb-3 mb-md-5">
              <h2 class="mb-7 text-center text-sm-start">Best Services</h2>
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-3 mb-6 text-center text-sm-start">
                <img
                    class="shadow-icon"
                    src="../assets/image/icons/support.png"
                    height="60"
                    alt="..."
                />
                <h4 class="mt-4 fw-normal">24x7 Support</h4>
                <p class="mb-md-0">
                  Client is our most <br/>
                  important priority
                </p>
              </div>
              <div class="col-sm-6 col-lg-3 mb-6 text-center text-sm-start">
                <img
                    class="shadow-icon"
                    src="../assets/image/icons/edit.png"
                    height="60"
                    alt="..."
                />
                <h4 class="mt-4 fw-normal">Easy Claim System</h4>
                <p class="mb-md-0">
                  Express your desires <br/>and needs to us
                </p>
              </div>
              <div class="col-sm-6 col-lg-3 mb-6 text-center text-sm-start">
                <img
                    class="shadow-icon"
                    src="../assets/image/icons/money.png"
                    height="60"
                    alt="..."
                />
                <h4 class="mt-4 fw-normal">Easy installments</h4>
                <p class="mb-md-0">
                  It's quick, safe, and simple. Select several methods of
                  payment
                </p>
              </div>
              <div class="col-sm-6 col-lg-3 mb-6 text-center text-sm-start">
                <img
                    class="shadow-icon"
                    src="../assets/image/icons/security.png"
                    height="60"
                    alt="..."
                />
                <h4 class="mt-4 fw-normal">Strongly Secured</h4>
                <p class="mb-md-0">
                  Food is made and delivered directly to your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section class="py-0">
      <div class="container">
        <div class="row align-items-center justify-content-xl-center">
          <h2 class="text-center my-5">Partners</h2>
          <div class="col-auto col-md-4 col-lg-auto my-3 text-xl-start">
            <img
                src="../assets/image/gallery/zinara.jpeg"
                height="80"
                alt="Partner"
            />
          </div>
          <div class="col-auto col-md-4 col-lg-auto my-3 text-xl-start">
            <img
                src="../assets/image/gallery/zbc.jpeg"
                height="80"
                alt="Partner"
            />
          </div>
          <!-- <div class="col-auto col-md-4 col-lg-auto my-3 text-xl-start">
            <img
              src="../assets/image/gallery/partner-3.png"
              height="40"
              alt="Partner"
            />
          </div>
          <div class="col-auto col-md-4 col-lg-auto my-3 text-xl-start">
            <img
              src="../assets/image/gallery/partner-4.png"
              height="40"
              alt="Partner"
            />
          </div>
          <div class="col-auto col-md-4 col-lg-auto my-3 text-xl-start">
            <img
              src="../assets/image/gallery/partner-5.png"
              height="40"
              alt="Partner"
            />
          </div> -->
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section id="contact">
      <div class="container">
        <div class="row">
          <h2 class="text-center mb-8">Get In Touch</h2>
          <div class="col-12 col-lg-6 col-xl-7 mb-4 order-0 order-sm-0">
            <a class="logo-footer fs-7" href="#">
              <span class="text-primary fw-bolder">FBC</span>
              <span class="fw-thin"> Insurance</span></a>
            <p class="my-4">
              <i class="fas fa-map-marker-alt me-3"></i>
              <span class="">1500 Treat Ave, Suite 200 &nbsp;</span>
              <a class="" href="tel:+604-680-9785">+604-680-9785</a>
              <br/>Harare, Zimbabwe
            </p>
            <p class="">
              <i class="fas fa-envelope me-3 text-primary"> </i>
              <a href="mailto:vctung@outlook.com">insurance@fbc.co.zw </a>
            </p>
            <p class="">
              <i class="fas fa-phone-alt me-3 text-primary"> </i
              ><a href="tel:1-800-800-2299">1-800-800-2299 (Support)</a>
            </p>
          </div>
          <div class="col-12 col-lg-6 col-xl-5">
            <h3 class="my-4">Subscribe to newsletter</h3>
            <form class="position-relative">
              <div class="input-group-icon">
                <input
                    class="form-control"
                    type="email"
                    placeholder="Enter your email "
                    aria-label="email"/>
              </div>
              <button
                  class="btn btn-primary ml-3 btn-subscribe"
                  type="submit">
                Subscribe now
              </button>
            </form>
          </div>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section class="py-0">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="d-md-flex justify-content-between pb-1 pt-4">
              <div class="pb-4">
                <ul
                    class="
                    widget-list
                    d-flex
                    flex-wrap
                    justify-content-center justify-content-md-start
                  "
                >
                  <li><a class="widget-list-link fs-ms" href="#">FBC Bank</a></li>
                  <li class="ms-4">
                    <a class="widget-list-link fs-ms" href="#">FBC Building Society</a>
                  </li>
                  <li class="ms-4">
                    <a class="widget-list-link fs-ms" href="#">Microplan</a>
                  </li>
                  <!--                  <li class="ms-4">-->
                  <!--                    <a class="widget-list-link fs-ms" href="#">Products</a>-->
                  <!--                  </li>-->
                  <li class="ms-4">
                    <a class="widget-list-link fs-ms" href="#"
                    >Terms &amp; Conditions</a
                    >
                  </li>
                </ul>
              </div>
              <div class="pb-4">
                <ul class="list-unstyled list-inline my-2">
                  <li class="list-inline-item">
                    <a class="text-decoration-none" href="#!"
                    ><i class="fab fa-facebook-square fa-2x social-icons"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a class="text-decoration-none" href="#!"
                    ><i class="fab fa-instagram fa-2x social-icons"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a class="text-decoration-none" href="#!"
                    ><i class="fab fa-twitter-square fa-2x social-icons"> </i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a class="text-decoration-none" href="#!"
                    ><i class="fab fa-linkedin fa-2x social-icons"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->
  </div>
  <!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->
</template>

<script>
import motor from "@/assets/svg/motor.jpeg";
import home from "@/assets/svg/home.jpeg";
import hospital from "@/assets/svg/hospital.jpeg";
import funeral from "@/assets/svg/funeral.jpeg";

import useVuelidate from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'
import {useToast} from 'vue-toastification';
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import jwt_decode from "jwt-decode";
/* service imports */
import {registerUser} from "@/services/auth.service"

const toast = useToast();

const MOTOR_INSURANCE = 'Motor Insurance';
const HEALTH_INSURANCE = 'Health Insurance';
const HOME_INSURANCE = 'Home Insurance';
const FUNERAL_CASH_PLAN = 'Funeral Cash Plan';
const HOSPITAL_CASH_PLAN = 'Hospital Cash Plan';

export default {
  name: "ProfileOverview",
  components: {},

  setup() {
    return {v$: useVuelidate()}
  },

  data() {
    return {
      showMenu: false,
      isSubmitting: false,
      errorMessage: '',
      motor,
      hospital,
      home,
      funeral,
      quotation: false,
      disableUserDetails: false,
      getAQuoteForm: {
        firstname: '',
        lastname: '',
        idNumber: '',
        email: '',
        phoneNumber: '',
        productName: ''
      },
      productTypes: [MOTOR_INSURANCE, HOME_INSURANCE /*HEALTH_INSURANCE*/, FUNERAL_CASH_PLAN, HOSPITAL_CASH_PLAN]
    };
  },

  methods: {
    login() {
      this.$router.push("/sign-in");
    },

    registerNewUserDetails() {
      this.errorMessage = '';
      this.isSubmitting = true;

      const userDetail = {
        username: this.getAQuoteForm.email,
        id_number: this.getAQuoteForm.idNumber, //change to idNumber
        email: this.getAQuoteForm.email,
        firstname: this.getAQuoteForm.firstname,
        lastname: this.getAQuoteForm.lastname,
        password: "password",
        mobile_number: this.getAQuoteForm.phoneNumber,
      }

      registerUser(userDetail).then((response) => {
        console.log('#### response yedu', response);
        const { token, message } = response.data.data;
        if (token) {
          const {exp} = jwt_decode(token);
          const accessTokenExp = new Date(exp * 1000);
          this.$cookie.setCookie('access_token', token, {
            expire: accessTokenExp,
            path: '/',
            domain: '',
            secure: true,
            sameSite: '',
          });
          localStorage.setItem('client_detail', JSON.stringify(userDetail));
          localStorage.setItem('access_token', token);
          this.proceedToGetQuote();
        }
        // if (token) {
        //   const {exp} = jwt_decode(token);
        //   const accessTokenExp = new Date(exp * 1000);
        //   this.$cookie.setCookie('access_token', token, {
        //     expire: accessTokenExp,
        //     path: '/',
        //     domain: '',
        //     secure: true,
        //     sameSite: '',
        //   });
        //   localStorage.setItem('client_detail', JSON.stringify(userDetail));
        //   this.proceedToGetQuote();
        // }
        if (message) {
          this.errorMessage = response.message;
        }
        this.isSubmitting = false;
      }).catch((err) => {
        this.isSubmitting = false;
        console.log(err);
        toast.info('Please fill in all the required information');
      })
    },

    clearClientInfo() {
      this.disableUserDetails = false;
      this.getAQuoteForm = {};
      localStorage.removeItem('access_token');
      localStorage.removeItem('client_detail');
      this.$cookie.removeCookie('access_token');
      this.$cookie.removeCookie('refresh_token');
      this.$cookie.removeCookie('user_email');
    },
    gotoAdmin() {

      // this.$router.push("/pages/setPin");
      this.$router.push("/admin/main").catch(() => {
      });


    },
    populateUserDetails() {
      const clientDetail = JSON.parse(localStorage.getItem('client_detail'));
      console.log(clientDetail);
      if (clientDetail) {
        this.disableUserDetails = true;
        this.getAQuoteForm = {
          firstname: clientDetail.firstname,
          lastname: clientDetail.lastname,
          email: clientDetail.email,
          username: clientDetail.username,
          phoneNumber: clientDetail.mobile_number,
          idNumber: clientDetail.id_number,
          password: clientDetail.password,
          productName: clientDetail.productName
        };
        console.log('user details set...');
      } else {
        this.getAQuoteForm = {};
        this.disableUserDetails = false;
      }
    },

    proceedToGetQuote() {
      console.log('navigate continue to get a quote...');
      console.log(`Get a quote form data: `, this.getAQuoteForm);
      switch (this.getAQuoteForm.productName) {
        case MOTOR_INSURANCE:
          this.$router.push({path: '/get-quote/motor-vehicle-insurance'});
          break;
        case HOME_INSURANCE:
          this.$router.push({path: '/get-quote/home-insurance'});
          break;
        case HEALTH_INSURANCE:
          console.log(`health insurance was selected...`);
          break;
        case FUNERAL_CASH_PLAN:
          console.log(`funeral cash plan was selected...`);
          this.$router.push({path: '/get-quote/funeral-cash-plan'})
          break;
        case HOSPITAL_CASH_PLAN:
          console.log(`hospital cash plan was selected...`);
          this.$router.push({path: '/get-quote/hospital-cash-plan'})
          break;
        default:
          // alert user to choose a product type
          toast.error(`Please choose an insurance product. `);
      }
    }
  },

  validations() {
    return {
      getAQuoteForm: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        idNumber: {
          required
        },
        email: {
          required, email
        },
        phoneNumber: {
          required,
        },
        productName: {
          required
        }
      },
    }
  },

  mounted() {
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    // this.$store.state.isTransparent = "bg-white";
    // this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);

    //preload user details if any exist
    this.populateUserDetails();
  },

  beforeUnmount() {
    // this.$store.state.isAbsolute = false;
  },

};
</script>
