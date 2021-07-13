export default function ({ store }) {
  const savedAudioString = localStorage.getItem('savedAudio')
  if (!savedAudioString) { return }
  setTimeout(() => store.commit('loadSavedAudio', JSON.parse(savedAudioString)), 100)
}
