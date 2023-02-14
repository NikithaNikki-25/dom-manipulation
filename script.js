let colors=['blue','green','orange','red']
let btn=document.getElementById('changeColor')
btn.addEventListener('click',function(){
    var colors1=colors[Math.floor(Math.random()*colors.length)]
    let container=document.getElementById('container1')
    container.style.background=colors1
})

let add=document.getElementById('addChild')
var squareBox=document.createElement('div')
squareBox.style.cssText="width:100px; height:100px;background:blue"
add.addEventListener('click',function(){
    let container=document.getElementById('container1')
    container.appendChild(squareBox)
})


let child_remove=document.getElementById('removeChild')
child_remove.addEventListener('click',function(){
    let container=document.getElementById('container1')
    container.child_remove(squareBox)
})