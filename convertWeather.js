//Today's weather forecast in Kelvin
const kelvin = 0;
//Converting Kelvin to Celsius
const celsius = kelvin - 273;
//Converting Celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The temperature in Newton is ${newton}.`);