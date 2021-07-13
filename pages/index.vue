<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
    style="height: 100%;"
    class="pa-4"
  >
    <v-col
      cols="12"
      md="6"
      lg="4"
    >
      <h1 class="text-h5 text-center unselectable">
        <span class="primary--text">Level</span>
        <span class="accent--text">Up</span>
        <span class="primary--text">Audio</span>
      </h1>
      <h2 class="text-h6 text-center mb-4 unselectable">
        Level up your game’s audio!
      </h2>
      <v-text-field
        v-model="query"
        placeholder="Search by name, author, tag, or format"
        outlined
        hide-details
        class="mb-4"
        @keyup.enter="search"
      />
      <div class="text-center">
        <v-btn
          color="primary"
          class="text-button"
          @click="search"
        >
          Search
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: vm => ({
    query: '',
  }),
  head: vm => ({
    title: 'Welcome',
  }),
  methods: {
    search() {
      if (!this.query) { return }
      console.log(this.query)
    },
  },
}
</script>
