import { recipes } from "./recipes.js";

// Pushing all ingredients into the Ingredients dropdown menu
function addIngredientTags() {
  const ingredientsDropdown = document.querySelector(".ingredients-dropdown");

  let uniqueIngredientsArray = [];
  // Getting all ingredients from the recipes array and pushing only unique ones into the uniqueIngredientsArray
  function getAllIngredients() {
    let getAllIngredientsArray = [];
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        getAllIngredientsArray.push(recipes[i].ingredients[j].ingredient);
      }
    }
    uniqueIngredientsArray = [...new Set(getAllIngredientsArray)];
  }

  getAllIngredients();

  // Creating HTML elements for each ingredient and adding them to the dropdown menu
  for (let i = 0; i < uniqueIngredientsArray.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.setAttribute("href", "#");

  li.appendChild(a);
  ingredientsDropdown.appendChild(li);

  a.innerHTML = uniqueIngredientsArray[i];
  }

}

addIngredientTags();

// Creating a container for each recipe
function postRecipes() {
  for (let i = 0; i < recipes.length; i++) {
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

    recipeBlock.setAttribute("id", `card-${recipes[i].id}`);
    recipeBlock.setAttribute("class", "col");
    innerCardBlock.setAttribute("class", "card h-100 bg-secondary");
    cardImg.setAttribute("src", "assets/img-placeholder.jpg");
    textBlockHead.setAttribute("class", "row mt-2");
    recipeName.setAttribute("class", "recipe-name col-8 card-title text-reset ps-4 pe-0");
    cookTime.setAttribute("class", "col-4 text-reset fw-bold ps-4 pe-0");
    textBlockBody.setAttribute("class", "row mx-1 mt-2");
    ingredientsSection.setAttribute("class", "ingredientsBlock col fw-lighter");
    recipeTextSection.setAttribute("class", "recipe-description col fw-lighter");

    innerCardBlock.appendChild(cardImg);
    innerCardBlock.appendChild(textBlockHead);
    innerCardBlock.appendChild(textBlockBody);
    textBlockHead.appendChild(recipeName);
    textBlockHead.appendChild(cookTime);
    recipeBlock.appendChild(innerCardBlock);
    cardsSection.appendChild(recipeBlock);
    textBlockBody.appendChild(ingredientsSection);
    textBlockBody.appendChild(recipeTextSection);

    recipeName.innerHTML = recipes[i].name;
    cookTime.innerHTML = `<i class="far fa-clock"></i> ` + recipes[i].time + " min";
    recipeTextSection.innerHTML = recipes[i].description;

    // Looping through ingredients arrays to post ingredients for each recipe
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      const ingredient = document.createElement("div");

      ingredient.setAttribute("class", "row");

      // Adjusting the display style if units and quantity are defined
      let ingredientsQuantity;
      let ingredientsUnit;

      if (recipes[i].ingredients[j].unit == undefined) {
        ingredientsUnit = "";
      } else {
        ingredientsUnit = recipes[i].ingredients[j].unit;
      }

      if (recipes[i].ingredients[j].quantity == undefined) {
        ingredientsQuantity = "";
        ingredient.innerHTML = `<h6 class="text-reset">` + recipes[i].ingredients[j].ingredient + `</h6><p>${ingredientsQuantity} ${ingredientsUnit}</p>`;
      } else {
        ingredientsQuantity = recipes[i].ingredients[j].quantity;
        ingredient.innerHTML = `<h6 class="text-reset">` + recipes[i].ingredients[j].ingredient + `:</h6><p>${ingredientsQuantity} ${ingredientsUnit}</p>`;
      }
      
      ingredientsSection.appendChild(ingredient);
    }

  }

}

postRecipes();

// Main search functionality
function searchAll() {
  let mainSearchInput = document.getElementById("main-search");
  let recipeName = document.querySelectorAll(".recipe-name");
  let ingredientsBlock = document.querySelectorAll(".ingredientsBlock");
  let recipeDescription = document.querySelectorAll(".recipe-description");

  mainSearchInput.addEventListener("keyup", () => {
    for (let i = 0; i < recipeName.length; i++) {
      let recipeCard = document.getElementById(`card-${i + 1}`);
      let recipeNameTxtValue = recipeName[i].textContent || recipeName[i].innerText;
      let ingredientsTxtValue = ingredientsBlock[i].textContent || ingredientsBlock[i].innerText;
      let descriptionTxtValue = recipeDescription[i].textContent || recipeDescription[i].innerText;
      if(mainSearchInput.value.length > 2) {
        if (recipeNameTxtValue.toUpperCase().indexOf(mainSearchInput.value.toUpperCase()) > -1 || ingredientsTxtValue.toUpperCase().indexOf(mainSearchInput.value.toUpperCase()) > -1 || descriptionTxtValue.toUpperCase().indexOf(mainSearchInput.value.toUpperCase()) > -1) {
          recipeCard.style.display = "";
        } else {
          recipeCard.style.display = "none";
        }
      } else {
      recipeCard.style.display = "";
      }
    }
  });

}

searchAll();

// Ingredients search functionality
/*function searchIngredients() {
  let ingredientsInput = document.getElementById("ingredients-input");
  let ingredientsBlock = document.querySelectorAll(".ingredientsBlock");

  ingredientsInput.addEventListener("keyup", () => {
    for (let j = 0; j < ingredientsBlock.length; j++) {
      let recipeCard = document.getElementById(`card-${j + 1}`);
      let txtValue = ingredientsBlock[j].textContent || ingredientsBlock[j].innerText;
      if(ingredientsInput.value.length > 2) {
        if (txtValue.toUpperCase().indexOf(ingredientsInput.value.toUpperCase()) > -1) {
          recipeCard.style.display = "";
        } else {
          recipeCard.style.display = "none";
        }
      } else {
      recipeCard.style.display = "";
      }
    }
  });

}

searchIngredients();*/