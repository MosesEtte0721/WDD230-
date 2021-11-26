const requestURL =   "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
.then( (response)=> {
    return response.json();
})
.then((jsonObject)=> {
        console.table(jsonObject)
        console.log(jsonObject)
        const prophet = jsonObject['prophets'];
    prophet.forEach(prophet => {

        // const target = document.querySelector('div.cards');
        const newSection = document.createElement('section');
        const targetDiv = document.querySelector('.cards');
        const birthDate = document.createElement('p');
        const birthplace = document.createElement('p');
        const newImg = document.createElement('img');
        const prophetName = document.createElement('h2');

        prophetName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
        birthplace.textContent = `Birth Place: ${prophet.birthplace}`;
        newImg.setAttribute('src', `${prophet.imageurl}`);
        newImg.setAttribute('alt', `${prophet.name} ${prophet.lastname} `);

        newSection.appendChild(prophetName)
        newSection.appendChild(birthDate);
        newSection.appendChild(birthplace);
        newSection.appendChild(newImg);
        targetDiv.appendChild(newSection);
    });
    
    })

