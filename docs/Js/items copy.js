const container_card = document.getElementById("container_card");

const fet_item = async (id) => {
  for (let i = 666; i <= id; i++) {
    const url = `https://pokeapi.co/api/v2/item/${i}/`;
    const res = await fetch(url);
    if (res.ok) {
      const item =  res.json();
      console.log("ok");
    }
  }
};

fet_item(1658); ;
// 1658