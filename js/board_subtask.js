/**
 * Render sub task mask
 */
function renderSubTaskMask(i) {
    return `
    <div class="subtask" id="subtask_main2">
        <h5>Subtasks</h5>
        <div id="addNewSubtask2" class="subtask-input">
            <p>Add new subtask</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onclick="openSubtaskInput2(${i})">
                <path d="M12.0011 12.0002L12.0018 19.4149M4.58641 12.0008L12.0011 12.0002L4.58641 12.0008ZM19.4159 11.9995L12.0004 11.9995L19.4159 11.9995ZM12.0004 11.9995L12.0005 4.58545L12.0004 11.9995Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <div id="subtasklist"></div>
        <div class="checkboxes" id="added_subtasks_main">
        </div>
    </div>`;
}

/**
 * load form to edit subtasks in detailed view of card
 * @param {number} i - index of the Cards array
 */
function loadSubtasksEditform(i) {
    let subtaskMain = document.getElementById('subtasklist');
    subtaskMain.innerHTML = '';
    for (b = 0; b < cards[i]['subtasks'].length; b++) {
        subtaskMain.innerHTML += `<div class="boxes" id="boxes${b}">• ${cards[i]['subtasks'][b].nameSub}<div class="actionlinks"><a href="#" onclick="editLoadedSubtasks(${i},${b})" class="subTaskEdit"><img src="assets/img/board/edit-icon.svg"></a><a href="#" onclick="deleteEditedSubtasks(${i},${b})" class="subTaskDel"><img src="assets/img/board/trash-icon.svg"></a></div></div>`;
    }
}

/**
 * edit subtasks in form 
 * @param {number} i - index of the Cards array
 * @param {number*} b - index of subtask in Cards JSON
 */
function editLoadedSubtasks(i, b) {
    let editSubtaskInput = document.getElementById(`subtasklist`);
    editSubtaskInput.innerHTML = `<input type="text" id='inputEditTask${b}'><div class="editactionlinks" style="display:none;" id="editsubtaskbtn"><a href="#" onclick="cancelEditedSubtask(${i},${b})" class="subdellink"><img src="assets/img/board/trash-icon.svg"></a><a href="#" onclick="saveEditedSubtask(${i},${b})" class="subedilink"><img src="assets/img/board/check-icon.svg"></a></div>`;
    document.getElementById('editsubtaskbtn').style.display = "flex";
    let editSubtaskInputValue = document.getElementById(`inputEditTask${b}`);
    editSubtaskInputValue.value = `${cards[i]['subtasks'][b].nameSub}`;
}

/**
 * save edited subtasks to card
 * @param {number} i - index of the Cards array 
 * @param {number} b - index of subtask in Cards JSON
 */
function saveEditedSubtask(i, b) {
    document.getElementById('editsubtaskbtn').style.display = "none";
    let editSubtaskInputValue = document.getElementById(`inputEditTask${b}`);
    cards[i]['subtasks'][b].nameSub = editSubtaskInputValue.value;
    loadSubtasksEditform(i);
}

/**
 * open subtask input form
 * @param {number} i - index of subtask in Cards JSON
 */
function openSubtaskInput2(i) {
    let addSubtaskContainer = document.getElementById('addNewSubtask2');
    addSubtaskContainer.innerHTML = "";
    addSubtaskContainer.innerHTML += `
        <input type="text" placeholder="New subtask" id="added_subtask">
        <button class="close-category-input-btn" onclick="cancelSubtaskInput2()">${smallXSVG}</button>
        <svg height="40" width="3">
            <line x1="2" y1="8" x2="2" y2="32" style="stroke:#d1d1d1;stroke-width:2" />
        </svg>
        <button class="add-category-btn" onclick="addSubtask2(${i})">${checkedSmallSVG}</button>
        `;
}

/**
 * cancel edit subtask
 * @param {number} i - index of the Cards array 
 * @param {number} b - index of subtask in Cards JSON
 */
function cancelEditedSubtask(i, b) {
    loadSubtasksEditform(i);
}

/**
 * cancel edit subtask form
 */
function cancelSubtaskInput2() {
    let addSubtaskContainer = document.getElementById('addNewSubtask2');
    addSubtaskContainer.innerHTML = `<p>Add new subtask</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onclick="openSubtaskInput2(${i})">
        <path d="M12.0011 12.0002L12.0018 19.4149M4.58641 12.0008L12.0011 12.0002L4.58641 12.0008ZM19.4159 11.9995L12.0004 11.9995L19.4159 11.9995ZM12.0004 11.9995L12.0005 4.58545L12.0004 11.9995Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
}

/**
 * add new subtask to card in edit card view
 * @param {number} i - index of the Cards array
 */
function addSubtask2(i) {
    let subtaskMain = document.getElementById('subtasklist');
    let addSubtaskContainer = document.getElementById('addNewSubtask2');
    let addedSubtask = document.getElementById('added_subtask').value;
    addSubtaskContainer.innerHTML = `<p>Add new subtask</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onclick="openSubtaskInput2(${i})">
        <path d="M12.0011 12.0002L12.0018 19.4149M4.58641 12.0008L12.0011 12.0002L4.58641 12.0008ZM19.4159 11.9995L12.0004 11.9995L19.4159 11.9995ZM12.0004 11.9995L12.0005 4.58545L12.0004 11.9995Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    subtaskMain.innerHTML += `   <div class="boxes" id="boxes${b}">• ${addedSubtask}<div class="actionlinks"><a href="#" onclick="editLoadedSubtasks(${i},${b})" class="subTaskEdit"><img src="assets/img/board/edit-icon.svg"></a><a href="#" onclick="deleteEditedSubtasks(${i},${b})" class="subTaskDel"><img src="assets/img/board/trash-icon.svg"></a></div></div>`
    cards[i]['subtasks'].push({ nameSub: addedSubtask, status: "unchecked" });
    addedSubtasks.push(addedSubtask);
    window.subtasks = addedSubtasks;
}

/**
 * delete subtask in edit view
 * @param {number} i - index of the Cards array 
 * @param {number} b - index of subtask in Cards JSON
 */
function deleteEditedSubtasks(i, b) {
    cards[i]['subtasks'].splice(b, 1);
    loadSubtasksEditform(i);
}

/**
 * check and uncheck subtask checkbox of card
 */
async function ChangeCheckboxSubtasks(i, j) {
    if (cards[i]['subtasks'][j]['status'] == "checked") {
        cards[i]['subtasks'][j]['status'] = "unchecked";
        cards[i]['progress']--;
    } else {
        if (cards[i]['subtasks'][j]['status'] == "unchecked") {
            cards[i]['subtasks'][j]['status'] = "checked";
            cards[i]['progress']++;
        }
    }
    await saveCardsToStorage();
    renderBoard();
}