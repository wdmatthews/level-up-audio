export default {
  saveAudio(state, audio) {
    state.savedAudio.push(audio)
  },
  unsaveAudio(state, audio) {
    state.savedAudio.splice(state.savedAudio.indexOf(audio), 1)
  },
  loadSavedAudio(state, savedAudio) {
    state.savedAudio = savedAudio
  },
}
