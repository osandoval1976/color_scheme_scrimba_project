const btn = document.getElementById('btn') 
let html ={}
btn.addEventListener('click', colors)
function colors(){
const inputUpdated = document.getElementById('input-color').value.substring(1)
const selectItem =document.getElementById('nameList').value.toLowerCase()
fetch(`https://www.thecolorapi.com/scheme?hex=${inputUpdated}&mode=${selectItem}&count=5`)
  .then(response=>response.json())
  .then(data=>{
    const container =  document.getElementById('color-id')
    const items = container.querySelectorAll('.color-bg')
    for(let i =0;i<items.length; i++){
      const item = items[i]
      const textItem = items[i]
      item.style.background = data.colors[i].hex.value
      textItem.textContent = data.colors[i].hex.value
      container.classList.add('text-colors')
    } 
 })
 
 }



