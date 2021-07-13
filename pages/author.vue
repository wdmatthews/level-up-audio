<template>
  <div>
    <v-row
      no-gutters
      justify="center"
      class="pa-4"
    >
      <v-col
        cols="12"
        md="6"
        xl="4"
      >
        <template v-if="author">
          <h1
            class="text-h5 text-center"
            v-text="author.name"
          />
          <div
            v-for="(asset, i) in assets"
            :key="`asset-${i}`"
            class="mt-4"
          >
            <SearchResultAsset :asset="asset" />
          </div>
        </template>
        <p
          v-show="!author && loaded"
          class="mb-0 text-center"
        >
          Author Not Found
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: vm => ({
    id: vm.$route.query?.id ?? '',
    author: null,
    assets: [],
    loaded: false,
  }),
  head: vm => ({
    title: 'Author',
  }),
  created() {
    if (this.id) {
      this.loadAuthor()
    }
  },
  methods: {
    async loadAuthor() {
      try {
        this.author = await this.$content(`${this.id}/author`).fetch()
        document.title = `${this.author.name} | Level Up Audio`
        this.assets = []
        for (const assetId of this.author.assets) {
          this.assets.push(await this.$content(`${this.id}/${assetId}/asset`).fetch())
        }
      } catch (error) {
        this.author = null
      }
      
      this.loaded = true
    },
  },
}
</script>
