let checkedSmallSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<mask id="mask0_75029_4578" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
<rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_75029_4578)">
<path d="M9.54996 15.65L18.025 7.175C18.225 6.975 18.4625 6.875 18.7375 6.875C19.0125 6.875 19.25 6.975 19.45 7.175C19.65 7.375 19.75 7.6125 19.75 7.8875C19.75 8.1625 19.65 8.4 19.45 8.6L10.25 17.8C10.05 18 9.81663 18.1 9.54996 18.1C9.2833 18.1 9.04996 18 8.84996 17.8L4.54996 13.5C4.34996 13.3 4.25413 13.0625 4.26246 12.7875C4.2708 12.5125 4.37496 12.275 4.57496 12.075C4.77496 11.875 5.01246 11.775 5.28746 11.775C5.56246 11.775 5.79996 11.875 5.99996 12.075L9.54996 15.65Z" fill="#2A3647"/>
</g>
</svg>`;
let smallXSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M12.001 12.5001L17.244 17.7431M6.758 17.7431L12.001 12.5001L6.758 17.7431ZM17.244 7.25708L12 12.5001L17.244 7.25708ZM12 12.5001L6.758 7.25708L12 12.5001Z" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
let upArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" transform="rotate(180)">
<mask id="mask0_77977_799" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" >
<rect width="24" height="24" fill="#D9D9D9" />
</mask>
<g mask="url(#mask0_77977_799)">
<path d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z" fill="#2A3647"/>
</g>
</svg>`;
let downArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<mask id="mask0_77977_799" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" >
<rect width="24" height="24" fill="#D9D9D9" />
</mask>
<g mask="url(#mask0_77977_799)">
<path d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z" fill="#2A3647"/>
</g>
</svg>`;

let addedSubtasks = [];
let isFormValidated = false;

/** 
 * This is the main function that gets the two arrays from remote storage and generates a needed array.
 */
async function main() {
    let contactsInTask = [];
    await getContactsFromStorage();
    await getCategoriesFromStorage();
    for (let j = 0; j < Contacts.length; j++) {
        const contact = Contacts[j];
        let addedContactFirstName = contact['firstName'];
        let addedContactLastName = contact['lastName'];
        let added = 'no';
        let addedContactToTask = {
            "firsName": addedContactFirstName,
            "lastName": addedContactLastName,
            "added": added,
        };
        contactsInTask.push(addedContactToTask);
    }
    window.addedContacts = contactsInTask;
}

/** 
 * This function checks for assigned users to the task and makes them a global variable to later be added to the array "Cards". 
 */ 
function addTheUsers() {
    let usersToBeAdded = [];
    let fullNamesToBeAdded = [];
    for (let t = 0; t < addedIds.length; t++) {
        const element = addedIds[t];
        let addedUser = Contacts[element]['firstLetters'];
        usersToBeAdded.push(addedUser);
        let addedUserFullName = Contacts[element]['name'];
        fullNamesToBeAdded.push(addedUserFullName);
    };
    window.addedUsers = usersToBeAdded;
    window.addedUsersFullNames = fullNamesToBeAdded;
}

/** 
 * This function gets all the values from the input fields and generates an object that is later going to be added to the array "Cards".
 * @param {string} currentListType 
 */ 
function generateNewTaskObject(currentListType) {
    let inputTitle = document.getElementById('addTaskTitle').value;
    let description = document.getElementById('descriptionTextArea').value;
    let dueDate = document.getElementById('date').value;
    let theTaskToBeAdded = {
        "category": `${categories[theChosenCategory]['name']}`,
        "title": inputTitle,
        "description": description,
        "progress": "0",
        "assignedUser": addedUsers,
        "assignedUserFullName": addedUsersFullNames,
        "prio": prio,
        "dueDate": dueDate,
        "subtasks": subtasks,
        "listType": currentListType,
    };
    window.theNewTask = theTaskToBeAdded;
}

/** 
 * This function navigates to board.html with a timer of 1500 milliseconds.
 */ 
function navigateToBoard() {
    setTimeout(() => {
        document.location.href = "board.html";
    }, 1500);

}

/** 
 * This function generates and saves the card in to the remote storage with help of all the small help-functions that are called inside of it.
 * @param {string} currentListType 
 */  
async function addTaskToBoard(currentListType) {
    checkForInput();
    if (isFormValidated) {
        addTheUsers();
        setPriority();
        if (addedSubtasks.length == '0') { subtasks = [] };
        generateNewTaskObject(currentListType);
        await getCardsFromStorage();
        cards.push(theNewTask);
        saveCardsToStorage();
        showTaskCreationSuccess();
        navigateToBoard();
    }
}

/** 
 * This function validates the input before allowing the card to be saved to remote storage.
 */
function checkForInput() {
    let inputTitle = document.getElementById('addTaskTitle').value;
    let description = document.getElementById('descriptionTextArea').value;
    let dueDate = document.getElementById('date').value;
    if (!inputTitle) {
        alert("Please enter a title");
        return 0;
    }
    else if (!description) {
        alert("Please enter a description");
        return 0;
    }
    else if (!dueDate) {
        alert("Please set due date");
        return 0;
    }
    else if (typeof theChosenCategory === 'undefined') {
        document.getElementById('FieldCategory').style.display = 'block';
        return 0;
    }
    else if (typeof addedIds === 'undefined') {
        document.getElementById('FieldContact').style.display = 'block';
        return 0;
    }
    else if (typeof priority === 'undefined') {
        document.getElementById('PrioCategory').style.display = 'block';
        return 0;
    } else {
        isFormValidated = true;
    }
}

/** 
 * This function generates and animates the small floating info-box at the task creation success.
 */
function showTaskCreationSuccess() {
    let theContainerToShow = document.getElementById('task_creation_success');
    theContainerToShow.classList.remove('d-none');
    theContainerToShow.classList.add('frame_73_animate');
}

