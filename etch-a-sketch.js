const container = document.querySelector(`.container`);
for (let i = 0; i < 256; i++) {
  let square = document.createElement(`div`);
  square.classList.add(`square`);
  square.addEventListener(`mouseover`, () => {
    square.classList.add(`draw`);
    console.log(`yas`);
  });
  container.appendChild(square);
}
