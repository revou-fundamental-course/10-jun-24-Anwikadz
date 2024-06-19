/*Ini JavaScript*/

// convert button
function convert() {
    var celsius = document.getElementById('celsius').value;
    var fahrenheit = document.getElementById('fahrenheit').value;

    if (celsius !== "") {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').innerHTML = "(" + celsius + "&deg;C x 9/5) + 32 = " + fahrenheit + "&deg;F"; 
    } else if (fahrenheit !== "") {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById("calculation").innerHTML = "(" + fahrenheit + "&deg;F - 32) / 1 . 8 = " + celsius + "&deg;C";
    } else {
        document.getElementById('calculation').textContent = "Please enter a value to convert.";
    }
}

//reverse button
function reverse() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');

    // Swap the values
    var temp = celsiusInput.value;
    celsiusInput.value = fahrenheitInput.value;
    fahrenheitInput.value = temp;
}

//reset button
function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById("calculation").innerHTML= '';
}

