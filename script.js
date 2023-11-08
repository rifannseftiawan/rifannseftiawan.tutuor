const audio = new Audio('serem.mp3');
audio.muted = true;

const playButton = document.getElementById('tombol-mainkan-audio');

playButton.addEventListener('click', function() {
  audio.play();
});
