const input = document.getElementById("input");
const button = document.getElementById("button");


button.addEventListener("click", (e) => {
  e.preventDefault();
  fetchPokemons()
  if (input.value == "") {
    return;
  }
  container_card.innerText = "";
  getpokemon(input.value);
  console.log(pokemon);
});
