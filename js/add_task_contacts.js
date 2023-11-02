/** 
 * This function generates the selectable contacts drop down list. 
 */
function openDropdownContact() {
    openTranspOverlay();
    removeClassTranspOverlay();
    generateOpenAddContactMainContainer();
    let addContactContainer = document.getElementById('addContact');
    addContactContainer.innerHTML = "";
    for (let j = 0; j < Contacts.length; j++) {
        const element = Contacts[j];
        const element2 = addedContacts[j];
        const theValue = 'yes';
        if (element2['added'] == theValue) {
            generateSelectedContact(j, element);
            currentUserCheck(j);
        }
        else {
            generateUnselectedContact(j, element);
            currentUserCheck(j);
        }
    }
}

/** 
 * This function generates the empty body of the selectable contacts list.
 */
function generateOpenAddContactMainContainer() {
    let addContactMainContainer = document.getElementById('assigned_to');
    addContactMainContainer.innerHTML = "";
    addContactMainContainer.innerHTML += `<h5>Assigned to</h5>
    <input type="text" class="selectContainer" placeholder="Select contacts to assign" onclick="closeDropdownContact()"> </input>
    <div class="contacts_list_add_task" id="addContact"></div>`;
}

/** 
 * This function generates the contacts that have not been added to the selected contacts list.
 * @param {object} element 
 * @param {number} j 
 */
function generateUnselectedContact(j, element) {
    let addContactContainer = document.getElementById('addContact');
    let firstTwoLetters = element['firstName'].charAt(0) + element['lastName'].charAt(0);
    addContactContainer.innerHTML += `
    <div class="add-task-contact" id="addTaskContact_${j}" onclick="selectedContact(${j})">
        <div class="frame_212">
            <div class="frame_79">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 42 42" fill="none">
                <circle cx="50%" cy="50%" r="20" fill="${nameTagsColors[j]}" stroke="white" stroke-width="3px"/>
                </svg>
                <p>${firstTwoLetters}</p>
            </div>    
            <div class="add-task-contact-name">
                ${element['firstName']} ${element['lastName']} <span id="currentUserCheck${j}"></span>
            </div>
        </div>
        <div class="add-task-contact-checkbox">
            <input type="checkbox" id="checkBox_${j}" onclick="selectedContact(${j})" class="d-none">
            <img class="add_task_checkbox" id="add_task_checkbox_${j}" src="assets/img/board/checkbox-unchecked.svg">
        </div>
    </div>`
}

/** 
 * This function generates the contacts that have been added to the selected contacts list. 
 * @param {object} element 
 * @param {number} j  
 */
function generateSelectedContact(j, element) {
    let addContactContainer = document.getElementById('addContact');
    let firstTwoLetters = element['firstName'].charAt(0) + element['lastName'].charAt(0);
    addContactContainer.innerHTML += `
        <div class="add-task-contact col_2A3647" id="addTaskContact_${j}" onclick="selectedContact(${j})">
            <div class="frame_212">
                <div class="frame_79">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 42 42" fill="none">
                    <circle cx="50%" cy="50%" r="20" fill="${nameTagsColors[j]}" stroke="white" stroke-width="3px"/>
                    </svg>
                    <p>${firstTwoLetters}</p>
                </div>    
                <div class="add-task-contact-name">
                    ${element['firstName']} ${element['lastName']} <span id="currentUserCheck${j}"></span>
                </div>
            </div>
            <div class="add-task-contact-checkbox">
                <input type="checkbox" id="checkBox_${j}" onclick="selectedContact(${j})" class="d-none" checked>
                <img class="add_task_checkbox" id="add_task_checkbox_${j}" src="assets/img/board/checkbox-checked.svg">

            </div>
        </div>`
}

/** 
 * This function generates a transparent overlay that is used to close the dropdown contact list 
 */
function openTranspOverlay() {
    let transparentOverlay = document.getElementById('transparentoverlay');
    transparentOverlay.style.display = "block";
}

/** 
 * This function closes the dropdown contact list and at the same time removes the transparent overlay that is used to close that same list 
 */
function closeTranspOverlay() {
    let transparentOverlay = document.getElementById('transparentoverlay');
    transparentOverlay.style.display = "none";
    let categoryDropDownMain = document.getElementById('category');
    if (categoryDropDownMain.classList.contains('category-z-index-2')) {
        categoryDropDownMain.classList.remove('category-z-index-2');
        closeCategoryInput();
    } else {
        if (!transparentOverlay.classList.contains("dropdownclosed")) {
            closeDropdownContact();
        }
    }
}

/** 
 * This is a help function that adds a certain classlist to the corresponding object id  
 */
function classToTranspOverlay() {
    let transparentOverlay = document.getElementById('transparentoverlay');
    transparentOverlay.classList.add("dropdownclosed");
}

/** 
 * This is a help function that removes a certain classlist to the corresponding object id  
 */
function removeClassTranspOverlay() {
    let transparentOverlay = document.getElementById('transparentoverlay');
    transparentOverlay.classList.remove("dropdownclosed");
}

/** 
 * This function finds the currently logged in user in the contacts list, and adds the word (You) next to the same contact when generating the contacts 
 * @param {number} j  
 */
function currentUserCheck(j) {
    let currentUserLabel = document.getElementById(`currentUserCheck${j}`);
    if (currentUser < Contacts.length) {
        if (Contacts[currentUser]['name'] == Contacts[j]['name']) {
            currentUserLabel.innerHTML = "(You)";
        }
    }
}

/** This function generates two arrays from the added contacts to the task. The first array is for the first and last name of the added contact,
 * and the second array is for the ids from the array Contacts, of the added contacts to the task. 
 */
function addContactToTask() {
    let addedContactsToTask = [];
    let addedIdsToTask = [];
    getContactsFromStorage();
    for (let z = 0; z < Contacts.length; z++) {
        const checkbox = document.getElementById("checkBox_" + z);
        const contact = Contacts[z];
        if (checkbox.checked) {
            generateTheAddedContact(contact);
            addedContactsToTask.push(addedContactToTask);
            addedIdsToTask.push(z);
        }
        else {
            generateTheNotAddedContact(contact);
            addedContactsToTask.push(addedContactToTask);
        }
    }
    window.addedContacts = addedContactsToTask;
    window.addedIds = addedIdsToTask;
}

/** 
 * This function generates the object to be added to the addedContactsToTask array from the assigned contact.
 * @param {object} contact 
 */
function generateTheAddedContact(contact) {
    let addedContactFirstName = contact['firstName'];
    let addedContactLastName = contact['lastName'];
    let added = 'yes';
    let theAddedContact = {
        "firstName": addedContactFirstName,
        "lastName": addedContactLastName,
        "added": added,
    };
    window.addedContactToTask = theAddedContact;

}

/** 
 * This function generates the object to be added to the addedContactsToTask array from the unassigned contact.
 * @param {object} contact 
 * */
function generateTheNotAddedContact(contact) {
    let addedContactFirstName = contact['firstName'];
    let addedContactLastName = contact['lastName'];
    let added = 'no';
    let theAddedContact = {
        "firstName": addedContactFirstName,
        "lastName": addedContactLastName,
        "added": added,
    };
    window.addedContactToTask = theAddedContact;
}

/** 
 * This funtion closes the drop down menu and generates the button for openning the same menu for the selection of a contact from the contact list.
 */
function closeDropdownContact() {
    addContactToTask();
    let addContactMainContainer = document.getElementById('assigned_to');
    addContactMainContainer.innerHTML = "";
    addContactMainContainer.innerHTML += `<h5>Assigned to</h5>
    <input type="text" class="selectContainer" placeholder="Select contacts to assign" onclick="openDropdownContact()">
        </input>`;
    renderAddedContactLabels();
    classToTranspOverlay();
    closeTranspOverlay();
}

/** 
 * This function renders the nametags of the selected contacts.
 */
function renderAddedContactLabels() {
    let addContactMainContainer = document.getElementById('assigned_to');
    addContactMainContainer.innerHTML += `<div class="added-contacts-name-tags-main" id="added_contacts_name_tags_main"> </div>`;
    for (let p = 0; p < addedContacts.length; p++) {
        const element = addedContacts[p];
        let firstTwoLetters = element['firstName'].charAt(0) + element['lastName'].charAt(0);
        let addedContactsNameTagsMain = document.getElementById('added_contacts_name_tags_main');
        if (element['added'] == 'yes') {
            addedContactsNameTagsMain.innerHTML += `
        <div class="added-contact-name-tag">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="60" fill="${nameTagsColors[p]}"/>
                </svg>
                <p>${firstTwoLetters}</p>
        </div>
        `
        }
    }
}

/** 
 * This function checks the checkbox and changes the appearance of the contact in the contact list depending on if the contact has been added to the task or not.
 * @param {number} y 
 */
function selectedContact(y) {
    let checkBox = document.getElementById(`checkBox_${y}`);
    let checkBoxImg = document.getElementById(`add_task_checkbox_${y}`);
    checkBox.click();
    checkBoxImg.setAttribute('src', 'assets/img/board/checkbox-checked.svg')
    let selectedBox = document.getElementById(`addTaskContact_${y}`);
    let hasTheClass = selectedBox.classList.contains('col_2A3647');
    if (hasTheClass) {
        selectedBox.classList.remove('col_2A3647');
        checkBoxImg.setAttribute('src', 'assets/img/board/checkbox-unchecked.svg')
    } else {
        selectedBox.classList.add('col_2A3647');
        checkBoxImg.setAttribute('src', 'assets/img/board/checkbox-checked.svg')
    }
}