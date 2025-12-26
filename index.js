const postArray = []
let post = ''
fetch("https://www.thecolorapi.com/id?hex=C7A490")
.then(resp=>resp.json())
.then(data=>{
    
    const opt = data.image;
    const named = opt.named;
    const mode = data.mode;
    /*document.getElementById('monocromatico').innerHTML=`<img src="${named}"/> `   */
    
    
       
        
     
   
})