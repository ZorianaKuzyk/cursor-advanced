document.addEventListener("DOMContentLoaded", () => {
  const sounds = {
    A: new Audio("./sounds/clap.wav"),
    S: new Audio("./sounds/hihat.wav"),
    D: new Audio("./sounds/kick.wav"),
    F: new Audio("./sounds/openhat.wav"),
    G: new Audio("./sounds/boom.wav"),
    H: new Audio("./sounds/ride.wav"),
    J: new Audio("./sounds/snare.wav"),
    K: new Audio("./sounds/tom.wav"),
    L: new Audio("./sounds/tink.wav"),
  };

  document.addEventListener("click", function (value) {
    const key = value.target.textContent;
    sounds[key].play();
  });
});
