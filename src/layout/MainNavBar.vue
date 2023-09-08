<template>
  <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3"
      data-navbar-on-scroll="data-navbar-on-scroll"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/home">
          <span class="text-primary fs-3 ms-2 fw-bolder">FBC</span
          ><span class="fw-thin fs-3"> Samanyama</span>
      </router-link>
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
          id="navbarSupportedContent">
        <!--          <p class="mb-0 ms-auto fs-0 fw-normal">-->
        <!--            <i class="fas fa-phone-alt me-2"></i>Call Us Now-->
        <!--            <a class="" href="tel:+604-680-9785">+263(000)0000</a>-->
        <!--          </p>-->
        <ul
            class="
              navbar-nav
              ms-auto
              border-bottom border-lg-bottom-0
              pt-2 pt-lg-0">
          <li class="nav-item px-2">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item px-2">
            <router-link class="nav-link" to="/home#products">Services</router-link>
          </li>
          <!-- <li class="nav-item px-2"><a class="nav-link" href="#news">News &amp; Blog</a></li> -->
          <li class="nav-item px-2">
            <router-link class="nav-link" to="/home#contact">Get In Touch</router-link>
          </li>
        </ul>
        <div class="d-flex mt-2 align-items-center mt-lg-0">
          <router-link
              to="/sign-in"
              class="btn btn-sm btn-round mb-0 me-1 bg-gradient-primary">
            Already have an account? Sign in
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavBar"
}
</script>

<style scoped>

</style>