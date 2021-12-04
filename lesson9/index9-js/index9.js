
const jLink = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(jLink).then(resoponse => {
    return resoponse.json()
}).then(data => {
    console.log(data);
    const cities = data['towns'];
    
    
// preston (city1)
        const city1= document.querySelector('.city1');
        const yearFounded = document.createElement('p');
        const population = document.createElement('p');
        const rainFall = document.createElement('p');
        const motto = document.createElement('h3');
        const townName = document.createElement('h1');
        // const image = document.querySelector('.city1-image');
        const image =  document.createElement('img');


        townName.textContent = `${cities[6].name}`;
        yearFounded.textContent = `Year Founded: ${cities[6].yearFounded} `;
        population.textContent = `Population: ${cities[6].currentPopulation}`;
        rainFall.textContent = `Annual Rainfall: ${cities[6].averageRainfall}`;
        motto.textContent = `${cities[6].motto}`;

        city1.appendChild(townName);
        city1.appendChild(motto);
        city1.appendChild(population);
        city1.appendChild(yearFounded);
        city1.appendChild(rainFall);

        image.setAttribute('src', 'images/springfield-vet-park.jpg');
        image.setAttribute('alt',"Preston Town")
        city1.appendChild(image);

// Fish Haven (city2)
        const city2 = document.querySelector('.city2');
        const yearFounded1 = document.createElement('p');
        const population1 = document.createElement('p');
        const rainFall1 = document.createElement('p');
        const motto1 = document.createElement('h3');
        const townName1 = document.createElement('h1');
        const image1 = document.createElement('img')

        townName1.textContent = `${cities[2].name}`;
        yearFounded1.textContent = `Year Founded: ${cities[2].yearFounded} `;
        population1.textContent = `Population: ${cities[2].currentPopulation}`;
        rainFall1.textContent = `Annual Rainfall: ${cities[2].averageRainfall}`;
        motto1.textContent = `${cities[2].motto}`;

        city2.appendChild(townName1);
        city2.appendChild(motto1);
        city2.appendChild(population1);
        city2.appendChild(yearFounded1);
        city2.appendChild(rainFall1);

        image1.setAttribute('src', 'images/fish-haven.jpg');
        image1.setAttribute('alt',"Fish Haven")
        city2.appendChild(image1);

// soda springs (city3)
        const city3 = document.querySelector('.city3');
        const yearFounded2 = document.createElement('p');
        const population2 = document.createElement('p');
        const rainFall2 = document.createElement('p');
        const motto2 = document.createElement('h3');
        const townName2 = document.createElement('h1');
        const image2 = document.createElement('img');

        townName2.textContent = `${cities[0].name}`;
        yearFounded2.textContent = `Year Founded: ${cities[0].yearFounded} `;
        population2.textContent = `Population: ${cities[0].currentPopulation}`;
        rainFall2.textContent = `Annual Rainfall: ${cities[0].averageRainfall}`;
        motto2.textContent = `${cities[0].motto}`;

        city3.appendChild(townName2);
        city3.appendChild(motto2);
        city3.appendChild(population2);
        city3.appendChild(yearFounded2);
        city3.appendChild(rainFall2);

        image2.setAttribute('src', 'images/franklin.jpg');
        image2.setAttribute('alt',"Franklin")
        city3.appendChild(image2);

       
});

