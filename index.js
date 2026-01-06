const btn = document.getElementById('btn') 
let html ={}
btn.addEventListener('click', colors)
function colors(){
const inputUpdated = document.getElementById('input-color').value.substring(1)
const selectItem =document.getElementById('nameList').value.toLowerCase()
fetch(`https://www.thecolorapi.com/scheme?hex=${inputUpdated}&mode=${selectItem}&count=5`)
  .then(response=>response.json())
  .then(data=>{
   for(let i =0; i< 5;i++){ 
  document.getElementById('color-bg').style.background += data.colors[i]["hex"].value 
  document.getElementById('text-colors').textContent += data.colors[i]["hex"].value
  
  }
  
  })
}
