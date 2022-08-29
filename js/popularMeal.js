//

const loadPopular = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPopular(data.meals[0]));
};

const displayPopular = (meal) => {
  const popularContainer = document.getElementById("popular-meal-container");
  popularContainer.innerHTML = `
  <div class="bg-light">
                    <img src="${
                      meal.strMealThumb
                    }" class="card-img-top"/>
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
    `;
  console.log(popular);
};

loadPopular();
