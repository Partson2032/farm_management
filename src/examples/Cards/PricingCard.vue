<template>
  <div class="card">
    <div class="p-3 mx-4 text-center card-header d-flex justify-content-center">
      <div
        :class="
          typeof icon === 'object' ? icon.background : 'bg-gradient-primary'
        "
        class="icon icon-shape icon-lg shadow text-center border-radius-lg mt-4 mb-2"
      >
        <i
          class="opacity-10"
          :class="typeof icon === 'string' ? icon : icon.component"
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <div class="p-3 pt-0 text-center card-body">
      <h6 class="mb-0 text-center mt-2">{{ title }}</h6>
      <span class="text-xs">{{ description }}</span>
      <hr class="my-3 horizontal dark" />
      <h5 class="mb-0 mt-1">{{ value }}</h5>
      <button
        @click="goTo()"
        type="button"
        class="mb-0 btn btn-rounded btn-sm mt-4"
        :class="`btn-primary`"
      >
        Subscribe
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultInfoCard",
  props: {
    icon: {
      type: [String, Object],
      required: true,
      component: {
        type: String,
      },
      background: {
        type: String,
      },
      default: () => ({
        background: "bg-white",
      }),
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    goTo(){
      this.$router.push("/manage");
    },
  },
};
</script>
