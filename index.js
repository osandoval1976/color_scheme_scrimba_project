const btn = document.getElementById('btn') 
let html ={}
btn.addEventListener('click', colors)
function colors(){
const inputUpdated = document.getElementById('input-color').value.substring(1)
const selectItem =document.getElementById('nameList').value.toLowerCase()
fetch(`https://www.thecolorapi.com/scheme?hex=${inputUpdated}&mode=${selectItem}&count=5`)
  .then(response=>response.json())
  .then(data=>{
    console.log(data)
       document.getElementById('post').style.background = data.colors.hex
   
 })
 
 }
