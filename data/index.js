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

  li.setAttribute("class", "ingredients-list");
  a.setAttribute("href", "#");

  li.appendChild(a);
  ingredientsDropdown.appendChild(li);

  a.innerHTML = uniqueIngredientsArray[i];
  }

}

addIngredientTags();

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
  a.setAttribute("href", "#");

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
  a.setAttribute("href", "#");

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
        ingredient.innerHTML = `<h6 class="text-reset">` + recipes[i].ingredients[j].ingredient + `</h6><p>${ingredientsQuantity} ${ingredientsUnit}</p>`;
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

  let getSiblings = function(e) {
    let siblings = []; 
    if (!e.parentNode) {
      return siblings;
    }
    let sibling  = e.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };

  for (let k = 0; k < ingredientsBlock.length; k++) {
    let arr = [];
    let siblings = getSiblings(ingredientsBlock[k].firstChild);
    for (let l = 0; l < siblings.length; l++) {
      arr.push(siblings[l].firstChild.innerHTML);
    }
    //console.log(arr.length);
  };

  mainSearchInput.addEventListener("keyup", () => {
    for (let i = 0; i < recipeName.length; i++) {
      let ingredientsList = document.querySelectorAll(".ingredients-list");
      let recipeCard = document.getElementById(`card-${i + 1}`);
      let recipeNameTxtValue = recipeName[i].textContent || recipeName[i].innerText;
      let ingredientsTxtValue = ingredientsBlock[i].textContent || ingredientsBlock[i].innerText;
      let descriptionTxtValue = recipeDescription[i].textContent || recipeDescription[i].innerText;
      if(mainSearchInput.value.length > 2) {
        if (recipeNameTxtValue.toUpperCase().indexOf(mainSearchInput.value.toUpperCase()) > -1 || ingredientsTxtValue.toUpperCase().indexOf(mainSearchInput.value.toUpperCase()) > -1 || descriptionTxtValue.toUpperCase().indexOf(mainSearchInput.value.toUpperCase()) > -1) {
          recipeCard.style.display = "";
          for (let j = 0; j < ingredientsList.length; j++) {
            if (ingredientsBlock[i].innerText.indexOf(ingredientsList[j].firstChild.innerText) > -1) {
              ingredientsList[j].firstChild.style.display = "";
            } else {
              ingredientsList[j].firstChild.style.display = "none";
            }
          }
        } else {
          recipeCard.style.display = "none";
        }
      } else {
        recipeCard.style.display = "";
        for (let j = 0; j < ingredientsList.length; j++) {
          ingredientsList[j].firstChild.style.display = "";
        }
      }
      //console.log(ingredientsBlock[i].innerText);
    }
  });

  let ingredientsList = document.querySelectorAll(".ingredients-list");
  for (let i = 0; i < recipeName.length; i++) {
    for (let j = 0; j < ingredientsList.length; j++) {
    }
  }
  console.log(ingredientsBlock[0].innerText);

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