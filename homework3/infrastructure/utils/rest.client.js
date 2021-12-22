export const get = (url) =>
  fetch(url)
    .then((res) => res.json())
    .catch((e) => console.error(e));
