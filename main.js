const GRID_CONTAINER_SIZE = 450;
const gridContainerUI = document.querySelector(".grid-container");
const clearButton = document.querySelector(".btn-clear");
const slider = document.querySelector(".slider");
const output = document.querySelector(".slider-value");
createTiles();

function createTiles(gridsize = 16) {
  //TO DO get gridsize from user
  for (let i = 0; i < gridsize; i++) {
    for (let j = 0; j < gridsize; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      let size = GRID_CONTAINER_SIZE / gridsize - 2; // (2 px for border)
      tile.style.height = `${size}px`;
      tile.style.width = `${size}px`;
      gridContainerUI.appendChild(tile);
    }
  }
  document
    .querySelectorAll(".tile")
    .forEach((tile) => tile.addEventListener("mouseenter", colourTile));
}

function colourTile(e) {
  e.target.classList.add("colored-tile");
}

// Buttons
clearButton.addEventListener("click", resetGrid);

function resetGrid() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    if (tile.classList.contains("colored-tile")) {
      tile.classList.remove("colored-tile");
    }
  });
}

// Slider
output.innerText = `${slider.value}x${slider.value}`;
slider.addEventListener("input", () => {
  output.innerText = `${slider.value}x${slider.value}`;
  removeTiles();
  createTiles(slider.value);
});

function removeTiles() {
  if (gridContainerUI.hasChildNodes) {
    const tiles = Array.from(gridContainerUI.children);
    tiles.forEach((tile) => gridContainerUI.removeChild(tile));
  }
}
