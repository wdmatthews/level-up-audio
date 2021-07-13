<template>
  <v-app-bar
    app
    class="unselectable"
  >
    <nuxt-link
      to="/"
      style="height: 32px"
      class="ml-4"
    >
      <img
        src="/logo-transparent-64.png"
        height="32"
      >
    </nuxt-link>
    <v-toolbar-title>
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
          :content="savedAudioCount"
          :value="savedAudioCount"
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
    savedAudioCount: vm => vm.$store.state.savedAudio.length,
  },
}
</script>
