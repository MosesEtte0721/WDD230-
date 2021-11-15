let element = document.querySelector('wesummary');
let spanElement = document.querySelector('.span23');




    let temperature = 50;
    let windSpeed = 49
    let f;
    let windSpeedRoot = windSpeed**0.16;
// computes the windchill
    f= 35.74 + (0.6215 * temperature) - (35.75 * windSpeedRoot) + (0.4275 * temperature * windSpeedRoot);


spanElement.innerHTML = f.toFixed(4);






