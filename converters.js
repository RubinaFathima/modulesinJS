// function celciusToFahrenheit(celsius){
//     return celsius * (9/5)+32;
// }

// //Exporting old function
// module.exports.celsiusToFahrenheit = celciusToFahrenheit;

// //Declaring Another Function &Exporting on the same line

// module.exports.fahrenheitToCelsius = function (fahrenheit){
//     return(fahrenheit-32)*(5/9);
// };

//first function

export function celciusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

//second function
export const fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);

};

//Third function

const milliToCenti=(millimeter)=>{
    return millimeter/10;
}

//Forth Function

const centiToMeter=(centimeter)=>{
    return centimeter *100;
}

//A plain variable
const nanoMeter= 0.0000000001;

export default nanoMeter;
//export {nanoMeter as Default}

export{milliToCenti, centiToMeter}

// export { celciusToFahrenheit, fahrenheitToCelsius };
