const canvas = document.querySelector(".canvas");
const gridSizeBtn = document.querySelector("#grid-size-btn");

gridSizeBtn.addEventListener("click", adjustGrid);

function adjustGrid() {
  let gridSize = prompt(
    "Choose a new grid size between 2 and 100. E.g. if you choose 4 it will result in a 4x4 grid."
  );

  if (gridSize && gridSize > 1 && gridSize <= 100) {
    removeCurrentGrid();
    drawGrid(parseInt(gridSize));
  }
}

function removeCurrentGrid() {
  let pixelList = document.querySelectorAll(".pixel");

  pixelList.forEach((pixel) => canvas.removeChild(pixel));
}

function drawGrid(gridSize = 16) {
  const border = 2;
  let pixelAmount = gridSize * gridSize;
  let canvasWidth = canvas.clientWidth;
  let pixelSize = canvasWidth / gridSize - border;

  for (let i = 0; i < pixelAmount; i++) {
    const pixel = document.createElement("div");
    pixel.style.width = pixelSize + "px";
    pixel.style.height = pixelSize + "px";
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
    pixel.addEventListener("mouseover", () => pixel.classList.add("colored"));
  }
}

drawGrid();
