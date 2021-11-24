// EJEMPLO CON STRINGS

const nombre = prompt(`Ingrese su nombre:`);
const edad = prompt(`Ingrese su edad:`);
alert(`${nombre} tiene ${edad} años`);

// EJEMPLO CON NUMEROS USANDO PARSEINT
let variable;
variable = 2;
const miNum = parseInt(prompt(`Ingrese un numero del 1 al 100:`));
console.log(`Su numero es: ${miNum}`);
const doble = miNum * variable;
console.log(`El doble de ${miNum} es: ${doble}`);
variable = 3;
const triple = miNum * variable;
console.log(`El triple de ${miNum} es: ${triple}`);

// EJEMPLO CON NUMEROS USANDO NUMBER
/*
let variable;
variable = 2;
const miNum = Number(prompt(`Ingrese un numero del 1 al 100:`));
console.log(`Mi numero es: ${miNum}`); 
*/