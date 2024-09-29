// Importaciones
import pokemonApi from "@/api/pokemonApi";

// Obtiene los primeros 650 pokemons en un arreglo
const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650))

  return pokemonsArr.map((_, index) => index + 1)

}

// Se seleccionan 4 pokemons para mostar
const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  const pokemons = await getPokemonNames(mixedPokemons.slice(0, 4))

  return pokemons
}

// Se obtiene el nombre de los 4 pokemons elegidos
const getPokemonNames = async (pokemons = []) => {
  const promiseArr = [
    pokemonApi.get(`/${pokemons[0]}`),
    pokemonApi.get(`/${pokemons[1]}`),
    pokemonApi.get(`/${pokemons[2]}`),
    pokemonApi.get(`/${pokemons[3]}`),
  ]

  const [pokemon1, pokemon2, pokemon3, pokemon4] = await Promise.all(promiseArr)

  return [
    { name: pokemon1.data.name, id: pokemon1.data.id },
    { name: pokemon2.data.name, id: pokemon2.data.id },
    { name: pokemon3.data.name, id: pokemon3.data.id },
    { name: pokemon4.data.name, id: pokemon4.data.id },
  ]
}

// Exportaciones
export default getPokemonOptions