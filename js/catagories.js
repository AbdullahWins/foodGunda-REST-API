//catagories

const loadCatagory = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCatagories(data.meals));
};

const displayCatagories = (catagories) => {
  const catagoryContainer = document.getElementById("catagory-container");
  catagories.forEach((catagory) => {
    recepie = document.createElement("div");
    recepie.innerHTML = `
          <p class="bg-success text-center py-3 m-6 fs-4 rounded col">${catagory.strCategory}</p>
            `;
    catagoryContainer.appendChild(recepie);
  });
};

loadCatagory();
