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
    let passwordToggle = document.getElementById('passwordToggle');
    let passwordImage = document.getElementById('passwordImage');

    if (!passwordImage.src.includes('/assets/img/logInSignUp/lock.svg')) {
        if (passwordToggle.type === 'password') {
            passwordToggle.type = 'text'; // Passwort sichtbar machen
            passwordImage.src = './assets/img/logInSignUp/eye.svg';
        } else {
            passwordToggle.type = 'password'; // Passwort verstecken
            passwordImage.src = './assets/img/logInSignUp/hiddeneye.svg';
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let passwordToggle = document.getElementById('passwordToggle');
    let passwordImage = document.getElementById('passwordImage');

    passwordToggle.addEventListener('focus', function() {
        if (passwordToggle.value.trim().length > 0 && passwordToggle.type === 'password') {
            passwordImage.src = './assets/img/logInSignUp/hiddeneye.svg';
        }
    });

    passwordToggle.addEventListener('input', function() {
        if (passwordToggle.value.trim().length > 0) {
            passwordImage.src = './assets/img/logInSignUp/hiddeneye.svg';
        } else {
            passwordImage.src = './assets/img/logInSignUp/lock.svg';
        }
    });

    passwordToggle.addEventListener('focusout', function() {
        if (passwordToggle.value.trim().length === 0) {
            passwordImage.src = './assets/img/logInSignUp/lock.svg';
        }
    });
});