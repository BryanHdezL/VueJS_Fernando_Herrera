// Constantes
const person = {
  name: 'Tony',
  age: '45',
  codeName: 'Ironman'
}

// Forma comun de obtener informacion del objeto
console.log(person.name);
console.log(person.age);
console.log(person.codeName);

// Destructuracion de objeto para obtener informacion del objeto
const { name, age, codeName, power } = person
console.log(name);
console.log(age);
console.log(codeName);
console.log(power);

// Ejemplo de destructuracion con funciones 
const createHero = ({ name, age, codeName, power }) =>
({
  id: 123456789,
  name: name,
  age: age,
  codeName: codeName,
  power: power,
})

console.log(createHero(person));