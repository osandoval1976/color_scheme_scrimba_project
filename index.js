
const colors = document.getElementById('container-color')
const magenta = document.getElementById('magenta')
const black = document.getElementById('black')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const purple = document.getElementById('purple')
const inputUpdated = document.getElementById('input-color')
   
green.addEventListener("click", function(e){
  const input = document.querySelector('input')
    if(input){
    input.style.color = e.target.value
    inputUpdated.value ="#AAD1B6"
    }  
})    
magenta.addEventListener("click",  function(e){
  const input = document.querySelector('input')
    if(input){
    input.style.color = e.target.value
    inputUpdated.value ="#F55A5A"
    }  
})    
black.addEventListener("click",   function(e){
  const input = document.querySelector('input')
    if(input){
    input.style.color = e.target.value
    inputUpdated.value ="#2B283A"
    }  
})    
yellow.addEventListener("click",   function(e){
  const input = document.querySelector('input')
    if(input){
    input.style.color = e.target.value
    inputUpdated.value ="#FBF3AB"
    }  
})    
purple.addEventListener("click",   function(e){
  const input = document.querySelector('input')
    if(input){
    input.style.color = e.target.value
    inputUpdated.value ="#A626D3"
    }  
})  

const postArray = []
let post = ''
fetch("https://www.thecolorapi.com/id?hex=C7A490")
.then(resp=>resp.json())
.then(data=>{
    
    const opt = data.image;
    const named = opt.named;
    const mode = data.mode;
   document.getElementById('monocromatico').innerHTML=`<img src="${named}"/> ` 
    
    
       
        
     
   
})