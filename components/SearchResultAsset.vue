<template>
  <BaseCard>
    <template #title>
      {{ asset.name }}
    </template>
    <div class="mx-n2 mt-n2 mb-2 text-center">
      <v-chip
        v-for="(tag, i) in asset.tags"
        :key="`tag-${i}`"
        class="ma-2 header-font"
        v-text="tag"
      />
    </div>
    <p>{{ asset.description }}</p>
    <template #actions>
      <v-btn
        color="primary"
        class="text-button"
        :to="url"
      >
        View Asset
      </v-btn>
    </template>
  </BaseCard>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    url() {
      const [author, id] = this.asset.dir.substring(1).split('/')
      return `/asset?author=${author}&id=${id}`
    },
  },
}
</script>
