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
      <v-btn
        color="accent"
        icon
        class="mr-2"
        @click="toggleSave"
      >
        <v-icon v-text="saveIcon" />
      </v-btn>
      <v-btn
        v-show="showViewButton"
        icon
        class="mr-2"
        target="_blank"
        :href="`/asset?author=${authorId}&id=${assetId}`"
      >
        <v-icon v-text="'mdi-eye'" />
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
  computed: {
    isSaved() {
      return this.$store.state.savedAudio.some(audio => audio.authorId === this.authorId
        && audio.assetId === this.assetId && audio.path === this.path)
    },
    saveIcon() {
      return this.isSaved ? 'mdi-content-save-off' : 'mdi-content-save'
    },
    audioSave() {
      return { authorId: this.authorId, assetId: this.assetId, path: this.path }
    },
  },
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
    toggleSave() {
      this.$store.commit(this.isSaved ? 'unsaveAudio' : 'saveAudio', this.audioSave)
      localStorage.setItem('savedAudio', JSON.stringify(this.$store.state.savedAudio))
    },
  },
}
</script>
