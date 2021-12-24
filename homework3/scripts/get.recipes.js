fetch("https://api.npoint.io/51ed846bdd74ff693d7e/meals")
  .then((res) => res.json())
  .then((data) => {
    const elements = data.map(
      (meal) =>
        `<ui5-li id="${meal.id}" class="meal-item" image="${meal.image}" additional-text="i" description="${meal.category}, ${meal.region}">${meal.name}</ui5-li>`
    ).join('');

    document.getElementById("meals-list").innerHTML = elements;
  });
