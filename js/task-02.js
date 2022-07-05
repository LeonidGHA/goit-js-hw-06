const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientsItem = ingredients.map((el) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add(".item");
  listItemEl.textContent = el;
  return listItemEl;
});

// console.log(ingredientsItem);
ingredientsListEl.append(...ingredientsItem);
console.log(ingredientsListEl);
