"use strict";

let captcha = document.getElementById("captcha");  //Span donde se genera el captcha
let randomCaptcha;
let submitButton = document.getElementById("submitButton"); //Boton que hace la validacion
generateCaptcha();
submitButton.addEventListener("click", validateCaptcha);
captcha.addEventListener("click", generateCaptcha);

function generateCaptcha() {
    randomCaptcha = Math.floor(Math.random() * 100000);
    if (randomCaptcha < 10000) generateCaptcha();
    captcha.innerHTML = randomCaptcha;
}

function validateCaptcha(event) {
    event.preventDefault();
    let userInput = document.getElementById("captchaInput");   //Input text donde el usuario ingresa la respuesta
    let userInputValue = userInput.value;  //Lo que ingresó el user
    let isValid = document.getElementById("label-IsValidForm");  //Label donde se muestra el resultado
    if (captcha.innerHTML != userInputValue) {
        
        isValid.innerHTML = "🤖Captcha incorrecto🤖. Intentá nuevamente.";
        userInput.value = "";
    }
    else {
        isValid.innerHTML = "Captcha correcto! No sos un robot.";
        
    }
    //lo muestra en consola (opcional, para debug)
    console.log(isValid.innerHTML);
}
