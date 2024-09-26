// Objetos
const persona = {
  nombre: 'Bryan',
  apellido: 'Hernandez',
  edad: '22',
  direccion: {
    ciudad: 'CDMX',
    numero: '1234',
    lat: '14.3232',
    lng: '34.4568'
  }
}

console.log(persona);

// Nuevo objeto con los mismos parametros - Metodo Spread
const persona2 = { ...persona }
persona2.nombre = 'Peter'
persona2.apellido = 'Lopez'

console.log(persona2);