/** 
 * This function closes the add new contact overlay without saving the changes anywhere. 
 */
function closeNewContact() {
    let newContactOverlayDiv = document.getElementById('overlay_new_contact');
    let newContactMainDiv = document.getElementById('new_contact_main');
    newContactMainDiv.classList.add('close-new-contact-animate');

    setTimeout(() => {
        void newContactOverlayDiv.offsetWidth;
        newContactOverlayDiv.classList.add('d-none');
        newContactMainDiv.classList.remove('close-new-contact-animate')
    }, "220");

}

/** 
 * This function gets all values from the input fields and does certain checks before saving the new contact in the Contacts array
 */
async function createNewContact() {
    let nameInput = document.getElementById('add_contact_name').value;
    if (checkTwoWords(nameInput)) {
        let nameArray = nameInput.split(' ');
        let firstName = nameArray[0];
        let lastName = nameArray[1];
        let emailInput = document.getElementById('add_contact_email').value;
        let phoneInput = document.getElementById('add_contact_phone').value;
        let firstTwoLetters = firstName.charAt(0) + lastName.charAt(0);
        let newContact = {
            "firstName": firstName,
            "lastName": lastName,
            "phone": phoneInput,
            "email": emailInput,
            "color": "black",
            "firstLetters": firstTwoLetters,
            "name": nameInput,
            "password": '1234',
        };
        let alreadyUser = 0;
        for (let m = 0; m < Contacts.length; m++) {
            if (Contacts[m]["email"] == emailInput) {
                document.getElementById('messageExistingContact').style.display = 'block';
                alreadyUser = 1;
                break;
            } else { break }
        }
        if (alreadyUser != 1) {
            Contacts.push(newContact);
            sortContactsAlphabetically(Contacts);
            await saveContactsToStorage();
            let theIndex = Contacts.findIndex(x => x.email === emailInput);
            console.log(theIndex);

            closeNewContact();
            await renderContactsList();
            let theNewId = findContactIdByEmail(Contacts, emailInput);
            target = document.getElementById(`contact_${theNewId}`);
            setTimeout(() => {
                scrollToNewContact('contacts_list', `contact_${theNewId}`);
                setTimeout(() => {
                    target.click();
                }, "550");
            }, "550");
        }
    }
}

/**
 * This function is used to delete the current user. 
 */
function deleteCurrentUser() {
    let position = Contacts.findIndex(contact => contact.firstName === 'Guest');
    Contacts.splice(position, 1);
    if (currentUser !== 0) {
        let user = Contacts.findIndex(contact => contact.firstName === Contacts[currentUser - 1].firstName);
        Contacts.splice(user, 1);
    }
}

/** 
 * This function generates the HTML code that is used to display the edit contact overlay container 
 * @param {number} x This parameter is the corresponding index number of the object in the array Contacts.
 * */
function renderEditContact(x) {
    let element = Contacts[x];
    let firstTwoLetters = element['firstName'].charAt(0) + element['lastName'].charAt(0);
    let overlayNewContact = document.getElementById('overlay_new_contact');
    overlayNewContact.classList.remove('d-none');
    overlayNewContact.innerHTML = editContactHTML(x, firstTwoLetters);
    document.getElementById('edit_name').value = element['firstName'] + " " + element['lastName'];
    document.getElementById('edit_email').value = element['email'];
    document.getElementById('edit_phone').value = element['phone'];
    let subMenu = document.getElementById('edit-contact');
    subMenu.style = "display: none;";

}

/** 
 * This function deletes a contact from the array Contacts with the corresponding object id that is transferred as the "x" parameter 
 * @param {number} x  This parameter is the corresponding index number of the object in the array Contacts.
 * */
async function deleteContactFromEdit(x) {
    deleteContact(x);
    closeNewContact();
    await saveContactsToStorage();
    renderContactsList();
}

/**
 * This function gets all the needed input values from the edit contact overlay container, and saves the changes to the correspondig object in the array Container  
 * @param {number} x This parameter is the corresponding index number of the object in the array Contacts. 
 */
function editContact(x) {
    let nameInput = document.getElementById('edit_name').value;
    if (checkTwoWords(nameInput)) {
        let nameArray = nameInput.split(' ');
        let newFirstName = nameArray[0];
        let newLastName = nameArray[1];
        let newEmail = document.getElementById('edit_email').value;
        let newPhone = document.getElementById('edit_phone').value;
        let element = Contacts[x];
        element.firstName = newFirstName;
        element.lastName = newLastName;
        element.email = newEmail;
        element.phone = newPhone;
        element.name = nameInput;
        saveContactsToStorage();
        closeNewContact();
        renderContactsList();
        document.getElementById('floating_contact').innerHTML = "";
        showContactDetails(x)
    }

}

/** 
 * This function opens the edit contact menu in the mobile version of the webpage 
 */
function showContactEditMenu() {
    let subMenu = document.getElementById('edit-contact');
    let editOverlay = document.getElementById('editcontactoverlay');
    if (subMenu.style.display == "none") {
        subMenu.style = "display: block;";
        editOverlay.style = "display: block;";
    }
    else {
        subMenu.style = "display: none;";
    };
}

/** 
 * This function closes the edit contact menu in the mobile version of the webpage 
 */
function closeEditOverlay() {
    let subMenu = document.getElementById('edit-contact');
    let editOverlay = document.getElementById('editcontactoverlay');
    editOverlay.style = "display: none;";
    subMenu.style = "display: none;";
}

/**
 * This function is used to delete a contact from the contacts list 
 * @param {number} x  This parameter is the corresponding index number of the object in the array Contacts.
 */
function deleteContact(x) {
    if (x === currentUser) {
        alert("You can't delete yourself.")
    } else {
        Contacts.splice(x, 1);
        if (currentUser > x && currentUser !== 1000) {
            currentUser--
            localStorage.setItem('currentUser', currentUser);
        };
        document.getElementById('floating_contact').innerHTML = '';
        saveContactsToStorage();
        renderContactsList();
        if (shouldCloseEmptyContactCard()) {
            setTimeout(() => backToContacts(), 500);
        }
    }
}

/** 
 * This function generates the HTML code used to display the add new contact overlay container.  
 */
function renderAddNewContact() {
    let overlayNewContact = document.getElementById('overlay_new_contact');
    overlayNewContact.classList.remove('d-none');
    overlayNewContact.innerHTML = addNewContactHTML();

}

/**
 * This function generates the html code required to render the editContact overlay
 * @param {number} x 
 * @param {string} firstTwoLetters 
 * @returns 
 */
function editContactHTML(x, firstTwoLetters) {
    return /* html */ `
    <div class="new-contact-main new-contact-main-animate" onclick="doNotClose(event)" id="new_contact_main">
    <div class="frame-194">
        <div class="capa2">${capa2}</div>
        <div class="frame-210">
            <div class="frame-211">Edit contact</div>
            <div class="vector-5">${vector5}</div>
        </div>
    </div>

    <div class="frame-79">
        <div class="group-9">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="60" fill="${nameTagsColors[x]}"/>
        </svg>
        <p>${firstTwoLetters}</p>
        </div>
    </div>
    
    <div class="frame-215">
    <form  onsubmit="editContact(${x}); return false;">
        <div class="add-contact-text-main">
            <div id="name_Frame" class="frame-14"> 
                <div class="frame-157">
                    <input type="text" id="edit_name" required placeholder="Name">
                    ${personSmallSVG}
                </div>
                <div id="name_popup">Please enter name and surname</div>
            </div>
            <div class="frame-14"> 
                <div class="frame-157">
                    <input type="email" id="edit_email" required placeholder="Email">
                    ${emailSmallSVG}
                </div>
            </div>
            <div class="frame-14"> 
                <div class="frame-157">
                    <input type="tel" id="edit_phone" placeholder="Phone" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))">
                    ${phoneSmallSVG}
                </div>
            </div>
        </div>
        <div class="add-contact-buttons-main">                                                
                <div class="add-contact-cancel" onclick="deleteContactFromEdit(${x})">
                    <span>Delete</span> 
                </div>
                <button type="submit" class="add-contact-create"> 
                    <span> Save </span>
                    ${checkSmallSVG}
                </button>
            
        </div>
        </form>
    </div>

</div>`
}

/**
 * This function returns the HTML code required to generate the addNewContact overlay.
 */
function addNewContactHTML() {
    return /* html */ `
    <div class="new-contact-main new-contact-main-animate" onclick="doNotClose(event)" id="new_contact_main">
    <div class="frame-194">
        <div class="capa2">${capa2}</div>
        <div class="frame-210">
            <div class="frame-211">Add contact</div>
            <div class="frame-212">Tasks are better with a team!</div>
            <div class="vector-5">${vector5}</div>
        </div>
    </div>

    <div class="frame-79">
        <div class="group-9">
                ${group9SVG}
            <div class="person">${personSVG} </div>
        </div>
    </div>
    
    <div class="frame-215">
    <p id="messageExistingContact" style="display: none;">This contact already exists. Please use other e-mail address!</p>
    <form  onsubmit="createNewContact(); return false;">
        <div class="add-contact-text-main">
            <div id="name_Frame" class="frame-14"> 
                <div class="frame-157">
                    <input type="text" required id="add_contact_name" placeholder="Name and surname">
                    ${personSmallSVG}
                </div>
                <div id="name_popup">Please enter name and surname</div>
            </div>
            
            <div class="frame-14"> 
                <div class="frame-157">
                    <input type="email" required id="add_contact_email" placeholder="Email">
                    ${emailSmallSVG}
                </div>
            </div>
            <div class="frame-14"> 
                <div class="frame-157">
                    <input type="tel" id="add_contact_phone" placeholder="Phone" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))">
                    ${phoneSmallSVG}
                </div>
            </div>
        </div>
        <div class="add-contact-buttons-main">                                                
                <div class="add-contact-cancel" onclick="closeNewContact()">
                    <span>Cancel</span> 
                    ${xSmallSVG}
                </div>
                <button type="submit" class="add-contact-create"> 
                    <span>Create contact</span>
                    ${checkSmallSVG}
                </button>
            
        </div>
        </form>
    </div>

</div>`
}