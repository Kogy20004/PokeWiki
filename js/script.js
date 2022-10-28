const pokemons_number = 151
// hay 905 pokemones en total
const container_card = document.getElementById("container_card");

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getpokemon(i)
  }
}

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

const getpokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json()
  console.log(pokemon)
  create_pokemon_card(pokemon)
}

fetchPokemons()

function create_pokemon_card(pokemon) {
  const cuantos = pokemon.types.length;
  const card = `
  <div class="card" id="pok_${pokemon.id}">
    <div class="info_card">
      <div class="img_card">
        <img
          id="img_pokemon"
          src="${pokemon.sprites.front_default}"
          alt=""
        />
      </div>
      <div class="details_card">
        <div class="id_pokedex">
          <span>#${pokemon.id.toString().padStart(3, 0)}</span>
        </div>
        <div class="name_card">
          <h2>${pokemon.name}</h2>
        </div>
        <div class="Basic_data">
          <p>Altura<span>${pokemon.height / 10}m</span></p>
          <p>Peso<span>${pokemon.weight / 10}kg</span></p>
        </div>
        <div class="stats">
          <div class="stats_containesr" id="Ps">
            <span>Ps</span>
            <div class="progress">
              <div class="value" style="width:${(pokemon.stats[0].base_stat / 255) * 100
    }%;">${pokemon.stats[0].base_stat}</div>
            </div>
          </div>
          <div class="stats_containesr" id="Att">
            <span>Att</span>
            <div class="progress">
              <div class="value" style="width:${(pokemon.stats[1].base_stat / 255) * 100
    }%;">${pokemon.stats[1].base_stat}</div>
            </div>
          </div>
          <div class="stats_containesr" id="Def">
            <span>Def</span>
            <div class="progress">
              <div class="value" style="width:${(pokemon.stats[2].base_stat / 255) * 100
    }%;">${pokemon.stats[2].base_stat}</div>
            </div>
          </div>
          <div class="stats_containesr" id="Vel">
            <span>Vel</span>
            <div class="progress">
              <div class="value" style="width:${(pokemon.stats[3].base_stat / 255) * 100
    }%;">${pokemon.stats[3].base_stat}</div>
            </div>
          </div>
          <div class="stats_containesr" id="Att_S">
            <span>At.S</span>
            <div class="progress">
              <div class="value" style="width:${(pokemon.stats[4].base_stat / 255) * 100
    }%;">${pokemon.stats[4].base_stat}</div>
            </div>
          </div>
          <div class="stats_containesr" id="Def_S">
            <span>De.S</span>
            <div class="progress">
              <div class="value" style="width:${(pokemon.stats[5].base_stat / 255) * 100
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
    container_card.innerText = "Pokemon no encontrado"
    return;
  }
  container_card.innerText = "";
  getpokemon(input.value);
  console.log(pokemon);
});