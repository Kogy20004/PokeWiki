// const fetchData = async () => {
//   try {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`);
//     const data = await res.json();
//     const pokemon = {
//       img: data.sprites.other.officialartwork,
//       nombre: data.name
//     };
//     console.log(data);

//     pintarCard(pokemon);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const pintarCard = (pokemon) => {
//   console.log(pokemon);
// };

// document.addEventListener("DOMContentLoaded", () => {
//   fetchData();
// });


const progress_PS = document.getElementById("Ps").querySelector(".value")
console.log(progress_PS)
progress_PS.style.width="50%"