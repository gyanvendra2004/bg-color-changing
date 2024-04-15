const body = document.querySelector('body')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColor =  function (){
    let hex = '0123456789ABCDEF'
    let num = Math.round(Math.random()*16)
    let color ="#"
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.round(Math.random()*16)]
    }
    return color;
}
const bgCol = function(){
    body.style.backgroundColor = randomColor()
    console.log('done');
}
// bgCol()

let change;

start.addEventListener('click',() =>{
  change = setInterval(bgCol, 800);
})

stop.addEventListener('click',() => {
    clearInterval(change)
})
