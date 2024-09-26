// Operador OR
let firstName;
let lastName;

console.log(`${firstName || 'No firstName'} ${lastName || 'No lastName'}`);

// Operador ternario
const isActive = true

// let message = ''
// if (isActive) {
//   message = 'Activo'
// } else {
//   message = 'Inactivo'
// }

const message = (isActive === true) ? 'Activo' : 'Inactivo'

console.log(message);