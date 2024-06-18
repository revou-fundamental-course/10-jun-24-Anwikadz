/*Ini JavaScript*/


function convert() {
    const celcius = document.getElementById('celcius').value;
    const fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
}

function reset() {
    document.getElementById('celcius').value = '';
    document.getElementById('fahrenheit').value = '';
}

function reverse() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celcius = (fahrenheit - 32) * 5/9;
    document.getElementById('celcius').value = celcius;
}