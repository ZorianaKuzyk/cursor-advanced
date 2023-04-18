const text = document.querySelector("#text");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");
function* createIdGenerator() {
  for (let i = 1; ; i++) {
    yield i;
  }
}
const idGenerator = createIdGenerator();

function* newFontGenerator(size) {
  while (true) {
    let action = yield size;
    switch (action) {
      case "down":
        if (size >= 4) size -= 2;
        break;
      case "up":
        size += 2;
        break;
    }
  }
}

function pressFontBtn(event) {
  const fontSize = fontGenerator.next(event).value;
  fontText.style.fontSize = fontSize + "px";
  fontText.innerHTML = `${fontSize} px: ` + fontLetters;
}

const fontLetters = "Стартове значення";
const fontGenerator = newFontGenerator(14);
const fontText = document.getElementById("font_text");
const fontDownBtn = document.getElementById("font_down_btn");
const fontUpBtn = document.getElementById("font_up_btn");

fontText.innerHTML = fontLetters;
fontDownBtn.addEventListener("click", () => pressFontBtn("down"));
fontUpBtn.addEventListener("click", () => pressFontBtn("up"));
pressFontBtn();
