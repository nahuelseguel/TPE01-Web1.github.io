let captcha = document.getElementById("captcha");
const CAPTCHA_LENGHT = 6;
let arr = [];
// Agregar letras mayúsculas (A-Z)
for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCharCode(i));
}
// Agregar letras minúsculas (a-z)
for (let i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i));
}
// Agregar números (0-9)
for (let i = 0; i <= 9; i++) {
    arr.push(i.toString());
}
let capClick = captcha.addEventListener("click", newCaptcha);
let userInput = document.getElementById("userInput");
let captchaResult = document.getElementById("captchaResult");
let btn = document.getElementById("btn").addEventListener("click", validateCaptcha);
function newCaptcha() {
    let c = "";
    for (let i = 1; i <= CAPTCHA_LENGHT; i++) {
        c = c + randomChar();
    }
    captcha.innerHTML = c;
    captchaResult.innerHTML="";
}

function randomChar() {
    let random = '';
    let n = Math.floor(arr.length*Math.random());
    random = arr[n];
    return (random);
}

function validateCaptcha() {
    if(userInput.value==captcha.innerHTML) captchaResult.innerHTML = "OK!"
    else captchaResult.innerHTML = "Error";
    };


newCaptcha();
