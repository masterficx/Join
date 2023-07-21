function init() {
    startAnimation();
}


function startAnimation() {
    setTimeout(function animationCallback() {
        let logo = document.getElementById("logo");
        let background = document.getElementById('startBackground');

        logo.classList.add('imgLogo');

        // Lässt langsam die startBackground div verschwinden
        background.style.backgroundColor = "rgba(246, 247, 248, 0%)";

        // Nach der Animation entferne das Bild aus dem DOM
        setTimeout(function removeBackground() {
            background.parentNode.removeChild(background);
        }, 500); // Warte 0.5 Sekunde (dieselbe Dauer wie die Animation) bevor das Bild entfernt wird

    }, 500); // Warte 0.5 Sekunden bevor die Animation startet
}


function togglePasswordVisibility() {
    let passwordInput = document.getElementById('passwordInput');
    let passwordImage = document.getElementById('passwordImage');

    if (!passwordImage.src.includes('/assets/img/logInSignUp/lock.svg')) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'; // Passwort sichtbar machen
            passwordImage.src = './assets/img/logInSignUp/eye.svg';
        } else {
            passwordInput.type = 'password'; // Passwort verstecken
            passwordImage.src = './assets/img/logInSignUp/hiddeneye.svg';
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let passwordInput = document.getElementById('passwordInput');
    let passwordImage = document.getElementById('passwordImage');
    let emailInput = document.getElementById('emailInput');

    passwordInput.addEventListener('focus', function() {
        if (passwordInput.value.trim().length > 0 && passwordInput.type === 'password') {
            passwordImage.src = './assets/img/logInSignUp/hiddeneye.svg';
        }
    });

    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.trim().length > 0) {
            passwordImage.src = './assets/img/logInSignUp/hiddeneye.svg';
        } else {
            passwordImage.src = './assets/img/logInSignUp/lock.svg';
        }
    });

    passwordInput.addEventListener('focusout', function() {
        if (passwordInput.value.trim().length === 0) {
            passwordImage.src = './assets/img/logInSignUp/lock.svg';
        }
    });

    passwordInput.addEventListener('focus', function(){
        passwordInput.parentNode.classList.add('inputBlueBorder');
    });

    passwordInput.addEventListener('focusout', function(){
        passwordInput.parentNode.classList.remove('inputBlueBorder');
    });

    emailInput.addEventListener('focus', function(){
        emailInput.parentNode.classList.add('inputBlueBorder');
    });

    emailInput.addEventListener('focusout', function(){
        emailInput.parentNode.classList.remove('inputBlueBorder');
    });
});


function remember() {
    let rememberMeImg = document.getElementById('rememberMe');

    if (rememberMeImg.src.includes('uncheckedButton')) {
        rememberMeImg.src = 'assets/img/logInSignUp/checkButton.svg';
    } else {
        rememberMeImg.src = 'assets/img/logInSignUp/uncheckedButton.svg';
    }
}


function test(){
    console.log('Passt!')
}