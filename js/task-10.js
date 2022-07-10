function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const userInputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const newBoxes = document.querySelector("#boxes");

newBoxes.style.display = "flex";
newBoxes.style.flexWrap = "wrap";
newBoxes.style.padding = "30px";
newBoxes.style.alignItems = "center";

function createBoxes(amount) {
  amount = Number(userInputNumber.value);
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement("div");
    size += 10;
    newBox.style.width = size + "px";
    newBox.style.height = size + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.marginRight = "20px";
    newBoxes.append(newBox);
  }
}

function destroyBoxes() {
  newBoxes.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const newBox = document.createElement("div");
    newBox.style.width = size + "px";
    newBox.style.height = size + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.marginRight = "20px";
    fragment.append(newBox);
  }
  newBoxes.append(fragment);
}
function destroyBoxes() {
  newBoxes.innerHTML = "";
}
createBtn.addEventListener("click", () =>
  createBoxes(Number(userInputNumber.value))
);
destroyBtn.addEventListener("click", destroyBoxes);
