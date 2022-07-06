const negativeBtnEl = document.querySelector('[data-action="decrement"]');
const positiveBtnEl = document.querySelector('[data-action="increment"]');
const resultNumbEl = document.querySelector("#value");
let counterValue = 0;

const onAddNumber = function () {
  counterValue += 1;
  resultNumbEl.textContent = counterValue;
};

const onRemoveNumber = function () {
  counterValue -= 1;
  resultNumbEl.textContent = counterValue;
};

negativeBtnEl.addEventListener("click", onRemoveNumber);
positiveBtnEl.addEventListener("click", onAddNumber);

// console.log(positiveBtn);
// console.log(negativeBtn);
// console.log(counterValue);
// console.log(resultNumb);
