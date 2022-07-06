const userInputEl = document.querySelector("#validation-input");

userInputEl.addEventListener("blur", () => {
  if (userInputEl.value.length === Number(userInputEl.dataset.length)) {
    userInputEl.classList.add("valid");
    userInputEl.classList.remove("invalid");
  } else {
    userInputEl.classList.add("invalid");
    userInputEl.classList.remove("valid");
  }
});
