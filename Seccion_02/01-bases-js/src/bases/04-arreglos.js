// Arreglos
const arreglo = [1, 2, 3, 4]
console.log(`Arreglo: ${arreglo}`);

// Agregar elementos al arreglo
arreglo.push(5)
console.log(`Nuevo: ${arreglo}`);

// Nuevo arreglo - Metodo Spread
const arreglo2 = [...arreglo]
arreglo2.push(6)
console.log(`Arreglo 2: ${arreglo2}`);

// Nuevo arreglo - Metodo Map
const arreglo3 = arreglo2.map(function (n) {
  return n * 2
})
arreglo3.push(14)
console.log(`Arreglo 3: ${arreglo3}`);

