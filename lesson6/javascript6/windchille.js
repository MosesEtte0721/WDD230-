let element = document.querySelector('wesummary');
let spanElement = document.querySelector('.span23');
let spanElement2 = document.querySelector('.span21')
spanElement2.textContent = '50°F'





    let temperature = 50;
    let windSpeed = 6
    let f;
    let windSpeedRoot = windSpeed**0.16;
// computes the windchill
    f= 35.74 + (0.6215 * temperature) - (35.75 * windSpeedRoot) + (0.4275 * temperature * windSpeedRoot);


spanElement.innerHTML = f.toFixed(2);






