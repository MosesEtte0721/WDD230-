let time = new Date();
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  

let date = time.getDay();
let day = days[time.getDay()];
let numero = time.getMonth();
let month = months[time.getMonth()];
let years = time.getFullYear();
let all = `Last updated: ${date} / ${month} / ${years}`;
 
document.getElementById("time").innerHTML=all;
