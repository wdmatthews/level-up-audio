<template>
  <v-card>
    <v-card-title class="pa-4 header-font">
      <v-spacer />
      <slot name="title" />
      <v-spacer />
    </v-card-title>
    <div class="px-4 py-0">
      <slot name="default" />
    </div>
    <v-card-actions class="px-4 pb-4 pt-0">
      <v-spacer />
      <slot name="actions" />
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>
