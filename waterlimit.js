
// function celciusToFahrenheit(celsius){
//     return celsius * (9/5)+32;
// }

// const freezingPointC=0;
// const boilingPointC=100;

// const freezingPointF= celciusToFahrenheit(freezingPointC);
// const boilingPointF= celciusToFahrenheit(boilingPointC);

// console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
// console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);


//Importing Modules

// const converters = require('./converters.js');

// const freezingPointF = converters.celsiusToFahrenheit(0);
// const boilingPointF = converters.celsiusToFahrenheit(100);
// const freezingPointC = converters.fahrenheitToCelsius(98.6);

// console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
// console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);
// console.log(`The boiling point of water in Fahrenheit is ${freezingPointC}`);

//Destructuring mentoss
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./converters.js');

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = celsiusToFahrenheit(0);
const boilingPointF = celsiusToFahrenheit(100);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);