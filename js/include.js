let currentuser = "Jon Doe";

/**
 * Initialize logged in user
 */
async function includeTemplates(a) {
    await getContactsFromStorage();
    await includeHTML();
    highlightCurrentLocationInNavbar();
    let currentUserInitials = await document.getElementById('myaccount');
    if (currentUser !== 1000) {
        if (currentUser || '0') {
            currentUserInitials.innerHTML = await `${Contacts[currentUser].firstLetters}`;
        }
    } else {
        currentUserInitials.innerHTML = await `G`;
    }
    addClassActiveMenuItem();
    if (a === 1) {
        hideHeaderMenu();
    }
    await dateValidation();
}

/**
 * Adding class to active menu item.
 */
function addClassActiveMenuItem() {
    let linkElement = [];
    linkElement = document.getElementById('menu').getElementsByTagName('a');
    for (i = 0; i < linkElement.length; i++) {
        if (document.location.pathname === linkElement[i].getAttribute('href')) {
            linkElement[i].classList.add("active");
        }
    }
}

/**
 * Function to include html-templates
 */
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

/**
 * Show "my account - menu" in header
 */
function showMenu() {
    let myAccountMenu = document.getElementById('myaccount');
    let subMenu = document.getElementById('headsubmenu');
    if (subMenu.style.display == "none") {
        subMenu.style = "display: block;";
        myAccountMenu.classList.add('show');
    }
    else {
        subMenu.style = "display: none;";
        myAccountMenu.classList.remove('show');
    };
}

/**
 * Set minimum date
 */
function dateValidation() {
    let dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.setAttribute("min", `${new Date().toISOString().split('T')[0]}`);
    }
}

/**
 * Hide header menus by default
 */
function hideHeaderMenu() {
    document.getElementById('menu').style.display = "none";
    document.getElementById('headerRight').style.display = "none";
}

/**Higlight the active selection in the navbar */
function highlightCurrentLocationInNavbar(){
    let location = window.location.href;
    if (location.includes('summary')){
        highlightSidebarChoice('sidebar_summary')
    } else if (location.includes('board')){
        highlightSidebarChoice('sidebar_board')
    } else if (location.includes('add_task')){
        highlightSidebarChoice('sidebar_add_task')
    } else if (location.includes('contacts')){
        highlightSidebarChoice('sidebar_contacts')
    }
}

/**
 * Small help function to shorten the highlightCurrentLocationInNavbar() function.
 * @param {string} element_id 
 */
function highlightSidebarChoice(element_id){
    unhighlightSidebarChoice();
    document.getElementById(element_id).classList.add('highlight_sidebar')
}

/** Small help function to clear all hihlighted selections in the sidebar */
function unhighlightSidebarChoice(){
    document.getElementById('sidebar_summary').classList.remove('highlight_sidebar');
    document.getElementById('sidebar_board').classList.remove('highlight_sidebar');
    document.getElementById('sidebar_add_task').classList.remove('highlight_sidebar');
    document.getElementById('sidebar_contacts').classList.remove('highlight_sidebar');
}