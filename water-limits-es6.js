import { celciusToFahrenheit, fahrenheitToCelsius } from "./converters.js";
import { milliToCenti, centiToMeter } from "./converters.js";
import nano from "./converters.js";

const buttonElement= document.getElementById('button');
buttonElement.addEventListener('click',clickMe);

function clickMe(){
    let element= document.getElementById("container");
    element.innerHTML=`<h1>Boiling Point is:${celciusToFahrenheit(100)}
    & Freezing point is ${celciusToFahrenheit(0)},<br><br>
    Body Tempetrature 96.8 F:${fahrenheitToCelsius(98.6)}<br><br>
    100 milli meters is ${milliToCenti(100)}centi-meter,<br><br>
    1000 centi meters is ${centiToMeter(1000)}meters,<br><br>
    One nanometers is ${nano}meters.
                </h1>`;
}

console.log(`Water Boiling Point is ${celciusToFahrenheit(100)} Degree Fahrenheit`);
console.log(`Body Temperature 96.8 is ${fahrenheitToCelsius}`);


