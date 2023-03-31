function generateBlocks() {
  for (i = 0; i < 5; i++) {
    let blocks = document.getElementById("elements");
    let div = document.createElement("div");
    blocks.append(div);

    for (j = 0; j < 5; j++) {
      let redColor = Math.floor(Math.random() * 256);
      let greenColor = Math.floor(Math.random() * 256);
      let blueColor = Math.floor(Math.random() * 256);
      let item = document.createElement("div");
      item.setAttribute("id", "value" + i + j);
      item.style.width = "50px";
      item.style.height = "50px";
      item.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
      div.append(item);
    }
  }
}

function generateBlocksInterval() {
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      let redColor = Math.floor(Math.random() * 256);
      let greenColor = Math.floor(Math.random() * 256);
      let blueColor = Math.floor(Math.random() * 256);
      let block = document.getElementById("value" + i + j);
      block.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    }
  }
}

generateBlocks();
setInterval(generateBlocksInterval, 1000);
generateBlocksInterval();
