let time = new Date();
        
let months = time.getMonth();
let years = time.getFullYear();
let all = `Last updated: ${months+1
} / ${years-1}`;
document.getElementById("time").innerHTML = all;