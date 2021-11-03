function display() {
    //let summarise = document.querySelector("summarize");
    let link = document.querySelector("h3");
    let cont = link.createTextNode("this is the weather summary blogg");
    let add = link.appendChild(cont);


}

function windChill(tempFar,windSpeed) {
    let fareheneit;
    let windSpeedRoot = windSpeed**0.16;
    let total = 35.74 + (0.6215 * tempFar) - (35.75 * windSpeedRoot) + (0.4275 * tempFar * windSpeedRoot);
    return total;
}





