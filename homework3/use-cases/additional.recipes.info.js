fetch("https://api.npoint.io/51ed846bdd74ff693d7e")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.meals);
    const elements = data.meals.map(
      (meal) =>
        `<ui5-li image="${meal.image}" description="${meal.category}, ${meal.region}">${meal.name}</ui5-li>`
    );
    document.getElementById("meals-list").innerHTML = elements;
  });
