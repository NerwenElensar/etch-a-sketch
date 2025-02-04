const canvas = document.querySelector(".canvas");

for (let i = 0; i < 256; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  canvas.appendChild(pixel);
  pixel.addEventListener("mouseover", () => pixel.classList.add("colored"));
}
