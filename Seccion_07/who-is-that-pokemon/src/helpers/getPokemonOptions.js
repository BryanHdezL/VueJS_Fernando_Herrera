// Importacion de modulos
import pokemonApi from '@/api/pokemonApi';

// Se crea el arreglo de 650 pokemons
const getPokemons = () => {
  const pokemonArr = Array.from(Array(650))
  return pokemonArr.map((_, index) => index + 1)
}

// Se optine el arreglo aleatorio de pokemons
const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))
  return pokemons
}

// Se seleccionan los primeros 4 pokemons del arreglo
const getPokemonNames = async (pokemons = []) => {
  const promiseArr = [
    pokemonApi.get(`/${pokemons[0]}`),
    pokemonApi.get(`/${pokemons[1]}`),
    pokemonApi.get(`/${pokemons[2]}`),
    pokemonApi.get(`/${pokemons[3]}`),
  ]
  const [p1, p2, p3, p4] = await Promise.all(promiseArr)

  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ]
}

// Funciones exportadas
export default getPokemonOptions