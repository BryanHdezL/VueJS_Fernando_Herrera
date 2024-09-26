// Constantes
const nombre = 'Bryan'
const heroes = [{
  id: 1,
  name: 'Batman'
}, {
  id: 2,
  name: 'Superman'
}]

// Funciones forma estandar
function saludar(nombre) {
  return `Hola ${nombre}`
}

// Funciones en variables
const saludo = function (nombre) {
  return `Hola ${nombre}`
}

// Funcion flecha
const saludo2 = (nombre) => `Hola ${nombre}`
const getUser = () => ({ uid: 'ABC123', username: "Bryan001" })
const existeSome = heroes.some((heroe) => heroe.id === 1)
const existeFind = heroes.find((heroe) => heroe.id === 2)

// Impresiones en consola
console.log(saludar(nombre));
console.log(saludo(nombre));
console.log(saludo2(nombre));
console.log(getUser);
console.log(existeSome);
console.log(existeFind);