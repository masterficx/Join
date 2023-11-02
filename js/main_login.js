/**
 * The currently logged-in user's index.
 * @type {number}
 */
let currentUser;
let rememberMe;
let isLoggedIn;
loadcurrentUser();

/**
 * Checks the login credentials against stored contacts.
 * If successful, sets the current user, stores it in local storage, and redirects to the summary page.
 * If unsuccessful, displays an error message and highlights the password input field.
 */
async function checkLogIn() {
    getContactsFromStorage();
    let emailInput = document.getElementById('emailInput');
    let passwordInput = document.getElementById('passwordInput');
    isLoggedIn = false;
    shouldRememberMe();
    await successfulLogin(emailInput, passwordInput);
    if (!isLoggedIn) {
        unsuccessfulLogin(passwordInput);
    }
}

/**
 * Checks for successful login, and if successful, sets the current user, stores it in local storage, and redirects to the summary page.
 * @param {string} emailInput 
 * @param {string} passwordInput 
 * @param {boolean} isLoggedIn 
 */
function successfulLogin(emailInput, passwordInput) {
    for (let i = 0; i < Contacts.length; i++) {
        if (emailInput.value === Contacts[i].email && passwordInput.value === Contacts[i].password) {
            isLoggedIn = true;
            currentUser = i;
            localStorage.setItem('currentUser', currentUser);
            window.location.href = 'summary.html';
            break; // Exit the loop since no further checking is needed
        }
    }
}

/**
 * Checks if login is unsuccessful, and if unsuccessful, displays an error message and highlights the password input field.
 * @param {string} passwordInput 
 */
function unsuccessfulLogin(passwordInput) {
    passwordInput.parentElement.classList.add('redInput');
    wrong_password_popup.classList.add('show');
    setTimeout(() => { // Clear the error message and remove the red highlight after 3 seconds
        passwordInput.parentElement.classList.remove('redInput');
        wrong_password_popup.classList.remove('show');
    }, 3000);
}

/**
 * Checks if the login credentials should be remembered.
 */
function shouldRememberMe() {
    let rememberMeImg = document.getElementById('rememberMe');
    if (rememberMeImg.classList.contains('checkBox')) {
        localStorage.setItem('rememberMe', 1);
    }
}

/**
 * Loads the current user from local storage.
 */
function loadcurrentUser() {
    let storedCurrentUser = localStorage.getItem('currentUser');
    let stordeRememberMe = localStorage.getItem('rememberMe');
    if (storedCurrentUser !== null) {
        currentUser = parseInt(storedCurrentUser);
    }
    if (stordeRememberMe !== null) {
        rememberMe = parseInt(stordeRememberMe);
    }
}

/**
 * Logs in as a guest user and redirects to the summary page.
 */
function guestLogIn() {
    localStorage.setItem('currentUser', 1000);
    window.location.href = 'summary.html';
}