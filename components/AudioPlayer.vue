<template>
  <v-card class="pa-2">
    <v-row
      no-gutters
      align="center"
    >
      <v-btn
        color="primary"
        icon
        class="mr-2"
        @click="toggleAudio"
      >
        <v-icon v-text="playIcon" />
      </v-btn>
      <v-col>
        {{ path }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    authorId: {
      type: String,
      default: '',
    },
    assetId: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    showViewButton: {
      type: Boolean,
      default: false,
    },
  },
  data: vm => ({
    audio: null,
    playIcon: 'mdi-play',
  }),
  created() {
    this.audio = new Audio(require(`~/content/${this.authorId}/${this.assetId}/${this.path}`).default)
    this.audio.addEventListener('ended', this.pause)
  },
  methods: {
    play() {
      this.playIcon = 'mdi-pause'
      this.audio.play()
    },
    pause() {
      this.playIcon = 'mdi-play'
      this.audio.pause()
    },
    toggleAudio() {
      if (this.audio.paused) {
        this.play()
      } else {
        this.pause()
      }
    },
  },
}
</script>
