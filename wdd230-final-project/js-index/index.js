function Toggle() {
    document.getElementById('hamburger').classList.toggle('menu');
}

const bodi = document.querySelector("body");
const nav = document.querySelector('nav')




const weekDays = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const ref = document.querySelector('#esc');



const timeObj = new Date();
const month = months[timeObj.getMonth(document.lastModified)];
const date = timeObj.getDate(document.lastModified);
const year = timeObj.getFullYear(document.lastModified);

ref.textContent = `Last Updated: ${date} ${month},  ${year}`;

// get current weather condition 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=eket&units=metric&appid=15a232b38f2ced0e9d67e834df68e80c';
fetch(apiUrl).then(ans => {
    return ans.json()
}).then(ask => {
    console.log(ask);

    const refElement = document.querySelector('#current-temp');
    const currentTemp = document.createElement('p');
    const conditionDesc = document.createElement('p');
    const humitdity = document.createElement('p');

    console.log(` current temperature is: ${ask.main.temp}`);

    currentTemp.textContent = `Current temperature: ${ask.main.temp}`;
    conditionDesc.textContent = `Description: ${ask.weather[0].description}`;
    humitdity.textContent = ` Humidity: ${ask.main.humidity}`;

    refElement.appendChild(currentTemp);
    refElement.appendChild(conditionDesc);
    refElement.appendChild(humitdity);



});


// get get 3-Day weather forecast
const apiUrl2c = 'https://api.openweathermap.org/data/2.5/forecast?q=eket&units=metric&appid=15a232b38f2ced0e9d67e834df68e80c';

fetch(apiUrl2c).then(res => {
    return res.json()
}).then(ask => {
    console.log(ask);
    const refElement1 = document.querySelector('.forecast-wrapper1');
    const icon1 = `http://openweathermap.org/img/wn/${ask.list[17].weather[0].icon}.png`;

// day one 
    const weekDay = weekDays[timeObj.getDay()];
    const day = document.createElement('p');
    const image = document.createElement('img');
    const temp = document.createElement('p');

    
    day.textContent = `${weekDay}`;
    image.setAttribute('src', `${icon1}`);
    image.setAttribute('alt', `${ask.list[5].weather[0].description}`);
    temp.textContent = `${ask.list[5].main.temp}`;
// 
    refElement1.appendChild(day);
    refElement1.appendChild(image);
    refElement1.appendChild(temp);

// day2 forecast 

    const icon2 = `http://openweathermap.org/img/wn/${ask.list[23].weather[0].icon}.png`;
   const  refElement2 = document.querySelector('.forecast-wrapper2')
    const weekDay2 = weekDays[timeObj.getDay()];
    const day2 = document.createElement('p');
    const image2 = document.createElement('img');
    const temp2 = document.createElement('p');

    day2.textContent =`${weekDay2}`;
    image2.setAttribute('src', `${icon2}`);
    image2.setAttribute('alt',`${ask.list[13].weather[0].description}`);
    temp2.textContent = `${ask.list[13].main.temp}`;


    refElement2.appendChild(day2);
    refElement2.appendChild(image2);
    refElement2.appendChild(temp2);


    // day3
    const icon3 = `http://openweathermap.org/img/wn/${ask.list[23].weather[0].icon}.png`;
   const  refElement3 = document.querySelector('.forecast-wrapper3')
    const weekDay3 = weekDays[timeObj.getDay()];
    const day3 = document.createElement('p');
    const image3 = document.createElement('img');
    const temp3 = document.createElement('p');

    day3.textContent =`${weekDay3}`;
    image3.setAttribute('src', `${icon3}`);
    image3.setAttribute('alt',`${ask.list[21].weather[0].description}`);
    temp3.textContent = `${ask.list[21].main.temp}`;


    refElement3.appendChild(day3);
    refElement3.appendChild(image3);
    refElement3.appendChild(temp3);


})

// swapping data-src attribute with src  attribute
let images = document.querySelectorAll('img[data-src]');

function observa(attribute) {
    attribute.setAttribute('src', attribute.getAttribute('data-src'));

    // remove data-src attribute when the page is loaded
    attribute.onload = () => {
    attribute.removeAttribute('data-src')
    }
}

// observe images
if ("IntersectionObserver" in window) {
    let observer = new IntersectionObserver((item, observer)=> {
        item.forEach(items=> {
            if (items.isIntersecting){
                observa(items.target);
                observer.unobserve(items.target);
            }
        })
    })
    images.forEach((image)=> {
        observer.observe(image);
    }) 
}
else{
    images.forEach(element => {
        observa(element);
    })
}
