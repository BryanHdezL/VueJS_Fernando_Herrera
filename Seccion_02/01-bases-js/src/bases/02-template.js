// String como variables

const nombre = 'Bryan'
const apellido = 'Hernandez'

const nombreCompelto1 = nombre + ' ' + apellido
const nombreCompelto2 = `${nombre} ${apellido}`

console.log(`Nombre 1: ${nombreCompelto1}`);
console.log(`Nombre 2: ${nombreCompelto2}`);

// String como expresiones

console.log(`Resultado: ${1 + 4}`);

// String con funciones

function getSaludo(nombre) {
  return 'Hola ' + nombre
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);