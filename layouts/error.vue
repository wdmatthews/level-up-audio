<template>
  <span>Error {{ error.statusCode }}</span>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head: vm => ({
    title: `Error ${this.error.statusCode}`,
  }),
}
</script>
