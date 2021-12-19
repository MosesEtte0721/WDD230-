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



