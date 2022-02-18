import { recipes } from "./recipes.js";
import { ingredientsTags, appliancesTags, utensilsTags } from "./tags.js";

// Pushing all ingredients into the Ingredients dropdown menu
function addIngredientsToDropdown() {
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

  li.setAttribute("class", "ingredients-list");
  a.setAttribute("class", " text-white");
  a.setAttribute("style", " cursor: pointer");

  li.appendChild(a);
  ingredientsDropdown.appendChild(li);

  a.innerHTML = uniqueIngredientsArray[i];
  }

}

addIngredientsToDropdown();

// Pushing all appliancess into the Appliance dropdown menu
function addApplianceTags() {
  const appliancesDropdown = document.querySelector(".appliance-dropdown");

  let uniqueAppliancesArray = [];

  // Getting all appliances from the recipes array and pushing only unique ones into the uniqueAppliancesArray
  function getAllAppliances() {
    let getAllAppliancesArray = [];
    for (let i = 0; i < recipes.length; i++) {
      getAllAppliancesArray.push(recipes[i].appliance);
    }
    uniqueAppliancesArray = [...new Set(getAllAppliancesArray)];
  }

  getAllAppliances();

  // Creating HTML elements for each appliance and adding them to the dropdown menu
  for (let i = 0; i < uniqueAppliancesArray.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  li.setAttribute("class", "appliances-list");
  a.setAttribute("class", " text-white");
  a.setAttribute("style", " cursor: pointer");

  li.appendChild(a);
  appliancesDropdown.appendChild(li);

  a.innerHTML = uniqueAppliancesArray[i];
  }

}

addApplianceTags();

// Pushing all utensils into the Utensils dropdown menu
function addUtensilTags() {
  const utensilsDropdown = document.querySelector(".utensils-dropdown");

  let uniqueUtensilsArray = [];

  // Getting all utensils from the recipes array and pushing only unique ones into the uniqueUtensilsArray
  function getAllUtensils() {
    let getAllUtensilsArray = [];
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ustensils.length; j++) {
        getAllUtensilsArray.push(recipes[i].ustensils[j]);
      }
    }
    uniqueUtensilsArray = [...new Set(getAllUtensilsArray)];
  }

  getAllUtensils();

  // Creating HTML elements for each utensil and adding them to the dropdown menu
  for (let i = 0; i < uniqueUtensilsArray.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  li.setAttribute("class", "utensils-list");
  a.setAttribute("class", " text-white");
  a.setAttribute("style", " cursor: pointer");

  li.appendChild(a);
  utensilsDropdown.appendChild(li);

  a.innerHTML = uniqueUtensilsArray[i];
  }

}

addUtensilTags();

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
    const applianceSection = document.createElement("div");
    const utensilsSection = document.createElement("div");

    recipeBlock.setAttribute("class", "recipe-card col");
    recipeBlock.setAttribute("style", "display");
    innerCardBlock.setAttribute("class", "card h-100 bg-secondary");
    cardImg.setAttribute("src", "assets/img-placeholder.jpg");
    textBlockHead.setAttribute("class", "row mt-2");
    recipeName.setAttribute("class", "recipe-name col-8 card-title text-reset ps-4 pe-0");
    cookTime.setAttribute("class", "col-4 text-reset fw-bold ps-4 pe-0");
    textBlockBody.setAttribute("class", "row mx-1 mt-2");
    ingredientsSection.setAttribute("class", "ingredientsBlock col fw-lighter");
    recipeTextSection.setAttribute("class", "recipe-description col fw-lighter");
    applianceSection.setAttribute("class", "appliance-name");
    applianceSection.setAttribute("style", "display: none");
    utensilsSection.setAttribute("style", "display: none");
    utensilsSection.setAttribute("class", "utensil-name");

    innerCardBlock.appendChild(cardImg);
    innerCardBlock.appendChild(textBlockHead);
    innerCardBlock.appendChild(textBlockBody);
    textBlockHead.appendChild(recipeName);
    textBlockHead.appendChild(cookTime);
    recipeBlock.appendChild(innerCardBlock);
    cardsSection.appendChild(recipeBlock);
    textBlockBody.appendChild(ingredientsSection);
    textBlockBody.appendChild(recipeTextSection);
    ingredientsSection.appendChild(applianceSection);
    ingredientsSection.appendChild(utensilsSection);

    recipeName.innerHTML = recipes[i].name;
    cookTime.innerHTML = `<i class="far fa-clock"></i> ` + recipes[i].time + " min";
    // Recipes text display without truncation
    recipeTextSection.innerHTML = recipes[i].description;
    applianceSection.innerHTML = recipes[i].appliance;

    /*
    // Truncating recipes text length if it's longer than 150 characters
    if (recipeTextSection.length < 150) {
      recipeTextSection.innerHTML = recipes[i].description;
    } else {
      recipeTextSection.innerHTML = recipes[i].description.substring(0, 150) + "...";
    }
    */

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
        ingredient.innerHTML = `<h6 class="text-reset">` + recipes[i].ingredients[j].ingredient + `</h6><p>${ingredientsQuantity} ${ingredientsUnit}</p>`;
      }
      
      ingredientsSection.appendChild(ingredient);
    }

    // Looping through utensils arrays to post utensils for each recipe
    for (let j = 0; j < recipes[i].ustensils.length; j++) {
      const utensil = document.createElement("div");
      utensil.innerHTML = recipes[i].ustensils[j];
      utensilsSection.appendChild(utensil);
    }

  }

}

postRecipes();

// Main search functionality
function searchAll() {
  let mainSearchInput = document.getElementById("main-search");
  let recipeName = document.querySelectorAll(".recipe-name");

  mainSearchInput.addEventListener("keyup", () => {
    for (let i = 0; i < recipeName.length; i++) {
      let ingredientsBlock = document.querySelectorAll(".ingredientsBlock");
      let recipeDescription = document.querySelectorAll(".recipe-description");
      /* Not needed
      let ingredientsList = document.querySelectorAll(".ingredients-list");
      let appliancesList = document.querySelectorAll(".appliances-list");
      let utensilsList = document.querySelectorAll(".utensils-list");
      */
      let recipeCard = document.querySelectorAll(".recipe-card");
      let recipeNameTxtValue = recipeName[i].textContent || recipeName[i].innerText;
      let ingredientsTxtValue = ingredientsBlock[i].textContent || ingredientsBlock[i].innerText;
      let descriptionTxtValue = recipeDescription[i].textContent || recipeDescription[i].innerText;
      
      if(mainSearchInput.value.length > 2) {
        if (recipeNameTxtValue.toUpperCase().indexOf(mainSearchInput.value.toUpperCase()) > -1 || ingredientsTxtValue.toUpperCase().indexOf(mainSearchInput.value.toUpperCase()) > -1 || descriptionTxtValue.toUpperCase().indexOf(mainSearchInput.value.toUpperCase()) > -1) {
          recipeCard[i].style.display = "";
          /* Not needed
          // Filtering Ingredients dropdown
          for (let j = 0; j < ingredientsList.length; j++) {
            if (ingredientsBlock[i].innerText.toUpperCase().indexOf(ingredientsList[j].firstChild.innerText.toUpperCase()) > -1) {
              ingredientsList[j].firstChild.style.display = "";
            } else {
              ingredientsList[j].firstChild.style.display = "none";
            }
          }
          // Filtering Appliance dropdown
          for (let j = 0; j < appliancesList.length; j++) {
            if (ingredientsBlock[i].firstChild.innerText.toUpperCase().indexOf(appliancesList[j].firstChild.innerText.toUpperCase()) > -1) {
              appliancesList[j].firstChild.style.display = "";
            } else {
              appliancesList[j].firstChild.style.display = "none";
            }
          }
          // Filtering Utensil dropdown
          for (let j = 0; j < utensilsList.length; j++) {
            if (ingredientsBlock[i].firstChild.nextSibling.innerText.toUpperCase().indexOf(utensilsList[j].firstChild.innerText.toUpperCase()) > -1) {
              utensilsList[j].firstChild.style.display = "";
            } else {
              utensilsList[j].firstChild.style.display = "none";
            }
          }
          */
        } else {
          recipeCard[i].style.display = "none";
        }
      } else {
        recipeCard[i].style.display = "";
        /* Not needed
        // Displaying all dropdowns items if nothing is put into the search field
        for (let j = 0; j < ingredientsList.length; j++) {
          ingredientsList[j].firstChild.style.display = "";
        }
        for (let j = 0; j < appliancesList.length; j++) {
          appliancesList[j].firstChild.style.display = "";
        }
        for (let j = 0; j < utensilsList.length; j++) {
          utensilsList[j].firstChild.style.display = "";
        }
        */
      }
    }

  });

}

searchAll();

// Imported functions
ingredientsTags();
appliancesTags();
utensilsTags();