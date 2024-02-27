function createGrid(numberOfSquares) {
  let totalSquares = numberOfSquares * numberOfSquares;
  console.log(
    `You are seeing a ` + numberOfSquares + `*` + numberOfSquares + `grid`
  );
  for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement(`div`);
    square.classList.add(`square`);
    square.style.flexBasis = 100 / numberOfSquares + `%`;
    square.addEventListener(`mouseover`, () => {
      square.classList.add(`draw`);
    });
    container.appendChild(square);
  }
}

function cleanGrid() {
  container.innerHTML = ``;
}

let container = document.querySelector(`.container`);
const defaultSquaresPerSide = 16;
let totalSquares = defaultSquaresPerSide * defaultSquaresPerSide;

createGrid(defaultSquaresPerSide);

const sizeBtn = document.querySelector(`.size-btn`);
sizeBtn.addEventListener(`click`, () => {
  let squaresPerSide = prompt(
    `How many squares per side? (between 1 and 100):`,
    32
  );
  if (squaresPerSide > 1 && squaresPerSide < 100) {
    cleanGrid();
    createGrid(squaresPerSide);
  } else {
    alert(
      `The number of squares per side must be bigger than 1 and smaller than 100!`
    );
  }
});
