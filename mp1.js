// calculator function used in home page

let one = document.getElementById("one")
let two = document.getElementById("two")
let output = document.getElementById("output")

function doAdd(){
    output.innerHTML=String(Number(one.value)+Number(two.value));
}

function doSub(){
    output.innerHTML=String(Number(one.value)-Number(two.value));
}

function doMul(){
    output.innerHTML=String(Number(one.value)*Number(two.value));
}

function doDiv(){
    output.innerHTML=String(Number(one.value)/Number(two.value));
}

function doPow(){
    x = 1
    for(let i=0; i<Number(two.value); i++){
        x *= Number(one.value)
    }
    output.innerHTML=String(x);
}

function doClear(){
    document.getElementById('one').value = '';
    document.getElementById('two').value = '';
    output.innerHTML='';
}
