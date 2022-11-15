const container_card = document.getElementById("container_card");

const fet_item = async () => {
  for (let i = 666; i <= 668; i++) {
    if (i == 667) {
      i++
    }
    await getitem(i);
  }
};

const getitem = async (id) => {
  const url = `https://pokeapi.co/api/v2/item/${id}/`;
  const res = await fetch(url);
  const item = await res.json();
  create_item_card(item);
  console.log(item);
};

function create_item_card(item) {
  const card = `
  <div class="card" id="pok_${item.id}">
    <div class="info_card">
      <div class="img_card">
        <img
        class="img_normal"
        id="img_pokemon"
        src="${item.sprites.default}"
        alt=""
        />
      </div>
      <div class="details_card">
        <div class="id_pokedex">
          <span>#${item.id.toString().padStart(3, 0)}</span>
        </div>
        <div class="name_card">
          <h2>
            ${
              item.names[5].name.charAt(0).toUpperCase() +
              item.names[5].name.slice(1)
            }
          </h2>
        </div>
        <div class="Basic_data">
          <div class="data">
            <h4>Coste: </h4><span>${item.cost}</span>
          </div>
          <div class="data">
            <h4>Categoria: </h4><span>${item.category.name}</span>
          </div>
          <div class="description">
            <h3>Descripcion</h3>
            <p>${description(item.flavor_text_entries)}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  const crear = container_card.insertAdjacentHTML("beforeend", card);
  crear;
}

function description(x) {
  for (let i = 0; i < x.length; i++) {
    const element = x[i].language.name;
    if (element == "es") {
      return x[i].text;
    }
  }
}

fet_item();