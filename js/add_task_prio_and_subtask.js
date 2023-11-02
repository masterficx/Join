/** 
 * This function makes the priority a global variable to later be added to the array "Cards".
 */ 
function setPriority() {
    if (priority == '0') { window.prio = "Urgent" };
    if (priority == '1') { window.prio = "Medium" };
    if (priority == '2') { window.prio = "Low" };
}

/** 
 * This function toggles the active state prio options  
 * @param {number} j 
 */
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
    let priorityNumber = j;
    window.priority = priorityNumber;
}

/** 
 * This function generates the input field for the creation of new subtask.
 */
function openSubtaskInput() {
    let addSubtaskContainer = document.getElementById('addNewSubtask');
    addSubtaskContainer.innerHTML = "";
    addSubtaskContainer.innerHTML += `
        <input type="text" placeholder="New subtask" id="added_subtask">
        <button class="close-category-input-btn" onclick="cancelSubtaskInput()">${smallXSVG}</button>
        <svg height="40" width="3">
            <line x1="2" y1="8" x2="2" y2="32" style="stroke:#d1d1d1;stroke-width:2" />
        </svg>
        <button class="add-category-btn" onclick="addSubtask()">${checkedSmallSVG}</button>
        `;
}

/** 
 * This function closes the subtask input field and generates the button for the opening of the addition of a new subtask.
 */ 
function cancelSubtaskInput() {
    let addSubtaskContainer = document.getElementById('addNewSubtask');
    addSubtaskContainer.innerHTML = "";
    addSubtaskContainer.innerHTML = `<p>Add new subtask</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onclick="openSubtaskInput()">
        <path d="M12.0011 12.0002L12.0018 19.4149M4.58641 12.0008L12.0011 12.0002L4.58641 12.0008ZM19.4159 11.9995L12.0004 11.9995L19.4159 11.9995ZM12.0004 11.9995L12.0005 4.58545L12.0004 11.9995Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
}

/** 
 * This function generates the container with the added subtask, also creates an entry in the addedSubtasks array with the newly added subtask.
 */
function addSubtask() {
    let addSubtaskContainer = document.getElementById('addNewSubtask');
    let addedSubtaskNameInput = document.getElementById('added_subtask').value;
    addSubtaskContainer.innerHTML = "";
    addSubtaskContainer.innerHTML = `<p>Add new subtask</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onclick="openSubtaskInput()">
        <path d="M12.0011 12.0002L12.0018 19.4149M4.58641 12.0008L12.0011 12.0002L4.58641 12.0008ZM19.4159 11.9995L12.0004 11.9995L19.4159 11.9995ZM12.0004 11.9995L12.0005 4.58545L12.0004 11.9995Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    generateTheNewSubtask(addedSubtaskNameInput);
    let addedSubtask = {
        "nameSub": addedSubtaskNameInput,
        "status": "unchecked"
    };
    addedSubtasks.push(addedSubtask);
    window.subtasks = addedSubtasks;
}

/** 
 * This function generates the container with the added subtask.
 * @param {string} addedSubtaskNameInput  
 */
function generateTheNewSubtask(addedSubtaskNameInput){
    let subtaskMain = document.getElementById('subtask_main');
    subtaskMain.innerHTML += `<div class="boxes">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 18 17" fill="none">
        <rect x="1" y="0.5" width="16" height="16" rx="3"
            fill="url(#paint0_linear_71853_3184)" stroke="black" />
        <defs>
            <linearGradient id="paint0_linear_71853_3184" x1="9" y1="0.5" x2="9"
                y2="16.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F9F9F9" />
                <stop offset="1" stop-color="#F0F0F0" />
            </linearGradient>
        </defs>
    </svg>${addedSubtaskNameInput}
</div>`;
}