const root = document.querySelector(".root");

for (let i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  root.appendChild(grid);
}
