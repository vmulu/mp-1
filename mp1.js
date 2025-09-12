// calculator function used in home page

let one = document.getElementById("one")
let two = document.getElementById("two")
let output = document.getElementById("output")

function doAdd(){
    output.innerHTML=String(Number(one.value)+Number(two.value));
}