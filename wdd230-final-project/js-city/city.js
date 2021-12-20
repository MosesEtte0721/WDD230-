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

ref.innerHTML = `Last Updated: ${date} ${month},  ${year}`;


// swapping data-src attribute with src  attribute
let images = document.querySelectorAll('img[data-src]');
function observa() {
    images.setAttribute('src', image.getAttribute('data-src'));

    // remove data-src attribute when the page is loaded
    images.onload = () => {
    images.removeAttribute('data-src')
    }
}

if ("IntersectionObserver" in window) {
    let observer = new IntersectionObserver((item, observer)=> {
        item.forEach(items=> {
            if (items.isIntersecting){
                observa(items.target);
                observer.unobserve(items.target)
            }
        })
    })
    images.forEach((image)=> {
        observer.observe(image);
    }) 
}
else{
    images.forEach(element => {
        observa(element)
    })
}

