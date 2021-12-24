document.getElementById("meals-list").addEventListener("click", (e) => {
  fetch("https://api.npoint.io/51ed846bdd74ff693d7e/meals")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.find((x) => x.id === e.target.id));
      const clickedItemFromList = data.find((item) => item.id === e.target.id);

      const dialog = document.getElementById("additional-info-dialog");

      dialog.setAttribute("header-text", clickedItemFromList.name);

      const table = `<ui5-table class="demo-table" id="table">
        <ui5-table-column slot="columns" style="width: 70%">
          <span style="line-height: 1.4rem; font-weight: bold">Ingredients</span>
        </ui5-table-column>
      
        <ui5-table-column slot="columns" style="width: 30%">
          <span style="line-height: 1.4rem; font-weight: bold">Measure</span>
        </ui5-table-column>
      
        ${clickedItemFromList.ingredients.map(
          (ingredient) => `
        <ui5-table-row>
        <ui5-table-cell>${ingredient.name}</ui5-table-cell>
        <ui5-table-cell>${ingredient.measure}</ui5-table-cell>
      </ui5-table-row>
      `
        )}
      </ui5-table>`;

      dialog.innerHTML = `<div class="meal-image-wrapper"><img src="${clickedItemFromList.image}" /></div><p class="meal-instruction">${clickedItemFromList.instruction}</p>${table}<div slot="footer"	class="dialog-footer">
        <div style="flex: 1;"></div>
        <ui5-button id="closeDialogButton">Close</ui5-button>
      </div>`;

      dialog.show();

      const dialogCloser = document.getElementById("closeDialogButton");

      dialogCloser.addEventListener("click", function () {
        dialog.close();
      });
    })
    .catch((e) => console.error(e));
});
