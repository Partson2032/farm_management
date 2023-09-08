<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="mx-auto mt-4 text-center col-8">
          <p class="mb-0 text-dark text-muted">
            Copyright © {{ new Date().getFullYear() }} Samanyama.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer"
};
</script>
