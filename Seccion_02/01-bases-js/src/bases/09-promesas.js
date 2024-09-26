// // Estructura de una promesa basica

// console.log("Inicio");

// new Promise((resolve, reject) => {
//   // Intenta hacer esto
//   console.log('Cuerpo de la promesa');
//   // Promesa resuelta con exito
//   resolve('Promesa resuelta')
//   // Promesa resuelta con error
//   reject('Promesa resuelta error')
// })
//   // Despues ejecuta esto
//   .then(msg => console.log(msg))
//   // Atrapamos el error que exista en la ejecucion
//   .catch(err => console.log(err))

// console.log("Fin");


// Argunmentos de promesa

import { getHeroById } from './bases/08-imp-exp'

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id)
      if (hero !== undefined) {
        resolve(hero)
      } else {
        reject('El heroe no existe')
      }
    }, 1000);
  })
}

getHeroByIdAsync(1)
  .then(h => {
    console.log(`El hero es: ${h.name}`)
  })
  .catch(console.log)