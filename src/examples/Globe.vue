<template>
  <div id="globe" class="position-absolute end-0 top-10 mt-sm-3 mt-7 me-lg-7">
    <canvas
      :width="width"
      :height="height"
      class="w-lg-100 h-lg-100 w-75 h-75 me-lg-0 me-n10 mt-lg-5"
    ></canvas>
  </div>
</template>

<script>


export default {
  name: "Globe",
  props: {
    width: {
      type: String,
      default: "700",
    },
    height: {
      type: String,
      default: "600",
    },
  },


};
</script>
