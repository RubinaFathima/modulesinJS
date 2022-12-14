function celciusToFahrenheit(celsius){
    return celsius * (9/5)+32;
}

const celsiusInput=process.argv[2]; //get 3rd input from the argument list
const fahrenheitValue=celciusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degree Celsius=${fahrenheitValue} degree Fahrenheit`);
