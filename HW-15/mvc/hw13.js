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

const fontGenerator = newFontGenerator(14);

export { newFontGenerator };
