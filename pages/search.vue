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
        lg="4"
      >
        <v-text-field
          v-model="query"
          placeholder="Search by name, author, or tag"
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
        <div
          v-for="(result, i) in results"
          :key="`result-${i}`"
          class="mt-4"
        >
          <SearchResultAuthor
            v-if="result.slug === 'author'"
            :author="result"
          />
          <SearchResultAsset
            v-else-if="result.slug === 'asset'"
            :asset="result"
          />
        </div>
        <p
          v-show="results.length === 0 && searched"
          class="mt-4 mb-0 text-center"
        >
          No Results
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: vm => ({
    query: vm.$route.query?.query ?? '',
    results: [],
    searched: false,
  }),
  head: vm => ({
    title: 'Search',
  }),
  created() {
    if (this.query) {
      this.search()
    }
  },
  methods: {
    async search() {
      if (!this.query.trim()) { return }
      const query = this.query.trim()
      const lowerCaseQuery = query.toLowerCase()
      const queryWords = lowerCaseQuery.split(' ')
      
      if (this.$route.query.query !== this.query) {
        this.$router.replace({ path: 'search', query: { query: this.query } })
      }
      
      this.results = [
        ...await this.$content('', { deep: true })
          .search('name', query)
          .fetch(),
        ...await this.$content('', { deep: true })
          .search('description', query)
          .fetch(),
        ...await this.$content('', { deep: true })
          .where({
            tags: { $containsAny: queryWords },
          })
          .fetch(),
      ]
      
      this.searched = true
    },
  },
}
</script>
