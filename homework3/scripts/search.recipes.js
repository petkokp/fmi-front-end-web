Array.from(document.getElementsByClassName("filter")).map(
  (filter) => {
    filter.addEventListener("change", (e) => {
      const query = e.target.highlightValue;

      fetch("https://api.npoint.io/51ed846bdd74ff693d7e/meals")
        .then((res) => res.json())
        .then((data) => {
          const filteredElements = data
            .filter((meal) => meal[e.target.id].includes(query))
            .map(
              (meal) =>
                `<ui5-li id="${meal.id}" additional-text="i" class="meal-item" image="${meal.image}" description="${meal.category}, ${meal.region}">${meal.name}</ui5-li>`
            )
            .join('');

          document.getElementById("meals-list").innerHTML = filteredElements;
        });
    });
  }
);