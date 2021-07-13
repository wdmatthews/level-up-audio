<template>
  <v-app-bar
    app
    class="unselectable"
  >
    <v-toolbar-title>
      <nuxt-link
        v-show="isMobile"
        to="/"
        style="height: 32px"
        :class="{ 'd-block': isMobile, 'my-auto': true, 'ml-4': true }"
      >
        <img
          src="/logo-transparent-64.png"
          height="32"
        >
      </nuxt-link>
      <nuxt-link
        v-show="!isMobile"
        to="/"
        class="ml-4 text-decoration-none font-weight-bold header-font"
      >
        <span class="primary--text">Level</span>
        <span class="accent--text">Up</span>
        <span class="primary--text">Audio</span>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        to="/search"
        class="text-button"
      >
        Search
      </v-btn>
      <v-btn
        to="/saved"
        class="text-button"
      >
        <v-badge
          color="primary"
          :content="3"
          :value="3"
          inline
        >
          Saved
        </v-badge>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isMobile: vm => vm.$vuetify.breakpoint.xs || vm.$vuetify.breakpoint.sm,
  },
}
</script>
