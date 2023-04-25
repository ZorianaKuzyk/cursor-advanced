function generateBlocks() {
  const wrapper = document.createElement("div");
  wrapper.className = "all_blocks";
  document.body.appendChild(wrapper);

  for (let i = 0; i < 25; i++) {
    const block = document.createElement("div");
    block.className = "block";
    block.style.width = "50px";
    block.style.height = "50px";
    block.style.backgroundColor = getRandomColor();
    wrapper.appendChild(block);
  }
}

function getRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function changeColor() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.style.backgroundColor = getRandomColor();
  });
}

function generateBlocksInterval() {
  generateBlocks();
  setInterval(changeColor, 1000);
}

generateBlocksInterval();
