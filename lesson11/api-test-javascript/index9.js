
const jLink = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(jLink).then(resoponse => {
    return resoponse.json();
}).then(data => {
    console.log(data);
    console.log(data.towns[0])

});

