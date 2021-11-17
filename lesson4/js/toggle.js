function toggleMenu() {
  document.getElementById("javascript").classList.toggle("nicely");
}

let element = document.querySelector('#esc');
let lastupdated = new Date(document.lastModified);
element.innerHTML = ` ${lastupdated}`;