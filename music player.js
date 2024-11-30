// script.js
const audio = document.getElementById('audio');
const playButton = document.querySelector('.play-btn');
const seekBar = document.querySelector('.seek-bar');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const songTitle = document.querySelector('.song-title');
const artist = document.querySelector('.artist');
const albumArt = document.querySelector('.album-art');

let isPlaying = false;
let currentSongIndex = 0;

// List of songs
const songs = [
  {
    title: 'Old Money',
    artist: 'AP Dhillon',
    src: 'https://koshalworld.com/files/download/id/41899',
    cover: 'https://i.ytimg.com/vi/-K-WY0WRT48/maxresdefault.jpg'
  },
  {
    title: 'Lahore',
    artist: 'Karan Aujla',
    src: 'https://koshalworld.com/files/download/id/45173',
    cover: 'https://i1.sndcdn.com/artworks-gUQRauziMSa0tXNM-9YmGpA-t1080x1080.jpg'
  },
  {
    title: 'Bonita',
    artist: 'YoYo Honey Singh',
    src: 'https://koshalworld.com/files/download/id/43577',
    cover: 'https://koshalworld.com/siteuploads/thumb/sft88/43577_4.jpg'
  }
];

// Load song details
function loadSong(index) {
  const song = songs[index];
  songTitle.textContent = song.title;
  artist.textContent = song.artist;
  albumArt.src = song.cover;
  audio.src = song.src;
  isPlaying = false;
  playButton.textContent = '⏵';
}

// Play or pause the audio
playButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playButton.textContent = '⏵'; // Show play icon
  } else {
    audio.play();
    playButton.textContent = '⏸'; // Show pause icon
  }
  isPlaying = !isPlaying;
});

// Update the seek bar as the audio plays
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
  }
});

// Seek the audio when the seek bar is adjusted
seekBar.addEventListener('input', () => {
  if (audio.duration) {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
  }
});

// Play the previous song
prevButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playButton.textContent = '⏸';
  isPlaying = true;
});

// Play the next song
nextButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playButton.textContent = '⏸';
  isPlaying = true;
});

// Load the initial song
loadSong(currentSongIndex);

 


