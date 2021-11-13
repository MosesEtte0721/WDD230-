function ToggleMenu() {
  document.getElementById("javascript").classList.toggle("nicely");
}

    let time = new Date(); //date objct
    
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      

    let date = time.getDate(); 
    let day = days[time.getDay()]; //Gets name of the day from (let days =[])
    
    let month = months[time.getMonth()];  // Gets name of the month from (let months = [])
    let years = time.getFullYear();
    let all = ` ${day} ${date }, ${month}  ${years}`; // Formats the day, month and year
    console.log(all)
    document.getElementById("esc").innerHTML = all;

  

