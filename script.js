const coverImage = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audioElement = document.getElementById('audio-element');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration')
const playPauseBytton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let isPlaying = false;
let songIndex = 0;

const songs = [{
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
]

const playAudio = () => {
  isPlaying = true;
  audioElement.play();
  playPauseBytton.classList.replace('fa-play', 'fa-pause');
  playPauseBytton.title = 'Pause';
}

const pauseAudio = () => {
  isPlaying = false;
  audioElement.pause();
  playPauseBytton.classList.replace('fa-pause', 'fa-play');
  playPauseBytton.title = 'Play';
}

const playNextAudio = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playAudio();
}

const playPrevAudio = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playAudio();
}

// Update DOM
const loadSong = (song) => {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  audioElement.src = `music/${song.name}.mp3`;
  coverImage.src = `img/${song.name}.jpg`;
}

const updateProgressBar = (evt) => {
  if (isPlaying) {
    const {
      duration,
      currentTime
    } = evt.srcElement;
    const progressPercent = ((currentTime / duration) * 100).toFixed(2);
    progress.style.width = `${progressPercent}%`;
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    if (durationSeconds) {
      durationElement.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    // Calculate current time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeElement.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

loadSong(songs[songIndex]);

playPauseBytton.addEventListener('click', () => isPlaying ? pauseAudio() : playAudio());
prevButton.addEventListener('click', playPrevAudio);
nextButton.addEventListener('click', playNextAudio);
audioElement.addEventListener('timeupdate', updateProgressBar)
