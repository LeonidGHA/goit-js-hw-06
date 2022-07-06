const userInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
// console.log(userInputEl);
userInputEl.addEventListener("input", () => {
  textEl.style.fontSize = userInputEl.value + "px";
});
