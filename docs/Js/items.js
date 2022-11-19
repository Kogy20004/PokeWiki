const all_pokemon = document.getElementById("all_pokemon");
const container_card = document.getElementById("container_card");

const fetch_item = async (fin) => {
  container_button_category.innerHTML = "";
  await create_nav_buttonsa();
  const all_buttons = document.querySelectorAll(".button");
  console.log(all_buttons);
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].disabled = true;
  }

  for (let i = 1; i <= fin; i++) {
    await getitem(i);
  }

  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].disabled = false;
  }
  return all_buttons;
};

const getitem = async (id) => {
  const url = `https://pokeapi.co/api/v2/item/${id}/`;
  const res = await fetch(url);
  if (res.ok) {
    const item = await res.json();
    create_item_card(item);
  }
};

function create_item_card(item, parametro) {
  if (item.sprites.default == null) {
    return;
  }
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
            ${name_card(item.names)}
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

function description(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i].language.name;
    if (element == "es") {
      return array[i].text;
    }
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i].language.name;
    if (element == "en") {
      return array[i].text;
    }
  }
}

function name_card(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i].language.name;
    if (element == "es") {
      return array[i].name;
    }
  }
  for (let i = 0; i < array.length; i++) {
    const element_v = array[i].language.name;
    if (element_v == "en") {
      return array[i].name;
    }
  }
}

all_pokemon.addEventListener("click", () => {
  container_card.innerText = "";
  fetch_item(1000);
});

// nav

const container_button_category = document.getElementById(
  "container_button_category"
);
console.log(container_button_category);

const create_nav_buttonsa = async () => {
  for (let i = 1; i <= 8; i++) {
    const url = `https://pokeapi.co/api/v2/item-pocket/${i}/`;
    const res = await fetch(url);
    const item_pocket = await res.json();
    buttonHtml(item_pocket);
  }
  console.log("nav");
};

function buttonHtml(item_pocket) {
  const button = `<button id="item-pocket_${item_pocket.id}" class="button list">${item_pocket.names[1].name}</button>`;
  button;
  const crear_button = container_button_category.insertAdjacentHTML(
    "beforeend",
    button
  );
  crear_button;
  document
    .getElementById(`item-pocket_${item_pocket.id}`)
    .addEventListener("click", async () => {
      const all_buttons = await document.querySelectorAll(".button");
      console.log(all_buttons);
      container_card.innerText = "";
      for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].disabled = true;
      }
      for (let i = 0; i < item_pocket.categories.length; i++) {
        await categories_url(item_pocket.categories[i].url);
      }
      for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].disabled = false;
      }
    });
}

const categories_url = async (url) => {
  const res = await fetch(url);
  if (res.ok) {
    const categories = await res.json();
    for (let i = 0; i < categories.items.length; i++) {
      await categories_items(categories.items[i].url);
    }
  }
};
const categories_items = async (url) => {
  const res = await fetch(url);
  if (res.ok) {
    const item = await res.json();
    create_item_card(item);
  }
};

fetch_item(151);

// search

const input = document.getElementById("input");
const button = document.getElementById("button");
const datalist_items = document.getElementById("datalist_items");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value == "") {
    container_card.innerText = "Item no encontrado";
    return;
  }
  container_card.innerText = "";
  searchitem(input.value);
});

const searchitem = async (id) => {
  const url = `https://pokeapi.co/api/v2/item/${id}/`;
  const res = await fetch(url);
  if (res.ok) {
    const item = await res.json();
    console.log("item");
    create_item_card(item, 1);
  }
};

function datalist_items_f(item) {
  const opcion = `<option value="${item.name}"> ${name_card(
    item.names
  )}</option>`;
  const crear_opcion = datalist_items.insertAdjacentHTML("beforeend", opcion);
  crear_opcion;
}

const create_datalist = async () => {
  for (let i = 1; i < 300; i++) {
    const url = `https://pokeapi.co/api/v2/item/${i}/`;
    const res = await fetch(url);
    if (res.ok) {
      const item = await res.json();
      datalist_items_f(item);
    }
  }
};
create_datalist();
