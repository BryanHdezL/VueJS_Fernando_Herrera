// Importaciones
// import { owners } from './data/heroes'
import superHeroes from '../data/heroes'

// Funciones
export const getHeroById = (idHeroe) => superHeroes.find((heroe) => heroe.id === idHeroe)
export const getHeroesByOwner = (ownerHeroe) => superHeroes.filter((heroe) => heroe.owner === ownerHeroe)

// Ejemplo desde otro archivo

// // Importaciones
// import { getHeroById, getHeroesByOwner } from './bases/08-imp-exp'

// // Test
// console.log(getHeroById(2));
// console.log(getHeroesByOwner('DC'));
