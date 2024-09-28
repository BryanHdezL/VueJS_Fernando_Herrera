// Importacion de modulos
import axios from 'axios';

// URL del PAI
const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

// Funciones exportadas
export default pokemonApi