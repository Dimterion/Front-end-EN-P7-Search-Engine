import { recipes } from "./recipes.js";

// Checking recipes array
console.log(recipes[0].name);

// Creating a container for each recipe
function postRecipes() {
  recipes.forEach((recipe) => {
    const cardsSection = document.querySelector(".row.row-cols-1.row-cols-md-3.g-4.mt-1.mx-5");
    const recipeBlock = document.createElement("div");
    const innerCardBlock = document.createElement("div");
    const cardImg = document.createElement("img");

    recipeBlock.setAttribute("class", "col");
    innerCardBlock.setAttribute("class", "card h-100");
    cardImg.setAttribute("src", "assets/img-placeholder.jpg");

    innerCardBlock.appendChild(cardImg);
    recipeBlock.appendChild(innerCardBlock);
    cardsSection.appendChild(recipeBlock);
  });
}

postRecipes();