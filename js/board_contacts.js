/**
 * render assigned user icon with initials in card
 * @param {number} i - index of the Cards array
 */
function renderAssignedUserInBoard(i) {
    for (let j = 0; j < 4; j++) {
        document.getElementById(`InsideUser${i}`).innerHTML += `
            <div class="label-card" style="background-color:${findUserColor(i, j)}">${cards[i]['assignedUser'][j]}</div>
            `;
    }
    if(cards[i]['assignedUser'].length > 4){
        let remainingUsers = cards[i]['assignedUser'].length - 4;
        document.getElementById(`InsideUser${i}`).innerHTML += `
            + ${remainingUsers}
            `;
    }
    
}

/**
 * render assigned user full name in card detailed view
 * @param {number} i - index of the Cards array
 */
function renderAssignedUserFullName(i) {
    const currentUserNumber = parseInt(currentUser);
    for (let j = 0; j < cards[i]['assignedUserFullName'].length; j++) {
        if (currentUser < Contacts.length) {
            if (cards[i]['assignedUserFullName'][j] == Contacts[currentUserNumber]['name']) {
                document.getElementById(`InsideUserFullName${i}`).innerHTML += `
            <div class="label-name">${cards[i]['assignedUserFullName'][j]} (You)</div>
            `;
            } else {
                document.getElementById(`InsideUserFullName${i}`).innerHTML += `
            <div class="label-name">${cards[i]['assignedUserFullName'][j]}</div>
            `;
            }
        } else {
            document.getElementById(`InsideUserFullName${i}`).innerHTML += `
        <div class="label-name">${cards[i]['assignedUserFullName'][j]}</div>`;
        }
    }
}

/**
 * render color of user icon according to assigned color in contacts array
 * @param {number} i - index of the Cards array
 * @param {number} j - index of assigned user in Cards JSON
 * @returns 
 */
function findUserColor(i, j) {
    for (let k = 0; k < Contacts.length; k++) {
        if (Contacts[k]['name'] == cards[i]['assignedUserFullName'][j]) {
            // return `${Contacts[k]['color']}`;
            return `${nameTagsColors[k]}`;
        } else { }
    }
}

/**
 * open dropdown menu for contacts in board card
 * @param {number} i - index of the Cards array
 */
function openDropdownContact2(i) {
    let addContactDropdown = document.getElementById('selectuser');
    let selectBoxActivated = document.getElementById('selectbox');
    let findContact = document.getElementById('inputassigneduser').value;
    let findContactFormatted = findContact.toLowerCase();
    addContactDropdown.innerHTML = "";
    if (addContactDropdown.style.display == "none") {
        addContactDropdown.style = "display: flex;";
        selectBoxActivated.classList.add('active');
    }
    else {
        addContactDropdown.style = "display: none;";
        selectBoxActivated.classList.remove('active');
    };
    showAssignedUserOfCard(i);
    openTransparentOverlay();
}

/**
 * Render assigned user in dropdown and add class
 */
function showAssignedUserOfCard(i) {
    for (p = 0; p < Contacts.length; p++) {
        loadAssignedUserToForm(i, p);
        if (cards[i]['assignedUserFullName'].includes(Contacts[p]['name'])) {
            let addClassAssignedUser = document.getElementById(`addusercard${p}`);
            addClassAssignedUser.classList.add('added');
            let changeCheckboxImg = document.getElementById(`userchecked${p}`);
            changeCheckboxImg.src = "assets/img/board/checkbox-checked.svg";
        };
    }
}

/**
 * add user to card
 * @param {number} i - index of the Cards array
 * @param {*} p 
 */
function addUser(i, p) {
    let indexOfUser = cards[i]['assignedUserFullName'].indexOf(Contacts[p]['name']);
    let addClassAssignedUser = document.getElementById(`addusercard${p}`);
    let changeCheckboxImg = document.getElementById(`userchecked${p}`);
    if (indexOfUser == -1) {
        addNewUser(i, p, addClassAssignedUser, changeCheckboxImg);
    }
    else if (cards[i]['assignedUserFullName'].includes(Contacts[p]['name'])) {
        removeUser(i, p, indexOfUser, addClassAssignedUser, changeCheckboxImg);
    };
}

/**
 * Assigned user dropdown: Add selected user to card.
 */
function addNewUser(i, p, addClassAssignedUser, changeCheckboxImg) {
    cards[i]['assignedUser'].push(Contacts[p]['firstLetters']);
    cards[i]['assignedUserFullName'].push(Contacts[p]['name']);
    addClassAssignedUser.classList.add('added');
    changeCheckboxImg.src = "assets/img/board/checkbox-checked.svg";
}

/**
 * Assigned user dropdown: Remove selected user from card.
 */
function removeUser(i, p, indexOfUser, addClassAssignedUser, changeCheckboxImg) {
    cards[i]['assignedUser'].splice(indexOfUser, 1);
    cards[i]['assignedUserFullName'].splice(indexOfUser, 1);
    addClassAssignedUser.classList.remove('added');
    changeCheckboxImg.src = "assets/img/board/checkbox-unchecked.svg";
}

/**
 * open dropdown search menu 
 * @param {number} i - index of the Cards array 
 */
function openDropdownSearch(i) {
    let findContact = document.getElementById('inputassigneduser').value;
    let findContactFormatted = findContact.toLowerCase();
    let addContactDropdown = document.getElementById('selectuser');
    addContactDropdown.style = "display: flex;";
    addContactDropdown.innerHTML = "";
    openTransparentOverlay();
    findContacts(i, findContactFormatted);
}

/**
 * Assigned user search
 */
function findContacts(i, findContactFormatted) {
    for (p = 0; p < Contacts.length; p++) {
        if (Contacts[p]['name'].toLowerCase().includes(findContactFormatted)) {
            loadAssignedUserToForm(i, p);
            openTransparentOverlay();
            if (cards[i]['assignedUserFullName'].includes(Contacts[p]['name'])) {
                let addClassAssignedUser = document.getElementById(`addusercard${p}`);
                addClassAssignedUser.classList.add('added');
                let changeCheckboxImg = document.getElementById(`userchecked${p}`);
                changeCheckboxImg.src = "assets/img/board/checkbox-checked.svg";
            };
        }
    }
}

/**
 * load assigned user to form
 * @param {number} i - index of the Cards array
 * @param {*} p 
 */
function loadAssignedUserToForm(i, p) {
    let findContact = document.getElementById('inputassigneduser').value;
    let findContactFormatted = findContact.toLowerCase();
    let addContactDropdown = document.getElementById('selectuser');
    if (Contacts[p]['name'].toLowerCase().includes(findContactFormatted)) {
        addContactDropdown.innerHTML += `
        <div class="addusertocard" onclick="addUser(${i}, ${p})" id="addusercard${p}">
        <div class="label-card" style="background-color:${nameTagsColors[p]}">${Contacts[p]['firstLetters']}</div>
        <div class="card-name" id="contactsname${i}${p}">${Contacts[p]['name']}</div>
        <img src="assets/img/board/checkbox-unchecked.svg" class="usercheckb default" id="userchecked${p}">
        <img src="assets/img/board/checkbox-checked.svg" class="usercheckb hover"></div>`;
    }
}

/**
 * Render assigned user in edit card form.
 * @param {number} i - index of the Cards array
 */
function loadAssignedUserEditForm(i) {
    let assignedUserEditForm = document.getElementById('assignedUserEditForm');
    assignedUserEditForm.innerHTML = "";
    for (let j = 0; j < cards[i]['assignedUser'].length; j++) {
        assignedUserEditForm.innerHTML += `
            <div class="label-card" style="background-color:${findUserColor(i, j)}">${cards[i]['assignedUser'][j]}</div>`;
    }
}