function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const nameColorEl = document.querySelector(".color");
const bodyBgcEl = document.querySelector("body");

function onChangeColorBody() {
  const colorChange = getRandomHexColor();
  nameColorEl.textContent = colorChange;
  bodyBgcEl.style.backgroundColor = colorChange;
}

changeColorBtnEl.addEventListener("click", onChangeColorBody);
