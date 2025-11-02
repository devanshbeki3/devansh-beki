const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "⏸️ Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});
