const dateObj = new Date();
const weekDays = ["Sunday","Tuesday", 'Wednesday','Thursday',"Friday","Saturday","Monday"];
const mois = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const cDay = weekDays[dateObj.getDay()];
const cDate = dateObj.getDate();
const cMonth = mois[dateObj.getMonth()];
const cYear= dateObj.getFullYear();

document.getElementById('esc').innerHTML = `${cDay} ${cDate}, ${cMonth} ${cYear}`;
