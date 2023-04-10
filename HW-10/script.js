document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("keydown", (e) => {
    const keys = document.querySelectorAll(".btn");
    keys.forEach((el) => {
      el.classList.remove("play");
    });

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!key) return;

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add("play");
  });
});
