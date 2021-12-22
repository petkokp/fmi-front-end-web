document.getElementById("meals-list").addEventListener("click", (e) => {
  fetch("https://api.npoint.io/51ed846bdd74ff693d7e/meals")
    .then((res) => res.json())
    .then((data) => console.log(data.find((x) => x.id === e.target.id)))
    .catch((e) => console.error(e));
});
