// Funktion zum Initialisieren der Seite
function init() {
    startAnimation();
}


// Funktion zum Starten der Animation
function startAnimation() {
    setTimeout(function animationCallback() {
        let logo = document.getElementById("logo");
        let background = document.getElementById('startBackground');

        logo.classList.add('imgLogo');

        // Lässt langsam die startBackground div verschwinden
        background.style.backgroundColor = "rgba(246, 247, 248, 0%)";

        // Nach der Animation entferne das Bild aus dem DOM
        setTimeout(function removeBackground() {
            if (background && background.parentNode) {
                background.parentNode.removeChild(background);
            }
        }, 500); // Warte 0.5 Sekunde (dieselbe Dauer wie die Animation) bevor das Bild entfernt wird

    }, 500); // Warte 0.5 Sekunden bevor die Animation startet
}


// Funktion zum Umschalten der Passwortsichtbarkeit
function togglePasswordVisibility(i) {
    let passwordInput = document.getElementById('passwordInput');
    let passwordImage = document.getElementById('passwordImage');
    let passwordInput2 = document.getElementById('passwordInput2');
    let passwordImage2 = document.getElementById('passwordImage2');

    if (passwordInput && i === 1) {
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
    if (passwordInput2 && i === 2) {
        if (!passwordImage2.src.includes('/assets/img/logInSignUp/lock.svg')) {
            if (passwordInput2.type === 'password') {
                passwordInput2.type = 'text'; // Passwort sichtbar machen
                passwordImage2.src = './assets/img/logInSignUp/eye.svg';
            } else {
                passwordInput2.type = 'password'; // Passwort verstecken
                passwordImage2.src = './assets/img/logInSignUp/hiddeneye.svg';
            }
        }
    }
}


// Funktion zum Hinzufügen der Event Listener für das Passwortfeld
function setupPasswordInputEventListeners() {
    const passwordInputs = document.querySelectorAll('.passwordInput');

    function updatePasswordImageSrc(passwordInput, passwordImage) {
        if (passwordInput.value.trim().length > 0 && passwordInput.type === 'password' || 'text') {
            passwordImage.src = './assets/img/logInSignUp/hiddeneye.svg';
        } else {
            passwordImage.src = './assets/img/logInSignUp/lock.svg';
        }
    }


    passwordInputs.forEach((passwordInput) => {
        const passwordImage = passwordInput.nextElementSibling;

        passwordInput.addEventListener('focus', function () {
            updatePasswordImageSrc(passwordInput, passwordImage);
        });

        passwordInput.addEventListener('input', function () {
            updatePasswordImageSrc(passwordInput, passwordImage);
        });

        passwordInput.addEventListener('focusout', function () {
            updatePasswordImageSrc(passwordInput, passwordImage);
        });
    });
}


// Funktion zum Hinzufügen der Event Listener nachdem das DOM geladen wurde
function setupEventListenersAfterDOMLoaded() {
    setupPasswordInputEventListeners();
}


// Funktion, die aufgerufen wird, wenn der "Remember Me" Button geklickt wird
function checkBox() {
    let rememberMeImg = document.getElementById('rememberMe');

    if (rememberMeImg.classList.contains('uncheckBox')) {
        rememberMeImg.classList.remove('uncheckBox');
        rememberMeImg.classList.add('checkBox');
    } else {
        rememberMeImg.classList.add('uncheckBox');
        rememberMeImg.classList.remove('checkBox');
    }
}





// Funktion, die für den Test verwendet wird
function test() {
    if (signUp()) {
        console.log('Passt!');
    }
}


function toggleButtonState() {
    const myButton = document.getElementById('signUp');
    if (myButton.disabled) {
        myButton.removeAttribute('disabled'); // Button aktivieren
    } else {
        myButton.setAttribute('disabled', true); // Button deaktivieren
    }
}


// Funktion zum Rendern des LogIn-Formulars
function renderLogIn() {
    let contentbox = document.getElementById('contentbox');

    contentbox.innerHTML = /* html */ `

<form onsubmit="test(); return false;" class="content">
    <div class="headingContainer">
    <h1>Log in</h1>
    </div>
    <div class="blueSeperator"></div>
    <div>
        <div class="inputBox">
            <div class="inputField">
                <input required id="emailInput" class="" type="email" placeholder="Email">
                <img src="./assets/img/logInSignUp/mail.svg" alt="">
            </div>
            <div class="inputField">
                <input required id="passwordInput" class="passwordInput" type="password" placeholder="Password">
                <img id="passwordImage" class="passwordImage" src="./assets/img/logInSignUp/lock.svg" alt="" onclick="togglePasswordVisibility(1)">
            </div>
            <div class="rememberMeForgetBox">
                <div class="checkBoxLogIn">
                    <div onclick="checkBox()" id="rememberMe" class="uncheckBox"></div>
                    <span>Remember me</span>
                </div>
                <a id="fmp" href="#" onclick="renderForgotPW()"> Forget my password</a>
            </div>
</div>
    </div>
    <div class="logInButtonBox">
        <button type="onsubmit" class="logInButton">Log in</button>
        <button type="button" onclick="test()" class="logInButton guestLogIn">Guest Log in</button>
    </div>
</form>
        `;
    setupEventListenersAfterDOMLoaded();
    document.getElementById('headerRight').classList.remove('d-none');
    document.getElementById('footer').classList.remove('d-none');
}


// Funktion zum Rendern des SignUp-Formulars
function renderSignUp() {
    let contentbox = document.getElementById('contentbox');

    contentbox.innerHTML = /* html */ `

<form onsubmit="test(); return false;" class="content">
    <div class="headingContainer">
    <div onclick="renderLogIn()" class="imgHeadingContainer backArrow"></div>
    <h1>Sign Up</h1>
    <div class="imgHeadingContainer"></div>
    </div>
    <div class="blueSeperator"></div>
    <div>
        <div class="inputBox">
            <div class="inputField">
                <input required id="nameInput" class="" type="text" placeholder="Name">
                <img src="./assets/img/logInSignUp/person.svg" alt="">
            </div>
            <div class="inputField">
                <input required id="emailInput" class="" type="email" placeholder="Email">
                <img src="./assets/img/logInSignUp/mail.svg" alt="">
            </div>
            <div class="inputField">
                <input required id="passwordInput" class="passwordInput" type="password" placeholder="Password">
                <img id="passwordImage" class="passwordImage" src="./assets/img/logInSignUp/lock.svg" alt="" onclick="togglePasswordVisibility(1)">
            </div>
            <div class="inputField">
                <input required id="passwordInput2" class="passwordInput" type="password" placeholder="Password">
                <img id="passwordImage2" class="passwordImage" src="./assets/img/logInSignUp/lock.svg" alt="" onclick="togglePasswordVisibility(2)">
            </div>
            <div id="passwordAlert"></div>
            <div class="rememberMeForgetBox">
                <div class="checkBoxSignIn">
                <input type="checkbox" id="rememberMe" class="uncheckBox" required>
                    <span>I accept the </span>
                </div>
                <a id="fmp" href="#"> Privacy policy</a>
            </div>
</div>
    </div>
    <div class="logInButtonBox">
        <button id="signUp" type="onsubmit" class="logInButton">Sign up</button>
    </div>
</form>
        `;
    setupEventListenersAfterDOMLoaded();
    document.getElementById('headerRight').classList.add('d-none');
}


function signUp() {
    let password1 = document.getElementById('passwordInput');
    let password2 = document.getElementById('passwordInput2');

    if (password1.value !== password2.value) {
        passwordAlert.textContent = "Die Passwörter stimmen nicht überein!";
        password2.parentElement.classList.add('redInput');
        setTimeout(function () {
            passwordAlert.textContent = "";
            password2.parentElement.classList.remove('redInput');
        }, 3000);
    } else {
        console.log('Passwörter stimmen überein');
        return true;
    }
}


function renderForgotPW() {
    let contentbox = document.getElementById('contentbox');

    contentbox.innerHTML = /* html */ `

<form onsubmit="test(); return false;" class="content forgotPW">
    <div class="headingContainer">
    <div onclick="renderLogIn()" class="imgHeadingContainer backArrow"></div>
    <h1>I forgot my password</h1>
    <div class="imgHeadingContainer"></div>
    </div>
    <div class="blueSeperator"></div>
    <h2>Don't worry! We will send you an email with the instructions to reset your password.</h2>
    <div>
        <div class="inputBox">
            <div class="inputField">
                <input required id="emailInput" class="" type="email" placeholder="Email">
                <img src="./assets/img/logInSignUp/mail.svg" alt="">
            </div>
</div>
    </div>
    <div class="logInButtonBox">
        <button id="signUp" type="onsubmit" class="sendEmailButton">Send me the email</button>
    </div>
</form>
        `;
    document.getElementById('headerRight').classList.add('d-none');
    document.getElementById('footer').classList.add('d-none');
}


// Event Listener, der init() aufruft, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', init);