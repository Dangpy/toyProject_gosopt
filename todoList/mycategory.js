import { TODO_LIST } from "./TODO_LIST.js";

function showCategoryNames() {
  const container = document.querySelector(".mycategory--container");
  const categories = TODO_LIST.map((item) => {
    return `
    <h3 class="${item.category}">${item.categoryName}</h3>`;
  });
  container.innerHTML = categories.join("");
}

showCategoryNames();
