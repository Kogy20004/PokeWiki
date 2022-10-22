// const API_URL = "https://jsonplaceholder.typicode.com";
const API_URL = "https://swapi.py4e.com/api/people/";
const HTMLrespuesta = document.querySelector("#app");
function agregar_People(params) { }
fetch(`${API_URL}`)
  .then((response) => response.json())
  .then((user) => {
    console.log(user);
    const People = user.results.map(
      (user) => `
      <li>${user.name}</li>
      <li>${user.gender}</li>
    `
    );
    console.log(People);
    HTMLrespuesta.innerHTML = `<ul>${People}</ul>`;
  });
