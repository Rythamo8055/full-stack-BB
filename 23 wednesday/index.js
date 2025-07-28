let input = document.getElementById("input")
let p = document.getElementById("p")
let btn = document.getElementById("btn")
let RandomValue = Math.floor(Math.random()*10)
console.log("RandomValue: ",RandomValue)
btn.addEventListener("click",()=>{
    let inputValue = input.value
    checkRandomNumber(inputValue,RandomValue)
})

function checkRandomNumber(a,b) {
    if(a==b){
        p.innerText = "You Guessed correct number"
    }
    else{
        p.innerText = "You Guessed wrong number. Try Again"
    }
}

