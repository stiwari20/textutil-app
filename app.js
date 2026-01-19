let text = document.querySelector("#box");
let capsBtn = document.querySelector(".caps");
let body = document.querySelector("body");
let smallBtn = document.querySelector(".small");
let spaceBtn = document.querySelector(".extra-space");
let copyBtn = document.querySelector(".copy");
let inp = document.querySelector("input");
let navBar = document.querySelector("nav");

capsBtn.addEventListener("click", function () {
    // console.log(text.value);
    let newtext = upperCase(text.value);
    text.value = newtext;  
});


smallBtn.addEventListener("click", function () {
    // console.log(text.value);
    let newtext = lowerCase(text.value);
    text.value = newtext;  
});

spaceBtn.addEventListener("click", function (){
    // console.log(text.value);
    let newtext = removeExtraSpace(text.value);
    text.value = newtext;
});

copyBtn.addEventListener("click", function (){
    navigator.clipboard.writeText(text.value);
    alert("Copied text to clipboard");
});


function upperCase(str){
    // console.log(str.toUpperCase());
    return str.toUpperCase();
}

function lowerCase(str){
    // console.log(str.toLowerCase());
    return str.toLowerCase();
}

function copyText(str){

}

function removeExtraSpace(str){
    str = str.trim();
    let newStr = "";
    let i = 0;
    while(i < str.length){
        while(i < str.length && str.charAt(i) == ' '){
            i++;
        }
        let j = i;
        while(j < str.length && str.charAt(j) != ' '){
            j++;
        }

        if(newStr !== ""){
            newStr += ' ';
        }

        newStr += str.substring(i, j);
        i = j;
        
    }
    // console.log(newStr);
    return newStr;
}