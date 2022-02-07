import { recipes } from "./recipes.js";

// Creating a container for each recipe
function postRecipes() {
  recipes.forEach((recipe) => {

    // Checking recipes array inside the function postRecipes()
    // console.log(recipe.name);
    const cardsSection = document.querySelector(".row.row-cols-1.row-cols-md-3.g-4.mt-1.mb-3.mx-5");

    const recipeBlock = document.createElement("div");
    const innerCardBlock = document.createElement("div");
    const cardImg = document.createElement("img");
    const textBlockHead = document.createElement("div");
    const recipeName = document.createElement("h5");
    const cookTime = document.createElement("h5");
    const textBlockBody = document.createElement("div");
    const ingredientsSection = document.createElement("div");
    const recipeTextSection = document.createElement("div");

    recipeBlock.setAttribute("class", "col");
    innerCardBlock.setAttribute("class", "card h-100 bg-secondary");

    cardImg.setAttribute("src", "assets/img-placeholder.jpg");
    textBlockHead.setAttribute("class", "row mt-2");
    recipeName.setAttribute("class", "col-8 card-title text-reset ps-4 pe-0");
    cookTime.setAttribute("class", "col-4 text-reset fw-bold ps-4 pe-0");
    textBlockBody.setAttribute("class", "row mx-1 mt-2");
    ingredientsSection.setAttribute("class", "col fw-lighter");
    recipeTextSection.setAttribute("class", "col fw-lighter");

    innerCardBlock.appendChild(cardImg);
    innerCardBlock.appendChild(textBlockHead);
    innerCardBlock.appendChild(textBlockBody);
    textBlockHead.appendChild(recipeName);
    textBlockHead.appendChild(cookTime);
    recipeBlock.appendChild(innerCardBlock);
    cardsSection.appendChild(recipeBlock);
    textBlockBody.appendChild(ingredientsSection);
    textBlockBody.appendChild(recipeTextSection);

    recipeName.innerHTML = recipe.name;
    cookTime.innerHTML = `<i class="far fa-clock"></i> ` + recipe.time + " min";
    recipeTextSection.innerHTML = recipe.description;

    // Looping through ingredients arrays to post ingredients for each recipe
    for (let i = 0; i < recipe.ingredients.length; i++) {
      const ingredient = document.createElement("div");

      ingredient.setAttribute("class", "row");

      // Adjusting the display style if units and quantity are defined
      let ingredientsQuantity;
      let ingredientsUnit;

      if (recipe.ingredients[i].unit == undefined) {
        ingredientsUnit = "";
      } else {
        ingredientsUnit = recipe.ingredients[i].unit;
      }

      if (recipe.ingredients[i].quantity == undefined) {
        ingredientsQuantity = "";
        ingredient.innerHTML = `<h6 class="text-reset">` + recipe.ingredients[i].ingredient + `</h6><p>${ingredientsQuantity} ${ingredientsUnit}</p>`;
      } else {
        ingredientsQuantity = recipe.ingredients[i].quantity;
        ingredient.innerHTML = `<h6 class="text-reset">` + recipe.ingredients[i].ingredient + `:</h6><p>${ingredientsQuantity} ${ingredientsUnit}</p>`;
      }
      
      ingredientsSection.appendChild(ingredient);
    }
  });
}

postRecipes();