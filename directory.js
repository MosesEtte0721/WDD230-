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
    name.textContent = `Name: ${element.name}`;
    address.textContent = `Address: ${element.addres}`;
    desc.textContent = `Description: ${element.desc}`;
    email.textContent = `Email: ${element.email}`;

    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(desc);
    section.appendChild(email);
    gridList.appendChild(section);

    // listView.textContent = element.com1.Address;
    // console.log(listView.textContent = element)
    // listView.appendChild(div);
    // gridList.appendChild(listView);
   }); 
       

});
    