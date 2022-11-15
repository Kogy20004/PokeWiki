const container_card = document.getElementById("container_card");

const fet_item = async (id) => {
  for (let i = 1; i <= id; i++) {
    if (i == 667 || i == 672 || i == 680 || i == 750) {
      i = i + 1;
    }
    const url = `https://pokeapi.co/api/v2/item/${i}/`;
    const res = await fetch(url);
    const item = await res.json();
    console.log(".");
    if (item == "undefined") {
      console.log(id);
    }
  }
};

const getitem = async (id) => {
  const url = `https://pokeapi.co/api/v2/item/${id}/`;
  const res = await fetch(url);
  const item = await res.json();
  console.log(".");
  if (item == "undefined") {
    console.log(id);
  }
};

fet_item(2000);
