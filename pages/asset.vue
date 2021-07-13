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
        <template v-if="asset">
          <h1
            class="text-h5 text-center"
            v-text="asset.name"
          />
          <h2 class="text-h6 mb-4 text-center">
            Provided by <a
              target="_blank"
              :href="asset.website"
            >{{ author.name }}</a>
          </h2>
          <div class="mx-n2 mt-n2 mb-2 text-center">
            <v-chip
              v-for="(tag, i) in asset.tags"
              :key="`tag-${i}`"
              class="ma-2 header-font"
              v-text="tag"
            />
          </div>
          <p
            class="mb-0"
            v-text="asset.description"
          />
          <div
            v-for="(path, i) in asset.files"
            :key="`path-${i}`"
            class="mt-2"
          >
            <AudioPlayer
              :author-id="authorId"
              :asset-id="id"
              :path="path"
            />
          </div>
        </template>
        <p
          v-show="(!author || !asset) && loaded"
          class="mb-0 text-center"
        >
          Asset Not Found
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: vm => ({
    authorId: vm.$route.query?.author ?? '',
    id: vm.$route.query?.id ?? '',
    author: null,
    asset: null,
    loaded: false,
  }),
  head: vm => ({
    title: 'Asset',
  }),
  created() {
    if (this.authorId && this.id) {
      this.loadAsset()
    }
  },
  methods: {
    async loadAsset() {
      try {
        this.author = await this.$content(`${this.authorId}/author`).fetch()
        this.asset = await this.$content(`${this.authorId}/${this.id}/asset`).fetch()
        document.title = `${this.asset.name} | ${this.author.name} | Level Up Audio`
      } catch (error) {
        this.asset = null
      }
      
      this.loaded = true
    },
  },
}
</script>
