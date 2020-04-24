redbox = document.getElementById("redborder")
bluebox = document.getElementById("blueborder")


let textInput = document.getElementById("message")
textInput.addEventListener("keyup", function (event){
    redbox.innerHTML = event.target.value
    bluebox.innerHTML = event.target.value
})