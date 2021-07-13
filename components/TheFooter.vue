<template>
  <v-footer
    app
    class="pa-4 unselectable"
  >
    <p
      class="text-center mb-0"
      style="width: 100%;"
    >
      All audio files are made available under
      <br v-show="isMobile">
      <a
        href="https://creativecommons.org/publicdomain/zero/1.0/"
        target="_blank"
      >CC0 1.0 Universal</a>
    </p>
  </v-footer>
</template>

<script>
export default {
  computed: {
    isMobile: vm => vm.$vuetify.breakpoint.xs || vm.$vuetify.breakpoint.sm,
  },
}
</script>
