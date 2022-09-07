let button = document.getElementById("btn")

button.addEventListener("click", function ageCal(){
    bornYear= document.getElementById("bornYear").value
    curYear = document.getElementById("currYear").value
    document.getElementById("res").innerHTML = curYear-bornYear
})