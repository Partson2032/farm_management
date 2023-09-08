<template>
  <!-- Navbar -->
  <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3"
      data-navbar-on-scroll="data-navbar-on-scroll"
  >
    <div class="container">
      <a class="navbar-brand" href="#"
      ><span class="text-primary fs-3 ms-2 fw-bolder">Samanyama</span
      ><span class="fw-thin fs-3"> Farms</span></a
      >

    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import downArrWhite from "@/assets/img/down-arrow-white.svg";
import downArrBlack from "@/assets/img/down-arrow-dark.svg";

export default {
  name: "navbar",
  data() {
    return {
      downArrWhite,
      downArrBlack,
    };
  },
  props: {
    btnBackground: String,
    isBlur: String,
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    darkModes() {
      return {
        "text-dark": this.darkMode,
      };
    },
  },
};
</script>
