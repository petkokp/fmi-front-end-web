const filters = Array.from(document.getElementsByClassName("filter")).map(
  (filter) => {
    filter.addEventListener("change", (e) => {
      const query = e.target.highlightValue;

      fetch("https://api.npoint.io/51ed846bdd74ff693d7e/meals")
      .then((res) => res.json())
      .then((data) => {
        let filteredElements = [];

        switch (e.target.id) {
          case 'by-name':
            filteredElements = data.filter(meal => meal.name.includes(query)).map(
              (meal) =>
                `<ui5-li id="${meal.id}" additional-text="i" class="meal-item" image="${meal.image}" description="${meal.category}, ${meal.region}">${meal.name}<button class="meal-info-button">i</button></ui5-li>`
            );
            break;
          case 'by-region':
            filteredElements = data.filter(meal => meal.region.includes(query)).map(
              (meal) =>
                `<ui5-li id="${meal.id}" additional-text="i" class="meal-item" image="${meal.image}" description="${meal.category}, ${meal.region}">${meal.name}<button class="meal-info-button">i</button></ui5-li>`
            );
            break;
          case 'by-category':
            filteredElements = data.filter(meal => meal.category.includes(query)).map(
              (meal) =>
                `<ui5-li id="${meal.id}" additional-text="i" class="meal-item" image="${meal.image}" description="${meal.category}, ${meal.region}">${meal.name}<button class="meal-info-button">i</button></ui5-li>`
            );
            break;
          default:
            break;
        }
        console.log(e)

        document.getElementById("meals-list").innerHTML = filteredElements;
      });
    });
  }
);
