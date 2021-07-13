<template>
  <BaseCard>
    <template #title>
      {{ author.name }}
    </template>
    <template #actions>
      <v-btn
        color="primary"
        class="text-button"
        :to="url"
      >
        View Author
      </v-btn>
    </template>
  </BaseCard>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    url() {
      return `/author?id=${this.author.dir.substring(1)}`
    },
  },
}
</script>
