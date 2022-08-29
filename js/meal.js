//

const searchField = document.getElementById("search-field");
const searchBtn = document.getElementById("search-btn");

const loadMeals = () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealContainer = document.getElementById("meals-container");
  mealContainer.innerHTML = "";
  meals.forEach((meal) => {
    const recepie = document.createElement("div");
    recepie.innerHTML = `
               <div class="col">
                  <div class="card bg-light">
                    <img src="${
                      meal.strMealThumb
                    }" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6 class="card-title">${meal.strMeal}</h6>
                      <p class="card-text text-wrap">Ingredients:
                      ${
                        meal.strIngredient1 +
                        "," +
                        meal.strIngredient2 +
                        "," +
                        meal.strIngredient3 +
                        "," +
                        meal.strIngredient4 +
                        "," +
                        meal.strIngredient5 +
                        "," +
                        meal.strIngredient6
                      }
                      </p>
                      <p>Tags: ${
                        meal.strTags ? meal.strTags : "Not Available"
                      }</p>
                    </div>
                        <div class="card-footer">
                        <small class="text-muted">Catagory: ${
                          meal.strCategory ? meal.strCategory : "Not Available"
                        }</small>
                    </div>
                  </div>
                  </div>
        `;
    mealContainer.appendChild(recepie);
  });
};

searchBtn.addEventListener("click", function () {
  loadMeals();
});

loadMeals();
