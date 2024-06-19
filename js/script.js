/*Ini JavaScript*/

const celcius = document.getElementById('celsius').value;
const fahrenheit = document.getElementById('fahrenheit').value;

// convert button
function convert() {
    const celcius = document.getElementById('celsius').value;
    const fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
    document.getElementById("calculation").innerHTML = "(" + celcius + "&deg;C × 9/5) + 32 = " + fahrenheit + "&deg;F";
}

//reverse button
function reverse() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celcius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celcius;
    document.getElementById("calculation").innerHTML = "(" + celcius + "&deg;C × 9/5) + 32 = " + fahrenheit + "&deg;F";
}

//reset button
function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById("calculation").innerHTML= '';
}