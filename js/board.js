let cards = [
    {
        "category": "Design",
        "title": "Update Website Mainpage",
        "description": 'Rework the general design and functions for better user experience. Optimize the buttons and links.',
        "progress": 0,
        "assignedUser": [Contacts[1]['firstLetters'], Contacts[2]['firstLetters'], Contacts[5]['firstLetters']],
        "assignedUserFullName": [Contacts[1]['name'], Contacts[2]['name'], Contacts[5]['name']],
        "prio": "High",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "General Design", status: "unchecked" },
            { nameSub: "Functions", status: "unchecked" },
            { nameSub: "Buttons and Links", status: "unchecked" }
        ],
        "listType": "ToDo",
    },
    {
        "category": "Backoffice",
        "title": "Organize Financial Records",
        "description": 'Review and organize financial records, including invoices, receipts, and expense reports, to ensure accurate bookkeeping and easy retrieval for auditing purposes.',
        "progress": 1,
        "assignedUser": [Contacts[3]['firstLetters'], Contacts[4]['firstLetters']],
        "assignedUserFullName": [Contacts[3]['name'], Contacts[4]['name']],
        "prio": "Low",
        "dueDate": "2022-08-14",
        "subtasks": [],
        "listType": "InProgress"
    },
    {
        "category": "Marketing",
        "title": "Review project proposal",
        "description": 'Thoroughly review the project proposal and provide feedback on its feasibility, strategic alignment, and potential impact. Assess the proposed budget, timeline, and resource allocation. Identify any areas of improvement or concerns and communicate them to the project team.',
        "progress": 2,
        "assignedUser": [Contacts[1]['firstLetters'], Contacts[6]['firstLetters']],
        "assignedUserFullName": [Contacts[1]['name'], Contacts[6]['name']],
        "prio": "Mid",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "checked" },
            { nameSub: "Test Subtask 2", status: "checked" }
        ],
        "listType": "Done"
    },
    {
        "category": "Media",
        "title": "Video cut",
        "description": 'Edit latest company video and review further clips',
        "progress": 1,
        "assignedUser": [Contacts[2]['firstLetters'], Contacts[5]['firstLetters']],
        "assignedUserFullName": [Contacts[2]['name'], Contacts[5]['name']],
        "prio": "High",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Edit video", status: "checked" },
            { nameSub: "Review clips", status: "unchecked" },
        ],
        "listType": "Awaitingfeedback"
    },
    {
        "category": "Backoffice",
        "title": "Prepare quarterly report",
        "description": 'Compile financial data and analysis to create a comprehensive quarterly report for the management team. Include key performance indicators, budget analysis, and recommendations for improvement.',
        "progress": 1,
        "assignedUser": [Contacts[1]['firstLetters'], Contacts[4]['firstLetters']],
        "assignedUserFullName": [Contacts[1]['name'], Contacts[4]['name']],
        "prio": "Mid",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Compile Data", status: "checked" },
            { nameSub: "Key performance indicators", status: "unchecked" }
        ],
        "listType": "InProgress"
    },
    {
        "category": "Sales",
        "title": "Call potential clients",
        "description": 'Create product presentation and general portfolio.',
        "progress": 0,
        "assignedUser": [Contacts[2]['firstLetters'], Contacts[5]['firstLetters'], Contacts[1]['firstLetters'], Contacts[3]['firstLetters']],
        "assignedUserFullName": [Contacts[2]['name'], Contacts[5]['name'], Contacts[1]['name'], Contacts[3]['name']],
        "prio": "Mid",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Presentation", status: "unchecked" },
            { nameSub: "Portfolio", status: "unchecked" }
        ],
        "listType": "ToDo"
    },
    {
        "category": "Marketing",
        "title": "Create advertising material for latest product linups",
        "description": 'Create powerpoint presentation as well as flyer for all new products.',
        "progress": 0,
        "assignedUser": [Contacts[4]['firstLetters'], Contacts[5]['firstLetters'], Contacts[6]['firstLetters']],
        "assignedUserFullName": [Contacts[4]['name'], Contacts[5]['name'], Contacts[6]['name']],
        "prio": "Mid",
        "dueDate": "2022-08-14",
        "subtasks": [],
        "listType": "InProgress"
    }
];

let categories = [{
    name: "Sales",
    color: "#FFC701",
    value: "sales",
},
{
    name: "Backoffice",
    color: "#1FD7C1",
    value: "backoffice",
},
{
    name: "Marketing",
    color: "#0038FF",
    value: "marketing",
},
{
    name: "Design",
    color: "#FF7A00",
    value: "design",
},
{
    name: "Media",
    color: "#FF0000",
    value: "media",
},
];

let categoryColors = ['#FFC701', '#1FD7C1', '#0038FF', '#FF7A00', '#FF0000', '#E200BE'];

let listTypes = [{
    name: "ToDo",
    amount: 0,
},
{
    name: "InProgress",
    amount: 0,
},
{
    name: "Awaitingfeedback",
    amount: 0,
},
{
    name: "Done",
    amount: 0,
}
];

let currentDraggedElement;

function renderBoard() {
    clearAllListTypesAmount();
    renderBoardCards();
}

function renderBoardCards() {
    clearBoardCards();
    for (let i = 0; i < cards.length; i++) {
        if (cards[i]['listType'] == 'ToDo') {
            listTypes[0]['amount']++;
            document.getElementById('cardBoardToDo').innerHTML +=
                renderBoardTemplate(i);
            renderBoardFunctionsTemplate(i);
        } else {
            renderBoardCardsInProgress(i)
        };
    } renderNoCardsInCardBoard();
}

function renderBoardCardsInProgress(i) {
    if (cards[i]['listType'] == 'InProgress') {
        listTypes[1]['amount']++;
        document.getElementById('cardBoardInProgress').innerHTML +=
            renderBoardTemplate(i);
        renderBoardFunctionsTemplate(i);
    } else { renderBoardCardsAwaitingFeedback(i) };
}

function renderBoardCardsAwaitingFeedback(i) {
    if (cards[i]['listType'] == 'Awaitingfeedback') {
        listTypes[2]['amount']++;
        document.getElementById('cardBoardAwaitingfeedback').innerHTML +=
            renderBoardTemplate(i);
        renderBoardFunctionsTemplate(i);
    } else { renderBoardCardsDone(i) };
}

function renderBoardCardsDone(i) {
    if (cards[i]['listType'] == 'Done') {
        listTypes[3]['amount']++;
        document.getElementById('cardBoardDone').innerHTML +=
            renderBoardTemplate(i);
    } else { };
    renderBoardFunctionsTemplate(i);
}

function renderBoardTemplate(i) {
    return `<div class="cardBoard" draggable="true" ondragstart="startDragging(${i})" onclick='openCard(${i})'>
    <div class="cardBoardInside">
        <div class="cardBoardInsideCategory"; id="cardBoardInsideCategory${i}">${cards[i]['category']}</div>
        <div class="cardBoardInsideTitleAndDescrption">
            <div class="cardBoardInsideTitle">${cards[i]['title']}</div>
            <div class="cardBoardInsideDescription">${cards[i]['description']}</div>
        </div>
        <div class="cardBoardInsideProgress" id="cardBoardInsideProgress${i}"><div class="progressBar"><div class="progress" id="progressBar${i}"></div></div>
        <div><p>${cards[i]['progress']}/${cards[i]['subtasks'].length} Done</p></div>
        </div>
        <div class="cardBoardInsideUserAndPrio">
        <div class="InsideUser" id="InsideUser${i}"></div><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
        </div>
    </div>
</div>`;
}

function renderBoardFunctionsTemplate(i) {
    renderProgressBar(i);
    renderAssignedUserInBoard(i);
    renderBackgroundColorCategory(i);
}

function renderBackgroundColorCategory(i) {
    let cat = cards[i]['category'];
    let catClass = document.getElementById(`cardBoardInsideCategory${i}`);
    for (let k = 0; k < categories.length; k++) {
        if (cat == categories[k]['name']) {
            catClass.style['background-color'] = categories[k]['color'];
        } else { }
    };
}

function renderProgressBar(i) {
    let progressValue = cards[i]['progress'] * 100 / cards[i]['subtasks'].length;
    let progressBar = document.getElementById(`progressBar${i}`);
    if (cards[i]['subtasks'].length == 0) {
        document.getElementById(`cardBoardInsideProgress${i}`).classList.add("d-none");
    } else {
        progressBar.style.width = progressValue + '%';
    }
}

function renderAssignedUserInBoard(i) {
    for (let j = 0; j < cards[i]['assignedUser'].length; j++) {
        document.getElementById(`InsideUser${i}`).innerHTML += `
            <div class="label-card" style="background-color:${findUserColor(i, j)}">${cards[i]['assignedUser'][j]}</div>
            `;
    }
}

function renderAssignedUserFullName(i) {
    for (let j = 0; j < cards[i]['assignedUserFullName'].length; j++) {
        document.getElementById(`InsideUserFullName${i}`).innerHTML += `
            <div class="label-name">${cards[i]['assignedUserFullName'][j]}</div>
            `;
    }
}

function findUserColor(i, j) {
    for (let k = 0; k < Contacts.length; k++) {
        if (Contacts[k]['name'] == cards[i]['assignedUserFullName'][j]) {
            return `${Contacts[k]['color']}`;
        } else { }
    }
}

function clearAllListTypesAmount() {
    for (let k = 0; k < listTypes.length; k++) {
        listTypes[k]['amount'] = 0;
    }
}

function renderNoCardsInCardBoard() {
    for (let k = 0; k < listTypes.length; k++) {
        if (listTypes[k]['amount'] == 0) {
            document.getElementById(`cardBoard${listTypes[k]['name']}`).innerHTML += `
            <div class="NoCardsInBoardPlaceholder">No tasks in ${listTypes[k]['name']}</div>
            `;
        } else { }
    }
}

function clearBoardCards() {
    document.getElementById('cardBoardToDo').innerHTML = '';
    document.getElementById('cardBoardInProgress').innerHTML = '';
    document.getElementById('cardBoardAwaitingfeedback').innerHTML = '';
    document.getElementById('cardBoardDone').innerHTML = '';
}


function openAddTask() {
    document.getElementById('CardContainer').style = "display:block;";
    document.getElementById('overlay').classList.remove('d-none');
    renderAddTask();
}


function renderAddTask() {
    document.getElementById('CardContainer').innerHTML = `
    <div class="includeTaskForm" w3-include-html="templates/task_form.html">
    `;
    includeTemplates();
}

function closeOverlay() {
    document.getElementById('overlay').classList.add('d-none');
    document.getElementById('CardContainer').style = "display:none;";
    document.getElementById('CardContainer').innerHTML = "";
    document.getElementById('CardDetail').style = "display:none;";
    document.getElementById('CardEditForm').style = "display:none;";
    renderBoardCards();
}

function doNotClose(event) {
    event.stopPropagation();
}

function filterCards() {
    const query = document.getElementById("inputSearchBoard").value.toLowerCase();
    const cards = document.querySelectorAll(".cardBoard");

    cards.forEach((card) => {
        const title = card.querySelector(".cardBoardInsideTitle").innerHTML.toLowerCase();
        const description = card.querySelector(".cardBoardInsideDescription").innerHTML.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}



function openCard(i) {
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('CardDetail').style = "display:block;";
    let cardDetailCat = document.getElementById('cardDetailCat');
    let cardDetailTitle = document.getElementById('cardDetailTitle');
    let cardDetailDesc = document.getElementById('cardDetailDesc');
    let cardDetailDueDate = document.getElementById('cardDetailDueDate');
    let cardDetailPrio = document.getElementById('cardDetailPrio');
    let cardDetailAssignedUser = document.getElementById('cardDetailAssignedUser');
    let cardDetailDelete = document.getElementById('deleteCard');
    let cardDetailEdit = document.getElementById('editCard');
    cardDetailCat.innerHTML = `<div class="cardBoardInsideCategory" id="cardBoardInsideCategoryDetail${i}">${cards[i]['category']}</div>`;
    cardDetailTitle.innerHTML = `${cards[i]['title']}`;
    cardDetailDesc.innerHTML = `${cards[i]['description']}`;
    cardDetailDueDate.innerHTML = `<span class="detlabel">Due date:</span>${cards[i]['dueDate']}`;
    cardDetailPrio.innerHTML = `<span class="detlabel">Priority:</span><div id="priobtndetail">${cards[i]['prio']}<img id="prioImg" src=""></div>`;
    cardDetailAssignedUser.innerHTML = `<div class="cardBoardInsideUserAndPrio FullNameSplit"><div class="InsideUser" id="InsideUserDetail${i}"></div><div id=InsideUserFullName${i}></div></div><div class="cardDetailSubtasksAll"><div class="detlabel" id="SubtaskHeader${i}">Subtasks:</div><div class="cardDetailSubTasks" id="cardDetailSubTasks${i}"></div></div>`;
    cardDetailDelete.innerHTML = `<div onclick='deleteCard(${[i]})'><img src="assets/img/board/delete.svg" class="default"><img src="assets/img/board/delete-blue.svg" class="hover">`;
    cardDetailEdit.innerHTML = `<div onclick='editCard(${[i]})'><img src="assets/img/board/edit.svg">`;
    renderBackgroundColorCategoryDetail(i);
    renderAssignedUserInBoardDetail(i);
    renderAssignedUserFullName(i);
    renderSubtasksInBoardDetail(i);
    prioButtonStyle(i);
}


function renderBackgroundColorCategoryDetail(i) {
    let cat = cards[i]['category'];
    let catClassDet = document.getElementById(`cardBoardInsideCategoryDetail${i}`);
    for (let k = 0; k < categories.length; k++) {
        if (cat == categories[k]['name']) {
            catClassDet.style['background-color'] = categories[k]['color'];
        } else { }
    };
}


function renderAssignedUserInBoardDetail(i) {
    for (let j = 0; j < cards[i]['assignedUser'].length; j++) {
        document.getElementById(`InsideUserDetail${i}`).innerHTML += `
            <div class="label-card" style="background-color:${findUserColor(i, j)}">${cards[i]['assignedUser'][j]}</div>
            `;
    }
}

function renderSubtasksInBoardDetail(i) {
    if (cards[i]['subtasks'].length > 0) {
        for (let j = 0; j < cards[i]['subtasks'].length; j++) {
            document.getElementById(`cardDetailSubTasks${i}`).innerHTML += `
                <div id="SubTaskHead${j}" class="subtaskAndCheckbox"><input class="SubTaskCheckbox" id="SubTaskCheckbox${i}${j}" ${cards[i]['subtasks'][j]['status']} type="checkbox" onclick="ChangeCheckboxSubtasks(${i},${j})"><div class="label-subtask">${cards[i]['subtasks'][j]['nameSub']}</div></div>
                `;
        }
    } else {
        subHead = document.getElementById(`SubtaskHeader${i}`);
        subHead.classList.add('d-none');
    }
}

function ChangeCheckboxSubtasks(i,j) {
    if (cards[i]['subtasks'][j]['status'] == "checked") {
        cards[i]['subtasks'][j]['status'] = "unchecked";
        cards[i]['progress']--;
    } else {
        if (cards[i]['subtasks'][j]['status'] == "unchecked") {
            cards[i]['subtasks'][j]['status'] = "checked";
            cards[i]['progress']++;
        }
    }
    renderBoard();
}

function prioButtonStyle(i) {
    let prioBtnDetail = document.getElementById('priobtndetail');
    let prioBtnDetailImg = document.getElementById('prioImg');
    for (y = 0; y < cards.length; y++) {
        prioBtnDetail.classList.remove('prio-high-btn');
        prioBtnDetail.classList.remove('prio-med-btn');
        prioBtnDetail.classList.remove('prio-low-btn');
        prioBtnDetailImg.src = "";
    };
    if (cards[i]['prio'] == "High") {
        prioBtnDetail.classList.add('prio-high-btn');
        prioBtnDetailImg.src = "assets/img/addtask/prio-high-w.svg";

    } else
        if (cards[i]['prio'] == "Medium" || cards[i]['prio'] == "Mid") {
            prioBtnDetail.classList.add('prio-med-btn');
            prioBtnDetailImg.src = "assets/img/addtask/prio-medium-w.svg";
        } else
            if (cards[i]['prio'] == "Low") {
                prioBtnDetail.classList.add('prio-low-btn');
                prioBtnDetailImg.src = "assets/img/addtask/prio-low-w.svg";
            }
}

function deleteCard(i) {
    console.log('deleted', i);
    cards.splice(i, 1);
    closeOverlay();
}

function editCard(i) {
    console.log('edited', i);
    document.getElementById('CardDetail').style = "display:none;";
    document.getElementById('CardEditForm').style = "display:block;";
    document.getElementById('editCardTitle').value = `${cards[i]['title']}`;
    document.getElementById('editCardDescription').value = `${cards[i]['description']}`;
    document.getElementById('editCardDueDate').value = `${cards[i]['dueDate']}`;
    document.getElementById('editCardPrio2').innerHTML = `
    <div class="addTaskPrios" id="prioButtons2">
                                    <button class="SubTaskPrios2 red" id="prioSelect0" onclick="addActiveState2(0)">Urgent<img
                                            src="/assets/img/addtask/prio-high.svg" alt="" class="default"><img
                                            src="/assets/img/addtask/prio-high-w.svg" alt="" class="active"></button>
                                    <button class="SubTaskPrios2 yellow" id="prioSelect1" onclick="addActiveState2(1)">Medium<img
                                        src="/assets/img/addtask/prio-medium.svg" alt="" class="default"><img
                                        src="/assets/img/addtask/prio-medium-w.svg" alt="" class="active"></button>
                                    <button class="SubTaskPrios2 green" id="prioSelect2" onclick="addActiveState2(2)">Low<img
                                        src="/assets/img/addtask/prio-low.svg" alt="" class="default"><img
                                        src="/assets/img/addtask/prio-low-w.svg" alt="" class="active"></button>
                                </div>`;
    document.getElementById('editCardAssignedTo').value = `${cards[i]['assignedUser']}`;
    let editCardSave = document.getElementById('editCardSave');
    editCardSave.innerHTML = `<div onclick='saveEditedCard(${[i]})'>Ok`;
    loadActiveStatePrio(i);
}

function loadActiveStatePrio(i) {
    let currentPrioSelection = cards[i]['prio'];
    if (currentPrioSelection == "High") {
        let prioSelect0 = document.getElementById('prioSelect0');
        prioSelect0.classList.add('active-state');
    } else
        if (currentPrioSelection == "Mid" || currentPrioSelection == "Medium") {
            let prioSelect1 = document.getElementById('prioSelect1');
            prioSelect1.classList.add('active-state');
        } else
            if (currentPrioSelection == "Low") {
                let prioSelect2 = document.getElementById('prioSelect2');
                prioSelect2.classList.add('active-state');
            }
    console.log(currentPrioSelection);
}

function addActiveState2(j) {
    let btnsTip = document.getElementById('prioButtons2').getElementsByClassName('SubTaskPrios2');
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
    prioValueForSaving(j);
}

let prioValue;
function prioValueForSaving(h) {
    if (h == 0) {
        prioValue = "High";
    } else
        if (h == 1) {
            prioValue = "Mid";
        } else
            if (h == 2) {
                prioValue = "Low";
            }
    console.log(prioValue);
}

function saveEditedCard(i) {
    cards[i]['title'] = document.getElementById('editCardTitle').value;
    cards[i]['description'] = document.getElementById('editCardDescription').value;
    cards[i]['dueDate'] = document.getElementById('editCardDueDate').value;
    cards[i]['prio'] = prioValue;
    cards[i]['assignedUser'] = document.getElementById('editCardAssignedTo').value;
    cards.push();
    openCard(i);
    document.getElementById('CardEditForm').style = "display:none;";
}

function startDragging(i) {
    currentDraggedElement = i;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(listType) {
    cards[currentDraggedElement]['listType'] = listType.slice(9);
    renderBoard();
}