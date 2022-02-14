// Function to create tags when ingredient is clicked
function ingredientsTags() {
  const ingredientsList = document.querySelectorAll(".ingredients-list");
  const tagsArea = document.querySelector("#tags-area-ingredients");
  const ingredientsBlock = document.querySelectorAll(".ingredientsBlock");

  for (let i = 0; i < ingredientsList.length; i++) {
    ingredientsList[i].addEventListener("click", () => {
      const ingredientTag = document.createElement("a");

      ingredientTag.setAttribute("class", "ingredient-tag btn btn-primary m-1 d-inline-flex justify-content-between align-items-center text-white");
      ingredientTag.setAttribute("type", "button");

      ingredientTag.innerHTML = ingredientsList[i].firstChild.innerHTML + ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
      </svg>`;
      tagsArea.appendChild(ingredientTag);
      ingredientsList[i].style.display = "none";
      for (let j = 0; j < ingredientsBlock.length; j++) {
        const recipeCard = document.querySelectorAll(".recipe-card");
        if (ingredientsBlock[j].innerText.indexOf(ingredientsList[i].firstChild.innerText) > -1) {
          recipeCard[j].style.display = "";
        }
        else {
          recipeCard[j].style.display = "none";
        }
      }
    });
  }
}

// Function to create tags when appliance is clicked
function appliancesTags() {
  const appliancesList = document.querySelectorAll(".appliances-list");
  const tagsArea = document.querySelector("#tags-area-appliances");
  const appliancesBlock = document.querySelectorAll(".appliance-name");

  for (let i = 0; i < appliancesList.length; i++) {
    appliancesList[i].addEventListener("click", () => {
      const appliancesTag = document.createElement("a");

      appliancesTag.setAttribute("class", "ingredient-tag btn btn-success m-1 d-inline-flex justify-content-between align-items-center text-white");
      appliancesTag.setAttribute("type", "button");

      appliancesTag.innerHTML = appliancesList[i].firstChild.innerHTML + ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
      </svg>`;
      tagsArea.appendChild(appliancesTag);
      appliancesList[i].style.display = "none";
      for (let j = 0; j < appliancesBlock.length; j++) {
        const recipeCard = document.querySelectorAll(".recipe-card");
        if (appliancesBlock[j].innerText.indexOf(appliancesList[i].firstChild.innerText) > -1) {
          recipeCard[j].style.display = "";
        }
        else {
          recipeCard[j].style.display = "none";
        }
      }
    });
  }
}

// Function to create tags when utensil is clicked
function utensilsTags() {
  const utensilsList = document.querySelectorAll(".utensils-list");
  const tagsArea = document.querySelector("#tags-area-utensils");
  const utensilsBlock = document.querySelectorAll(".utensil-name");

  for (let i = 0; i < utensilsList.length; i++) {
    utensilsList[i].addEventListener("click", () => {
      const utensilsTag = document.createElement("a");

      utensilsTag.setAttribute("class", "ingredient-tag btn btn-danger m-1 d-inline-flex justify-content-between align-items-center text-white");
      utensilsTag.setAttribute("type", "button");

      utensilsTag.innerHTML = utensilsList[i].firstChild.innerHTML + ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
      </svg>`;
      tagsArea.appendChild(utensilsTag);
      utensilsList[i].style.display = "none";
      for (let j = 0; j < utensilsBlock.length; j++) {
        const recipeCard = document.querySelectorAll(".recipe-card");
        if (utensilsBlock[j].innerText.indexOf(utensilsList[i].firstChild.innerText) > -1) {
          recipeCard[j].style.display = "";
        }
        else {
          recipeCard[j].style.display = "none";
        }
      }
    });
  }
}

export { ingredientsTags, appliancesTags, utensilsTags };