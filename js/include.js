let currentuser = "Jon Doe";

//Initialen des eingeloggten Nutzers
async function includeTemplates() {
    await includeHTML();
    let currentUserInitials = await document.getElementById('myaccount');
    if(currentUser) {  
        currentUserInitials.innerHTML = await `${Contacts[currentUser].firstLetters}`;
        } else {
            currentUserInitials.innerHTML = await `G`;
        }
   
    //Klasse "active" dem aktuellen Menüpunkt geben
    let linkElement = [];
    linkElement = document.getElementById('menu').getElementsByTagName('a');
    for (i = 0; i < linkElement.length; i++) {
        if (document.location.pathname === linkElement[i].getAttribute('href')) {
            linkElement[i].classList.add("active");
            
        }
    }

}

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

// Klick im Header auf "My account" zeigt das Menü
function showMenu(){
    let myAccountMenu = document.getElementById('myaccount');
    let subMenu = document.getElementById('headsubmenu');
    if(subMenu.style.display == "none"){
    subMenu.style = "display: block;";
    myAccountMenu.classList.add('show');
    }
    else{
        subMenu.style = "display: none;";
        myAccountMenu.classList.remove('show');   
    };
    }