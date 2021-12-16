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
    let div = document.createElement('p');
    listView.textContent = element.com1;
    listView.appendChild(div);
    gridList.appendChild(listView);
   }); 
       

});
    