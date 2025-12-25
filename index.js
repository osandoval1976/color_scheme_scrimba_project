const postArray = []
const color = document.getElementById('color').value
fetch("https://www.thecolorapi.com/scheme")
.then(response=>response.json())
.then(data =>{
    let html =''
    for(let post of  data){
        html += `
        <p>${post.hex}<p>
        `
        document.getElementById('test').innerHTML = html
    
    
}
})