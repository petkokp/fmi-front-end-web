// import { getRecipes } from '../infrastructure/repositories';

function test() {
  console.log("testsd");
}

fetch("https://api.npoint.io/51ed846bdd74ff693d7e/meals")
  .then((res) => res.json())
  .then((data) => {
    const elements = data.map(
      (meal) =>
        `<ui5-li id="${meal.id}" additional-text="i" class="meal-item" image="${meal.image}" description="${meal.category}, ${meal.region}">${meal.name}<button class="meal-info-button">i</button></ui5-li>`
    );

    document.getElementById("meals-list").innerHTML = elements;
  });
