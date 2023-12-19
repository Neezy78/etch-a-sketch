const root = document.querySelector(".root");
const input = document.querySelector(".squares-input");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  if (input.value < 1 || input.value > 100) {
    alert("Please enter a value between 1 and 100");
    input.value = "";
    input.focus();
  } else {
    root.innerHTML = "";
    const gridValue = input.value * input.value;
    const height = input.value * 10 + "px";
    const width = input.value * 10 + "px";
    generateGrid(gridValue, height, width);
  }
});

function generateGrid(gridValue, height, width) {
  root.style.height = height;
  root.style.width = width;

  //   create grids according to values
  for (let i = 0; i < gridValue; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    root.appendChild(grid);
  }

  //   select all grids in order to mouseover change
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) =>
    grid.addEventListener("mouseleave", function (e) {
      console.log(e.target);
      e.target.style.backgroundColor = "blue";
    })
  );
}
