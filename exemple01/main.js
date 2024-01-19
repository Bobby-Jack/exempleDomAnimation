
let btn = document.querySelector('button')
let ball = document.getElementsByClassName('ball')[0]

btn.addEventListener("click", ()=>{
    ball.classList.toggle("move")
})