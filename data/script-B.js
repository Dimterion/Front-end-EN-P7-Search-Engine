// Script-B with the usage of the array class methods

import { recipes } from "./recipes.js";

let filter = "";

// Displaying all recipes
function displayRecipes(filter) {
  const recipesContainer = document.getElementById("cards-area");

  removeContent(recipesContainer);
  
  //2.Add for loop - ?
  const filteredRecipes = recipes.filter(recipe => {
    let recipeNameLowerCase = recipe.name.toLowerCase();
    let recipeDescriptionLowerCase = recipe.description.toLowerCase();
    let recipeIngredients = [];

    for (let ingredient of recipe.ingredients) {
      recipeIngredients.push(ingredient.ingredient)
    }
    //3.Add for loop - ?
    let recipeIngredientsLowerCase = recipeIngredients.map(e => e.toLowerCase());
    //3.
    //4.Make filter lowercase and leave only lowercase in return - ?
    return recipeNameLowerCase.includes(filter) || recipe.name.includes(filter) || recipeDescriptionLowerCase.includes(filter) || recipe.description.includes(filter) || recipeIngredientsLowerCase.includes(filter) || recipeIngredients.includes(filter);
    //4.
  });
  //2.
  // Displaying message about no results if search shows nothing
  const noResultsMsg = document.getElementById("no-results-message");

  noResultsMsg.setAttribute("class", "ms-md-5");
  
  if (filteredRecipes.length > 0) {
    noResultsMsg.style.display = "none";
  } else {
    noResultsMsg.style.display = "";
  }

  // Creating elements for all recipes
  for (let recipe of filteredRecipes) {
    const recipeCard = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardText = document.createElement("div");
    const cardHead = document.createElement("div");
    const recipeName = document.createElement("div");
    const recipeTime = document.createElement("div");
    const cardBody = document.createElement("div");
    const recipeIngredients = document.createElement("div");
    const recipeDescription = document.createElement("div");

    recipesContainer.appendChild(recipeCard);
    recipeCard.appendChild(cardImg);
    recipeCard.appendChild(cardText);
    cardText.appendChild(cardHead);
    cardText.appendChild(cardBody);
    cardHead.appendChild(recipeName);
    cardHead.appendChild(recipeTime);
    cardBody.appendChild(recipeIngredients);
    cardBody.appendChild(recipeDescription);

    recipeCard.setAttribute("class", "recipe-card col-md-6 col-lg-4 my-3");

    // Adding classes for ingredients, devices and utensils for tags functionality
    for (let ingredients of recipe.ingredients) {
      recipeCard.classList.add(ingredients.ingredient.split(" ").join("-").toLowerCase());
    }

    recipeCard.classList.add(recipe.appliance.split(" ").join("-").toLowerCase());

    for (let utensil of recipe.ustensils) {
      recipeCard.classList.add(utensil.split(" ").join("-").toLowerCase());
    }

    // Adding classes for propper cards display
    cardImg.setAttribute("src", "assets/img-placeholder.jpg");
    cardImg.setAttribute("class", "w-100 rounded-top");
    cardText.setAttribute("class", "main-container rounded-bottom bg-light");
    cardHead.setAttribute("class", "row top-row fs-5");
    cardBody.setAttribute("class", "row bottom-row");
    recipeName.setAttribute("class", "recipe-name col-8");
    recipeTime.setAttribute("class", "recipe-teme col-4 text-center");
    recipeIngredients.setAttribute("class", "ingredients col-6 p-3");
    recipeDescription.setAttribute("class", "recipe-description col-6 p-3");

    recipeName.innerHTML = recipe.name;
    recipeTime.innerHTML = `<b><i class="far fa-clock"></i> ` + recipe.time + `min</b>`;

    // Displaying ingredients depending on their quantities and units
    for (let ingredient of recipe.ingredients) {
      if (ingredient.quantity != undefined && ingredient.unit != undefined) {
        recipeIngredients.innerHTML = recipeIngredients.innerHTML + `<b>` + ingredient.ingredient + `: ` + `</b>` + ingredient.quantity + ` ` + ingredient.unit + `<br>`;
      } else if (ingredient.quantity != undefined && ingredient.unit == undefined) {
        recipeIngredients.innerHTML = recipeIngredients.innerHTML + `<b>` + ingredient.ingredient + `: ` + `</b>` + ingredient.quantity + `<br>`;
      } else {
        recipeIngredients.innerHTML = recipeIngredients.innerHTML + `<b>` + ingredient.ingredient + `</b>`;
      }
    }

    // Displaying recipes description and truncating text if it's too long
    if (recipe.description.length < 200) {
      recipeDescription.innerHTML = recipe.description;
    } else {
      recipeDescription.innerHTML = recipe.description.substring(0, 200) + "...";
    }

    // Tags function
    createTags();
  }
};

displayRecipes(filter);

// Removing all content for recipesContainer
//1.Not clear (see above).
function removeContent(e) {
  while (e.firstChild) {
    e.removeChild(e.firstChild);
  }
};
//1.

// Main search functionality
const mainSearch = document.getElementById("main-search");
mainSearch.addEventListener("keyup", () => {
  if (mainSearch.value.length > 2) {
    let filter = mainSearch.value.toLowerCase();
    displayRecipes(filter);
  } else {
    let filter = "";
    displayRecipes(filter);
  }
});

// Displaying all the ingredients for the advanced search buttons
let allIngredients = [];

for (let recipe of recipes) {
  for (let ingredient of recipe.ingredients) {
    allIngredients.push(ingredient.ingredient);
  }
};

// Storing only unique ingredients in the array
let allUniqueIngredients = [...new Set(allIngredients)];

const ingredientsDropdown = document.getElementById("ingredients-dropdown");

// Setting attributes for each unique ingredient in the dropdown menu and adding the tags function to filter recipes on click
for (let uniqueIngredient of allUniqueIngredients) {
  const ingredientMenuItem = document.createElement("a");

  ingredientMenuItem.innerHTML = uniqueIngredient;

  ingredientMenuItem.setAttribute("class", "ingredient dropdown-item text-white");
  ingredientMenuItem.setAttribute("href", "#");

  ingredientsDropdown.appendChild(ingredientMenuItem);

  let ingredientsTags = ingredientMenuItem.innerHTML.toLowerCase().split(" ");

  for (let ingredientTag of ingredientsTags) {
    ingredientMenuItem.classList.add(ingredientTag);
  }

  ingredientMenuItem.addEventListener("click", () => {
    const tagsArea = document.getElementById("tags-area");
    const indTag = document.createElement("button");
    
    tagsArea.appendChild(indTag);

    indTag.setAttribute("class", "btn btn-primary col-2");

    indTag.innerHTML = ingredientMenuItem.innerHTML;

    createTags();

    indTag.addEventListener("click", () => {
      tagsArea.removeChild(indTag);
      createTags();
    });
  });
};

// Setting unique ingredients to lower case and adding a key listener for the search functionality
const allUniqueIngredientsLowerCase = allUniqueIngredients.map(e => e.toLowerCase());

const ingredientsSearch = document.getElementById("ingredients-search");

ingredientsSearch.addEventListener("keyup", () => {
  if (ingredientsSearch.value.length > 2) {
    let filter = ingredientsSearch.value.toLowerCase();

    // Filtering unique ingredients to return only those that include filter
    let filteredIngredients = allUniqueIngredientsLowerCase.filter(ingredient => {
      return ingredient.includes(filter);
    });

    let allIngredients = document.getElementsByClassName("ingredient");

    for (let ingredient of allIngredients) {
      ingredient.classList.add("d-none");
    }

    for (let filteredIngredient of filteredIngredients) {
      const filteredIngredientItems = document.getElementsByClassName(filteredIngredient);

      for (let filteredIngredientItem of filteredIngredientItems) {
        filteredIngredientItem.classList.remove("d-none");
        filteredIngredientItem.classList.add("d-block");
      }
    }

  } else {
    const allIngredientItems = document.getElementsByClassName("ingredient");

    for (let ingredientItem of allIngredientItems) {
      ingredientItem.classList.remove("d-none");
      ingredientItem.classList.add("d-block");
    }
  }
});

// Displaying all the appliances for the advanced search buttons
let allAppliances = [];

for (let recipe of recipes) {
  allAppliances.push(recipe.appliance);
};

// Storing only unique devices in the array
let allUniqueAppliances = [...new Set(allAppliances)];

const appliancesDropdown = document.getElementById("appliances-dropdown");

// Setting attributes for each unique appliance in the dropdown menu and adding the tags function to filter recipes on click
for (let uniqueAppliance of allUniqueAppliances) {
  const applianceMenuItem = document.createElement("a");

  applianceMenuItem.innerHTML = uniqueAppliance;

  applianceMenuItem.setAttribute("class", "appliance dropdown-item text-white");
  applianceMenuItem.setAttribute("href", "#");

  appliancesDropdown.appendChild(applianceMenuItem);

  let appliancesTags = applianceMenuItem.innerHTML.toLowerCase().split(" ");

  for (let applianceTag of appliancesTags) {
    applianceMenuItem.classList.add(applianceTag);
  }

  applianceMenuItem.addEventListener("click", () => {
    const tagsArea = document.getElementById("tags-area");
    const indTag = document.createElement("button");
    
    tagsArea.appendChild(indTag);

    indTag.setAttribute("class", "btn btn-success col-2");

    indTag.innerHTML = applianceMenuItem.innerHTML;

    createTags();

    indTag.addEventListener("click", () => {
      tagsArea.removeChild(indTag);
      createTags();
    });
  });
};

// Setting unique appliances to lower case and adding a key listener for the search functionality
const allUniqueAppliancesLowerCase = allUniqueAppliances.map(e => e.toLowerCase());

const appliancesSearch = document.getElementById("appliances-search");

appliancesSearch.addEventListener("keyup", () => {
  if (appliancesSearch.value.length > 2) {
    let filter = appliancesSearch.value.toLowerCase();

    // Filtering unique appliances to return only those that include filter
    let filteredAppliances = allUniqueAppliancesLowerCase.filter(appliance => {
      return appliance.includes(filter);
    });

    let allAppliances = document.getElementsByClassName("appliance");

    for (let appliance of allAppliances) {
      appliance.classList.add("d-none");
    }

    for (let filteredAppliance of filteredAppliances) {
      const filteredApplianceItems = document.getElementsByClassName(filteredAppliance);

      for (let filteredApplianceItem of filteredApplianceItems) {
        filteredApplianceItem.classList.remove("d-none");
        filteredApplianceItem.classList.add("d-block");
      }
    }

  } else {
    const allApplianceItems = document.getElementsByClassName("appliance");

    for (let applianceItem of allApplianceItems) {
      applianceItem.classList.remove("d-none");
      applianceItem.classList.add("d-block");
    }
  }
});

// Displaying all the utensils for the advanced search buttons
let allUtensils = [];

for (let recipe of recipes) {
  for (let utensil of recipe.ustensils) {
    allUtensils.push(utensil);
  }
};

// Storing only unique utensils in the array
let allUniqueUtensils = [...new Set(allUtensils)];

const utensilsDropdown = document.getElementById("utensils-dropdown");

// Setting attributes for each unique utensil in the dropdown menu and adding the tags function to filter recipes on click
for (let uniqueUtensil of allUniqueUtensils) {
  const utensilMenuItem = document.createElement("a");

  utensilMenuItem.innerHTML = uniqueUtensil;

  utensilMenuItem.setAttribute("class", "utensil dropdown-item text-white");
  utensilMenuItem.setAttribute("href", "#");

  utensilsDropdown.appendChild(utensilMenuItem);

  let utensilsTags = utensilMenuItem.innerHTML.toLowerCase().split(" ");

  for (let utensilTag of utensilsTags) {
    utensilMenuItem.classList.add(utensilTag);
  }

  utensilMenuItem.addEventListener("click", () => {
    const tagsArea = document.getElementById("tags-area");
    const indTag = document.createElement("button");
    
    tagsArea.appendChild(indTag);

    indTag.setAttribute("class", "btn btn-danger col-2");

    indTag.innerHTML = utensilMenuItem.innerHTML;

    createTags();

    indTag.addEventListener("click", () => {
      tagsArea.removeChild(indTag);
      createTags();
    });
  });
};

// Setting unique utensils to lower case and adding a key listener for the search functionality
const allUniqueUtensilsLowerCase = allUniqueUtensils.map(e => e.toLowerCase());

const utensilsSearch = document.getElementById("utensils-search");

utensilsSearch.addEventListener("keyup", () => {
  if (utensilsSearch.value.length > 2) {
    let filter = utensilsSearch.value.toLowerCase();

    // Filtering unique utensils to return only those that include filter
    let filteredUtensils = allUniqueUtensilsLowerCase.filter(utensil => {
      return utensil.includes(filter);
    });

    let allUtensils = document.getElementsByClassName("utensil");

    for (let utensil of allUtensils) {
      utensil.classList.add("d-none");
    }

    for (let filteredUtensil of filteredUtensils) {
      const filteredUtensilItems = document.getElementsByClassName(filteredUtensil);

      for (let filteredUtensilItem of filteredUtensilItems) {
        filteredUtensilItem.classList.remove("d-none");
        filteredUtensilItem.classList.add("d-block");
      }
    }

  } else {
    const allUtensilItems = document.getElementsByClassName("utensil");

    for (let utensilItem of allUtensilItems) {
      utensilItem.classList.remove("d-none");
      utensilItem.classList.add("d-block");
    }
  }
});

// Creating tags
function createTags() {
  const recipesCards = document.getElementsByClassName("recipe-card");
  const tagsArea = document.getElementById("tags-area").children;

  // Displaying all recipes if no tags are shown
  if (tagsArea.length == 0) {
    for (let recipeCard of recipesCards) {
      recipeCard.classList.remove("d-none");
      recipeCard.classList.add("d-block");
    }
    // If tags are present displaying only those recipes that contain tags
  } else {
    for (let recipeCard of recipesCards) {
      recipeCard.classList.remove("d-none");
      recipeCard.classList.add("d-block");

      for (let tag of tagsArea) {
        tag = tag.innerHTML.split(" ").join("-").toLowerCase();

        if (recipeCard.classList.contains(tag)) {
          recipeCard.classList.add("d-block");
        } else {
          recipeCard.classList.remove("d-block");
          recipeCard.classList.add("d-none");
        }
      }
    }
  }
};