const GRID_CONTAINER_SIZE = 450;
const gridContainerUI = document.querySelector(".grid-container");
const clearButton = document.querySelector(".btn-clear");

createTiles();
const tiles = document.querySelectorAll(".tile");
tiles.forEach((tile) => tile.addEventListener("mouseenter", colourTile));

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
}

function colourTile(e) {
  e.target.classList.add("colored-tile");
}

// Buttons
clearButton.addEventListener("click", resetGrid);

function resetGrid() {
  tiles.forEach((tile) => {
    if (tile.classList.contains("colored-tile")) {
      tile.classList.remove("colored-tile");
    }
  });
}
