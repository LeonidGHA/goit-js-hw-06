const formEl = document.querySelector(".login-form");

const onFormElSubmit = function (event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заплони поле, А-я-яй!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", onFormElSubmit);
