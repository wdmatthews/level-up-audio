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
        <h1 class="text-h5 text-center">
          Saved Audio
        </h1>
        <div
          v-for="(audio, i) in $store.state.savedAudio"
          :key="`audio-${i}`"
          class="mt-2"
        >
          <AudioPlayer
            show-view-button
            :author-id="audio.authorId"
            :asset-id="audio.assetId"
            :path="audio.path"
          />
        </div>
        <p
          v-show="$store.state.savedAudio.length === 0"
          class="mb-0 text-center"
        >
          No Saved Audio
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  head: vm => ({
    title: 'Saved',
  }),
}
</script>
