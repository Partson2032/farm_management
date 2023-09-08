<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-md-between justify-content-evenly py-4">
        <div
          class="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start"
        >
          <p class="fs--1 my-2 fw-light">
            All rights Reserved &copy; Samanyama,
            {{ new Date().getFullYear() }}
          </p>
        </div>
        <div class="col-12 col-sm-8 col-md-6">
          <p class="fs--1 my-2 text-center text-md-end">
            Powered &nbsp;by&nbsp;<a
              class="fw-bold text-primary"
              href="https://fbc.co.zw/"
              target="_blank"
              >Samanyama</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
