const test = document.getElementById("color")
fetch("https://www.thecolorapi.com/id?format=svg&hex=24B1E0", {method:post})
.then(res=>res.json())
.then(data => test.innerHTML = data)