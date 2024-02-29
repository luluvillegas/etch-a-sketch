function createGrid(numberOfSquares) {
  let totalSquares = numberOfSquares * numberOfSquares;
  for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement(`div`);
    square.classList.add(`square`);
    square.style.flexBasis = 100 / numberOfSquares + `%`;
    container.appendChild(square);
  }
}

function setDrawColor(color) {
  let squares = document.querySelectorAll(`.square`);
  squares = Array.from(squares);
  for (let i = 0; i < squares.length - 1; i++) {
    squares[i].addEventListener(`mouseover`, () => {
      if (color === BLACK_COLOR) {
        squares[i].style.backgroundColor = BLACK_COLOR;
      } else {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        squares[
          i
        ].style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      }
    });
  }
  currentColor = color;
}

function cleanGrid() {
  container.innerHTML = ``;
}

const BLACK_COLOR = `rgb(67, 69, 68)`;
let container = document.querySelector(`.container`);
let squaresPerSide = 16; //Default value
let totalSquares = squaresPerSide * squaresPerSide;
let currentColor = BLACK_COLOR; //Default color (black)

//Creates a default grid
createGrid(squaresPerSide);
setDrawColor(currentColor);

const sizeBtn = document.querySelector(`.size-btn`);
sizeBtn.addEventListener(`click`, () => {
  squaresPerSide = prompt(
    `How many squares per side? (between 1 and 100):`,
    32
  );
  if (squaresPerSide > 1 && squaresPerSide < 100) {
    cleanGrid();
    createGrid(squaresPerSide);
    setDrawColor(currentColor);
  } else {
    alert(
      `The number of squares per side must be bigger than 1 and smaller than 100!`
    );
  }
});

const colotBtn = document.querySelector(`.color-btn`);
colotBtn.addEventListener(`click`, () => {
  if (currentColor === BLACK_COLOR) {
    setDrawColor(`rainbow`);
  } else if (currentColor === "rainbow") {
    setDrawColor(BLACK_COLOR);
  }
});
