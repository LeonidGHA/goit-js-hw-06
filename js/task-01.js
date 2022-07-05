const ulItems = document.querySelectorAll(".item");
console.log(`Number of categories:`, ulItems.length);

// console.log(ulItems);

ulItems.forEach((el) => {
  //   console.log(el);
  const foundTitle = el.querySelector("h2");
  //   console.log(foundTitle.textContent);
  const strUl = el.querySelectorAll("ul > li");
  //   console.log(strUl.length);
  console.log(`Category: ${foundTitle.textContent}
Elements: ${strUl.length}`);
});
