let nf = document.getElementById("name");
let cf = document.getElementById('contact');
let ef = document.getElementById('email');

function checkName(){
    let nRegex = /^[a-zA-Z]*$/g;
    if (nf.value.match(nRegex)){
        document.getElementById("nError").innerText="";
    }
    else{
        document.getElementById("nError").innerText="Invalid name !"
    }
}
function checkContact(){
    let cRegex = /^98[0-9]*$/g;
    if (cf.value.match(cRegex)){
        document.getElementById("cError").innerText="";
    }
    else{
        document.getElementById("cError").innerHTML="Numbers only <br>Should start form 98  !"
    }
}
function checkEmail(){
    let eRegex = /[a-z A-z 0-9]+\@[a-zA-Z]+\.[a-zA-Z]/g;
    if (ef.value.match(eRegex)){
        document.getElementById("eError").innerText="";
    }
    else{
        document.getElementById("eError").innerHTML="Invalid email format!"
    }
}