const magenta = document.getElementById('magenta')
const black = document.getElementById('black')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const purple = document.getElementById('purple')
const inputUpdated = document.getElementById('input-color')
const selectItem =document.getElementById('nameList')
const btn = document.getElementById('btn')  
let postArray =[]
let html=''
let info={}
let pushUpdated={}
function renderPost(){
fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6")
.then(resp=>resp.json())
.then(data=> {  
postArray.push(data)  
html +=`
<div>${postArray}</div>
`   
document.getElementById('post').innerHTML =`<img src="${html.image}">` 
 })

info={
 colors:inputUpdated.value, 
 mode:selectItem.value,  
 count:5
 }

}
btn.addEventListener('click', function(){
fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6", info)
.then(resp=>resp.json())
.then(post=> {
pushUpdated={
    method: 'PUT', 
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(post)
}
  
  postArray.unshift(pushUpdated)
  
inputUpdated.value=''
selectItem.value=''
console.log(postArray)
 renderPost()
 })  
renderPost()
})

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
    inputUpdated.value   ="#2B283A"
      
    }  
})    
yellow.addEventListener("click",   function(e){
  const input = document.querySelector('input')
    if(input){
    input.style.color = e.target.value
    inputUpdated.value  ="#FBF3AB"
    
    }  
})    
purple.addEventListener("click",   function(e){
  const input = document.querySelector('input')
    if(input){
    input.style.color = e.target.value
    inputUpdated.value   ="#A626D3"
   
    }  
})  