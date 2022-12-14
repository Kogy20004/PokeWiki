// hay 898 pokemones en total
const container_card = document.getElementById("container_card");
const all_buttons = document.querySelectorAll(".button");
const generaciones = {
  gen_1: [1, 151],
  gen_2: [152, 251],
  gen_3: [252, 386],
  gen_4: [387, 493],
  gen_5: [494, 649],
  gen_6: [650, 721],
  gen_7: [722, 809],
  gen_8: [810, 898],
};
const fetchPokemons = async (Initial, end) => {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].disabled = true;
  }
  for (let i = Initial; i <= end; i++) {
    await getpokemon(i);
  }
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].disabled = false;
  }
};

function types(cuantos, type, id) {
  const lugar = "pok_" + id;
  const imgs = document.querySelector(`#${lugar} .types`);
  const imgs_type_1 = `<img src="./Img/Tipo_${type[0].type.name}.png" alt="" id="type_1" />`;
  if (cuantos == 1) {
    imgs.insertAdjacentHTML("beforeend", imgs_type_1);
  } else {
    const imgs_type_2 = `<img src="./Img/Tipo_${type[1].type.name}a.png" alt="" id="type_2" />`;
    imgs.insertAdjacentHTML("beforeend", imgs_type_1);
    imgs.insertAdjacentHTML("beforeend", imgs_type_2);
  }
}

const getpokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  create_pokemon_card(pokemon);
  console.log(pokemon);
};
fetchPokemons(generaciones.gen_1[0], generaciones.gen_1[1]);

function create_pokemon_card(pokemon) {
  const cuantos = pokemon.types.length;
  const card = `
  <div class="card" id="pok_${pokemon.id}">
    <div class="info_card">
      <div class="img_card">
        <img
          class="img_normal"
          id="img_pokemon"
          src="${pokemon.sprites.front_default}"
          alt=""/>
        <img
          class="img_shiny"
          id="img_pokemon"
          src="${pokemon.sprites.front_shiny}"
          alt=""/>
      </div>
      <div class="details_card">
        <div class="id_pokedex">
          <span>#${pokemon.id.toString().padStart(3, 0)}</span>
        </div>
        <div class="name_card">
          <h2>
            ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
        </div>
        <div class="Basic_data">
          <p>Altura<span>${pokemon.height / 10}m</span></p>
          <p>Peso<span>${pokemon.weight / 10}kg</span></p>
        </div>
        <div class="stats">
          <div class="stats_containesr" id="Ps">
            <span>Ps</span>
            <div class="progress">
              <div class="value" style="width:
              ${(pokemon.stats[0].base_stat / 255) * 100}
              %;">${pokemon.stats[0].base_stat}
            </div>
          </div>
        </div>
          <div class="stats_containesr" id="Att">
            <span>Att</span>
            <div class="progress">
              <div class="value" style="width:${
                (pokemon.stats[1].base_stat / 255) * 100}
                %;">${pokemon.stats[1].base_stat}</div>
              </div>
          </div>
          <div class="stats_containesr" id="Def">
            <span>Def</span>
            <div class="progress">
              <div class="value" style="width:${
                (pokemon.stats[2].base_stat / 255) * 100}
                %;">${pokemon.stats[2].base_stat}</div>
            </div>
          </div>
          <div class="stats_containesr" id="Vel">
            <span>Vel</span>
            <div class="progress">
              <div class="value" style="width:${
                (pokemon.stats[3].base_stat / 255) * 100}
                %;">${pokemon.stats[3].base_stat}</div>
              </div>
              </div>
              <div class="stats_containesr" id="Att_S">
              <span>At.S</span>
              <div class="progress">
              <div class="value" style="width:${
                (pokemon.stats[4].base_stat / 255) * 100}
                %;">${pokemon.stats[4].base_stat}</div>
            </div>
            </div>
          <div class="stats_containesr" id="Def_S">
          <span>De.S</span>
            <div class="progress">
              <div class="value" style="width:${
                (pokemon.stats[5].base_stat / 255) * 100
              }%;">${pokemon.stats[5].base_stat}</div>
              </div>
              </div>
              </div>
              <div class="types"></div>
              </div>
    </div>
  </div>`;
  const crear = container_card.insertAdjacentHTML("beforeend", card);
  crear;
  types(cuantos, pokemon.types, pokemon.id);
}

const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value == "") {
    container_card.innerText = "Pokemon no encontrado";
    return;
  }
  container_card.innerText = "";
  getpokemon(input.value);
  console.log(pokemon);
});

const all_pokemon = document.getElementById("all_pokemon");
all_pokemon.addEventListener("click", () => {
  container_card.innerText = "";

  fetchPokemons(generaciones.gen_1[0], generaciones.gen_8[1]);
});
const gen_1 = document.getElementById("gen_1");
const gen_2 = document.getElementById("gen_2");
const gen_3 = document.getElementById("gen_3");
const gen_4 = document.getElementById("gen_4");
const gen_5 = document.getElementById("gen_5");
const gen_6 = document.getElementById("gen_6");
const gen_7 = document.getElementById("gen_7");
const gen_8 = document.getElementById("gen_8");
{
  gen_1.onclick = function () {
    container_card.innerText = "";
    fetchPokemons(generaciones.gen_1[0], generaciones.gen_1[1], gen_1);
  };
  gen_2.onclick = function () {
    container_card.innerText = "";
    fetchPokemons(generaciones.gen_2[0], generaciones.gen_2[1], gen_2);
  };
  gen_3.onclick = function () {
    container_card.innerText = "";
    fetchPokemons(generaciones.gen_3[0], generaciones.gen_3[1], gen_3);
  };
  gen_4.onclick = function () {
    container_card.innerText = "";
    fetchPokemons(generaciones.gen_4[0], generaciones.gen_4[1], gen_4);
  };
  gen_5.onclick = function () {
    container_card.innerText = "";
    fetchPokemons(generaciones.gen_5[0], generaciones.gen_5[1], gen_5);
  };
  gen_6.onclick = function () {
    container_card.innerText = "";
    fetchPokemons(generaciones.gen_6[0], generaciones.gen_6[1], gen_6);
  };
  gen_7.onclick = function () {
    container_card.innerText = "";
    fetchPokemons(generaciones.gen_7[0], generaciones.gen_7[1], gen_7);
  };
  gen_8.onclick = function () {
    container_card.innerText = "";
    fetchPokemons(generaciones.gen_8[0], generaciones.gen_8[1], gen_8);
  };
}
