const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=15a232b38f2ced0e9d67e834df68e80c";
const iconImg = "http://openweathermap.org/img/wn/10d@2x.png"
fetch(apiURL).then(answer=> {
    return answer.json()
}).then(weda=>{
    console.log(weda);
       
//Live waether Summary
     document.getElementById('one1').textContent = `${weda.main.temp_min} °F`;
//maximum temperature
    document.getElementById('two2').textContent = `${weda.main.temp_max} °F`;
// humidity
    document.getElementById('four4').textContent = `${weda.main.humidity}%`;
// wind speed 
    document.getElementById('five5').textContent = `${weda.wind.speed}mph`;

// calculate windchill
    let windChill;
    let windSpeedRoot = `${weda.wind.speed}`**0.16;
    windChill= 35.74 + (0.6215 * `${weda.main.temp_max}`) - (35.75 * windSpeedRoot) + (0.4275 *`${weda.main.temp_max}`* windSpeedRoot);
    let spanElement = document.querySelector('#three3');
    spanElement.innerHTML = `${windChill.toFixed(2)} °F`; 
// End of live weather summary
});

const apURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=07159213242417d30e463b9d4ef8e941";
fetch(apURL).then(res => {
    return res.json();
}).then(wida => {
    console.log(wida);
   
// Monday live forecast
const descr = `${wida.list[0].weather[0].description}`;
    const monIcon = `http://openweathermap.org/img/wn/${wida.list[0].weather[0].icon}.png`;
    console.log(monIcon);
    document.getElementById('img1').setAttribute('src', `${monIcon}`);
    document.getElementById('img1').setAttribute('alt', `${descr}`);
    // document.getElementsById('secp1').textContent = `${wida.list[0].main.temp}`;
    const tempMon = wida.list[0].main.temp;
    document.getElementById('secp1').textContent =`${wida.list[0].main.temp}`;// tempMon;

    // Tuesday live forecast
    const descr2 = `${wida.list[9].weather[0].description}`;
    const tueIcon = `http://openweathermap.org/img/wn/${wida.list[9].weather[0].icon}.png`;
    document.getElementById('img2').setAttribute('src', `${tueIcon}`);
    document.getElementById('img2').setAttribute('alt', `${descr2}`);
    document.getElementById('secp2').textContent= `${wida.list[9].main.temp}`;



// Wednesday live forecast
    const descr3 = `${wida.list[17].weather[0].description}`;
    const wedIcon = `http://openweathermap.org/img/wn/${wida.list[17].weather[0].icon}.png`;
    document.getElementById('img3').setAttribute('src', `${wedIcon}`);
    document.getElementById('img3').setAttribute('alt', `${descr3}`);
    document.getElementById('secp3').textContent= `${wida.list[17].main.temp}`;



// Thursday live forecast
    const descr4 = `${wida.list[25].weather[0].description}`;
    const thurIcon = `http://openweathermap.org/img/wn/${wida.list[25].weather[0].icon}.png`;
    document.getElementById('img4').setAttribute('src', `${thurIcon} `);
    document.getElementById('img4').setAttribute('alt', `${descr4}`);
    document.getElementById('secp4').textContent= `${wida.list[25].main.temp}`;




// Friday live  forecast
    const descr5 = `${wida.list[3].weather[0].description}`;
    const friIcon = `http://openweathermap.org/img/wn/${wida.list[33].weather[0].icon}.png`;
    document.getElementById('img5').setAttribute('src', `${friIcon}`);
    document.getElementById('img5').setAttribute('alt', `${descr5}`);
    document.getElementById('secp5').textContent= `${wida.list[33].main.temp}`;


});

const jsonLink = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(jsonLink).then(res => {
    return res.json()
}).then( cap => {
    console.log(cap.towns[6].events);
  var event1 =  document.getElementById('events1').innerHTML =cap.towns[6].events[0];
  var event2 = document.getElementById('events2').innerHTML =cap.towns[6].events[1];
  var event3 = document.getElementById('events3').innerHTML =cap.towns[6].events[2];
  var event4 =  document.getElementById('eventsh').innerHTML = " Preston Town Events";
})