const userNameInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

// console.log(userNameInputEl);
// console.log(userNameOutputEl);

userNameInputEl.addEventListener("input", (event) => {
  if (userNameInputEl.value === "") {
    return (userNameOutputEl.textContent = "Anonymous");
  }
  return (userNameOutputEl.textContent = userNameInputEl.value);
});

// console.log(userNameOutputEl);
