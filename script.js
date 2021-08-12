const audioElement = document.getElementById('audio-element');
const playPauseBytton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let isPlaying = false;

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

const playNextAudio = () => {}

const playPrevAudio = () => {}

playPauseBytton.addEventListener('click', () => isPlaying ? pauseAudio() : playAudio());

