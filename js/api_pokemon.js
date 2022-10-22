
document.addEventListener('DOMContentLoaded', () => {

  fetchData()

})

const fetchData = async () => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
    const data = await res.json()
    const pokemon = {
      img: data.sprites.other.officialartwork.front_default,
      nombre: data.name,
    }
    console.log(data)

    pintarCard(pokemon)
  } catch (error) {
    console.log(error)
  }
}

const pintarCard = (pokemon) => {
  console.log(pokemon)
}

