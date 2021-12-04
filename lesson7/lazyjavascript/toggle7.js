function ToggleMenu() {
  document.getElementById("javascript").classList.toggle("nicely");
}

    let cTime = new Date(); //date objct
    
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      

    let date = cTime.getDate(); 
    let day = days[cTime.getDay()]; //Gets name of the day from (let days =[])
    
    let month = months[cTime.getMonth()];  // Gets name of the month from (let months = [])
    let years = cTime.getFullYear();
    let all = ` ${day} ${date}, ${month}  ${years}`; // Formats the day, month and year
    

    let numTime = cTime.getDay()
    document.getElementById("esc").innerHTML = all;



    const headDiv = document.querySelector(".head-div");
    const pElement = document.createElement('p');
    
    pElement.innerHTML =  ` <h3> Friday = Preston pancakes in the park 9:00am. Saturday at the city park pavillon.</h3>`
    headDiv.appendChild(pElement);
    headDiv.style.color ="white"

// Checks if the day is Friday
    if ( numTime == 5) {
// displays the block if the day IS Friday
      console.log(headDiv.style.display = "block") 
    }
    else{
// Hides the block if the day IS NOT  Friday
      console.log(headDiv.style.display = "none")
    };
    

  

