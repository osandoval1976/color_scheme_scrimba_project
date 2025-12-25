const postArray = []
const test = document.getElementById("test")
const options=''
const url = ''
fetch("https://www.thecolorapi.com/id?hex=24B1E0")
.then(response=>response.json())
.then(data =>{

    let html=''
    for(let post of data){
        html +=`
           <p>${post}</p>
        `
        document.getElementById("test").innerHTML = html
    }
    
})