const gridList = document.querySelector('.grid-list-views');
const gridView = document.querySelector('.grid-view');
const listView = document.querySelector('.list-view');

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
   ask.forEach(element => {
    let gridList = document.querySelector('.grid-list-views');
    let section = document.createElement('section');
    let name = document.createElement('p');
    let address =document.createElement('p');
    let desc = document.createElement('p');
    let email = document.createElement('p');

    name.textContent = `Name: ${element[0].com1.name}`;
    address.textContent = `Address: ${element[0].com1.address}`;
    desc.textContent = `Description: ${element[0].com1.desc}`;
    email.textContent = `Email: ${element[0].com1.email}`;

    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(desc);
    section.appendChild(email);
    gridList.appendChild(section);

   }); 
       

});
    