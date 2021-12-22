const infiniteScrollEx = document.getElementById("infiniteScrollEx");

infiniteScrollEx.addEventListener("load-more", (e) => {
  infiniteScrollEx.busy = true;

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      const li = document.createElement("ui5-li");
      li.textContent = "Fruit name" + i;
      infiniteScrollEx.appendChild(li);
    }

    infiniteScrollEx.busy = false;
  }, 200);
});
