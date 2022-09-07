let button = document.getElementById("btn")
let res = document.getElementById("res")

button.addEventListener("click", function ageCal(){
    bornYear= document.getElementById("bornYear").value
    curYear = document.getElementById("currYear").value
    sum = curYear-bornYear

    if(curYear-bornYear){
        alert(sum +" year old")
    }
   
})