# level-up-audio
Level up your game’s audio!

## Goals
* Provide a database for free game audio
* Categorize the audio for quick searching
* Listen to the audio on the website to find if it fits your game

## Implementation
### Storage
* ~/assets/audio/author/file.json and ~/assets/audio/author/file.format
* JSON file to store metadata, such as description, tags, and formats
* Audio file under MP3, WAV, and OGG formats

### Search
* Nuxt Content module to search metadata and find the corresponding audio
* Search by name, author, tag, or format

### Listen
* Play audio clips
* Download audio clips
* Save clips in local storage to quickly switch between them
* Play multiple clips at the same time, to represent ambient with SFX
