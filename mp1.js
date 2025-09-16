// calculator function used in home page

let one = document.getElementById("one")
let two = document.getElementById("two")
let output = document.getElementById("output")

function doAdd(){
    if ((Number(one.value)+Number(two.value)) < 0){
        output.style.color = 'red';
    }else{
        output.style.color = 'black';
    }
    output.innerHTML=String(Number(one.value)+Number(two.value));
}

function doSub(){
    if ((Number(one.value)-Number(two.value)) < 0){
        output.style.color = 'red';
    }else{
        output.style.color = 'black';
    }
    output.innerHTML=String(Number(one.value)-Number(two.value));
}

function doMul(){
    if ((Number(one.value)*Number(two.value)) < 0){
        output.style.color = 'red';
    }else{
        output.style.color = 'black';
    }
    output.innerHTML=String(Number(one.value)*Number(two.value));
}

function doDiv(){
    if ((Number(one.value)/Number(two.value)) < 0){
        output.style.color = 'red';
    }else{
        output.style.color = 'black';
    }
    output.innerHTML=String(Number(one.value)/Number(two.value));
}

function doPow(){
    x = 1
    for(let i=0; i<Number(two.value); i++){
        x *= Number(one.value)
    }
    if (x < 0){
        output.style.color = 'red';
    }else{
        output.style.color = 'black';
    }
    output.innerHTML=String(x);
}

function doClear(){
    one.value = '';
    two.value = '';
    output.innerHTML='';
}
