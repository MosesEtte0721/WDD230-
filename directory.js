const gridList = document.querySelector('.grid-comapany-views');
const gridView = document.querySelector('.grid-view');
const listView = document.querySelector('.comapany-view');

// const loadJson = loadJson("directory.json");



// fetch(loadJson('directory.json')).then( res => {
//     return res.json()
// }).then(ask => {
//     console.log(ask);
// });

// function listView() {

//     // fet
// }

// let get = $.getJSON("directory.json") ;
// const js = fetch("directory.json");
// console.log(js);

fetch("directory.json").then(res=> {
    return res.json();
}).then(ask=> {
    console.log(ask);
    let list = ask["companies"]
   list.forEach(comapany => {
    let gridList = document.querySelector('.grid-list-views');
    let section = document.createElement('section');
    let name = document.createElement('p');
    let address =document.createElement('p');
    let desc = document.createElement('p');
    let email = document.createElement('p');

    name.textContent = `Name: ${comapany.name}`;
    address.textContent = `Address: ${comapany.address}`;
    desc.textContent = `Description: ${comapany.description}`;
    email.textContent = `Email: ${comapany.email}`;

    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(desc);
    section.appendChild(email);
    gridList.appendChild(section);





   }); 
       

});
    