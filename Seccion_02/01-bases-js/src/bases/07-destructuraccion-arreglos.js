// Arreglo de personajes
const characters = ['Goku', 'Vegeta', 'Trunks']

// Destructuracion del arreglo
const [g, v, t] = characters
console.log(g, v, t)

// Destructuracion de arreglos con funciones
const returnArray = (arr) => {
  return [arr[0], arr[1]]
}
const [letters, numbers] = returnArray(['XYZ', 123])

console.log(letters, numbers);

