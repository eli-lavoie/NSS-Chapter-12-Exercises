document.querySelector("#activate-flight").addEventListener("click", function(){
    document.getElementById("flight").classList.add("enabled")

})

document.querySelector("#activate-mindreading").addEventListener("click", function(){
    document.getElementById("mindreading").classList.add("enabled")
})

document.querySelector("#activate-xray").addEventListener("click", function(){
    document.getElementById("xray").classList.add("enabled")
})

let allPowers = document.querySelectorAll(".power")

document.querySelector("#activate-all").addEventListener("click", function(){
    for (let i = 0; i < allPowers.length; i++)
    allPowers[i].classList.add("enabled")
})

document.querySelector("#deactivate-all").addEventListener("click", function(){
    for (let i = 0; i<allPowers.length; i++)
    allPowers[i].classList.remove("enabled")
})