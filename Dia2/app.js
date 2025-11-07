// Importar el prompt-sync module
const prompt = require('prompt-sync')();

// LO que el ususario ingresa
const name = prompt('Cual es tu nombre? ');

// Salida
console.log(`Hola, ${name}!`);