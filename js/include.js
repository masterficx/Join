//Initialen des eingeloggten Nutzers
async function includeTemplates() {
    await includeHTML();
    //.split(' ') erstellt ein Array mit den durch ' ' getrennten Strings 
    //.join('') erstellt aus dem Array ein String (und entfernt die Kommas).
    const userinitials = await currentuser.split(' ').map(userinitials => userinitials[0]).join('');
    let currentUserInitials = await document.getElementById('myaccount');
    currentUserInitials.innerHTML = await `${userinitials}`;
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

