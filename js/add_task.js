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
// let addedContacts = [];
function main(){
    let contactsInTask = [];
    for (let j = 0; j < Contacts.length; j++) {
        const contact = Contacts[j];
        let addedContactFirstName = contact['firstName'];
            let addedContactLastName = contact['lastName'];
            let added = 'no';
        let addedContactToTask = {
            "firsName":  addedContactFirstName ,
            "lastName":  addedContactLastName ,
            "added":  added,
            };
            
            contactsInTask.push(addedContactToTask);
}
window.addedContacts = contactsInTask;
};

function addTaskToBoard() {
    let inputTitle = document.getElementById('addTaskTitle').value;
    cards.push({
        "category": ``,
        "title": `${inputTitle}`,
        "description": ``,
        "progress": ``,
        "assignedUser": [" Paul", " Rita"],
        "prio": ``,
        "dueDate": ``,
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "AwaitingFeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" }
        ],
        "listType": ``,
    });
}

function openCategoryDropDown() {
    let categoryMainContainer = document.getElementById('category');
    categoryMainContainer.innerHTML = "";
    categoryMainContainer.innerHTML += `<h5>Category</h5><div class="selectContainer" id="addCategory"> </div>`;
    let categoryContainer = document.getElementById('addCategory');
    categoryContainer.innerHTML = "";
    ;
    categoryContainer.innerHTML += `<div class="category-selection" onclick="openCategoryInput()">Add category</div>`;
    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        categoryContainer.innerHTML += `<div class="category-selection" onclick="selectedCategory(${i})">${element['name']} <svg class="new-category-color">
        <circle cx="12" cy="12" r="10" stroke="black" stroke-width="0" fill="${element['color']}" />
        </svg></div>`;
    }


}

function openCategoryInput() {
    let categoryContainer = document.getElementById('addCategory');
    categoryContainer.innerHTML = "";
    let categoryMainContainer = document.getElementById('category');
    categoryMainContainer.innerHTML = "";
    categoryMainContainer.innerHTML = `
    <h5>Category</h5>
    <div class="add-category-container">
    <input class="added-category-name" id="added_category_name" type="text" placeholder="New category name">
    <button class="close-category-input-btn" onclick="closeCategoryInput()">${smallXSVG}</button>
    <svg height="40" width="3">
        <line x1="2" y1="8" x2="2" y2="32" style="stroke:#d1d1d1;stroke-width:2" />
    </svg>
    <button class="add-category-btn" onclick="addCategory()">${checkedSmallSVG}</button>
    </div>
    <div class="selectable-category-colors" id="selectable_category_colors">
    
    </div>
    `;
    renderSelectableCategoryColors();
    
}

function closeCategoryInput(){
    document.getElementById('category').innerHTML ="";
    document.getElementById('category').innerHTML = `<h5>Category</h5><div class="selectContainer" id="addCategory" onclick="openCategoryDropDown()">Select task category</div>`;
}

function selectedCategory(x) {
    console.log(x);
    let element = categories[x];
    document.getElementById('category').innerHTML = `
    <h5>Category</h5>
    <div class="selectContainer" id="addCategory" onclick="openCategoryDropDown()">
        <div class="category-selection">${element['name']} 
            <svg class="new-category-color">
            <circle cx="12" cy="12" r="10" stroke="black" stroke-width="0" fill="${element['color']}" />
            </svg>
        </div>
    </div>`;
window.theChosenCategory = x;
}

function renderSelectableCategoryColors() {
    let selectableColorsMainDIV = document.getElementById('selectable_category_colors');
    selectableColorsMainDIV.innerHTML = "";
    for (let y = 0; y < categoryColors.length; y++) {
        const element = categoryColors[y];
        selectableColorsMainDIV.innerHTML += `
            <div class="selected-category-color" id="${element}" onclick="selectedCategoryColor('${element}')">
                <svg class="new-category-color">
                <circle id="circle_${element}" cx="12" cy="12" r="10" stroke="black" stroke-width="0" fill="${element}" />
                </svg>
            </div>`;


    }

}

function selectedCategoryColor(x) {
    renderSelectableCategoryColors();
    window.newCategoryColor = x;
    let selectedColorContainer = document.getElementById(`circle_${x}`);
    selectedColorContainer.classList.add('stroke-width-2');
}

function addCategory() {
    let categoryNameInput = document.getElementById('added_category_name').value;
    categoryNameInput
    newCategoryColor
    categoryValue = categoryNameInput.toLowerCase();
    let newCategory = {
        name: categoryNameInput,
        color: newCategoryColor,
        value: categoryValue,
    };
    categories.push(newCategory);
    openCategoryDropDown();
}

function openDropdownContact(){
    let addContactMainContainer = document.getElementById('assigned_to');
    addContactMainContainer.innerHTML = "";
    addContactMainContainer.innerHTML += `<h5>Assigned to</h5>
    <div class="selectContainer" id="addContact">
        Select contacts to assign
        </div>`;
    let addContactContainer = document.getElementById('addContact');
    addContactContainer.innerHTML = "";
    addContactContainer.innerHTML += '<div onclick="closeDropdownContact()">Select contacts to assign</div>';
    
    
    for (let j = 0; j < Contacts.length; j++) {
        const element = Contacts[j];
        const element2 = addedContacts[j];
        const theValue = 'yes';
        if (element2['added'] == theValue) {
            addContactContainer.innerHTML += `
        <div class="add-task-contact" id="addTaskContact_${j}" onclick="selectedContact(${j})">
            <div class="add-task-contact-name">${element['firstName']} ${element['lastName']}</div>
            <div class="add-task-contact-checkbox"><input type="checkbox" id="checkBox_${j}" onclick="selectedContact(${j})" checked></div>
        </div>`;
        }
        else{
        addContactContainer.innerHTML += `
        <div class="add-task-contact" id="addTaskContact_${j}" onclick="selectedContact(${j})">
            <div class="add-task-contact-name">${element['firstName']} ${element['lastName']}</div>
            <div class="add-task-contact-checkbox"><input type="checkbox" id="checkBox_${j}" onclick="selectedContact(${j})"></div>
        </div>`;    
    }
}
}

function addContactToTask() {
    let addedContactsToTask = [];
    for (let z = 0; z < Contacts.length; z++) {
        const checkbox = document.getElementById("checkBox_"+z);
        const contact = Contacts[z];
        if(checkbox.checked){
            let addedContactFirstName = contact['firstName'];
            let addedContactLastName = contact['lastName'];
            let added = 'yes';
            let addedContactToTask = {
                "firstName":  addedContactFirstName ,
                "lastName":  addedContactLastName ,
                "added":  added,
                };
            addedContactsToTask.push(addedContactToTask);
            
        }
        else{
            let addedContactFirstName = contact['firstName'];
            let addedContactLastName = contact['lastName'];
            let added = 'no';
            let addedContactToTask = {
                "firstName":  addedContactFirstName ,
                "lastName":  addedContactLastName ,
                "added":  added,
                };
            addedContactsToTask.push(addedContactToTask);
        }
    }
    window.addedContacts = addedContactsToTask;
    console.log(addedContacts);
}

function closeDropdownContact(){
    addContactToTask();
    let addContactMainContainer = document.getElementById('assigned_to');
    addContactMainContainer.innerHTML = "";
    addContactMainContainer.innerHTML += `<h5>Assigned to</h5>
    <div class="selectContainer" id="addContact" onclick="openDropdownContact()">
        Select contacts to assign
        </div>`;
        renderAddedContactLabels();
    
}

function renderAddedContactLabels(){
    let addContactMainContainer = document.getElementById('assigned_to');
    addContactMainContainer.innerHTML += `<div class="added-contacts-name-tags-main" id="added_contacts_name_tags_main"> </div>`;
    for (let p = 0; p < addedContacts.length; p++) {
    const element = addedContacts[p];
    let firstTwoLetters = element['firstName'].charAt(0) + element['lastName'].charAt(0);
    let addedContactsNameTagsMain = document.getElementById('added_contacts_name_tags_main');
    if(element['added'] == 'yes'){
        addedContactsNameTagsMain.innerHTML += `
        <div class="added-contact-name-tag">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="60" fill="${nameTagsColors[p]}"/>
                </svg>
                <p>${firstTwoLetters}</p>
        </div>
        ` 
    }
    
}
}   

function selectedContact(y){
    let checkBox = document.getElementById(`checkBox_${y}`);
    checkBox.click();
}

// Add active state prio options
function addActiveState(j) {
    let btnsTip = document.getElementById('prioButtons').getElementsByClassName('SubTaskPrios');
    if (btnsTip[j].classList.contains('active-state')) {
        btnsTip[j].classList.remove('active-state');
    }
    else {
        for (i = 0; i < btnsTip.length; i++) {
            btnsTip[i].classList.remove('active-state');
        };
        btnsTip[j].classList.add('active-state');
    }
};