const entry = document.querySelector("input");
const buton = document.querySelector("button");
const list = document.querySelector("ul");

buton.addEventListener("click", () => {
  let entry2 = entry.value;
  entry.value = '';

  let liElement  = document.createElement('li');
  let liText = document.createElement('span');
  let liButton = document.createElement('button');
  


  liText.innerHTML = entry2;
  liButton.innerHTML = "Delete";

  
  liElement.appendChild(liText);

  liElement.appendChild(liButton);

  list.appendChild(liElement);

  liButton.onclick = (e) => {
    list.removeChild(liElement);
  }

  entry.focus()


  
  
})