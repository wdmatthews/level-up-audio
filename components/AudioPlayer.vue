<template>
  <v-card class="pa-2">
    {{ path }}
  </v-card>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '',
    },
  },
}
</script>
