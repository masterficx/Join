let cards = [
    {
        "category": "Design",
        "title": "Update Website Mainpage",
        "description": 'Rework the general design and functions for better user experience. Optimize the buttons and links.',
        "progress": "0",
        "assignedUser": [Contacts[0]['firstLetters'], Contacts[1]['firstLetters'], Contacts[4]['firstLetters']],
        "prio": "High",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "General Design", status: "Awaitingfeedback" },
            { nameSub: "Functions", status: "InProgress" },
            { nameSub: "Buttons and Links", status: "InProgress" }
        ],
        "listType": "ToDo",
    },
    {
        "category": "Backoffice",
        "title": "Organize Financial Records",
        "description": 'Review and organize financial records, including invoices, receipts, and expense reports, to ensure accurate bookkeeping and easy retrieval for auditing purposes.',
        "progress": "1",
        "assignedUser": [Contacts[3]['firstLetters'], Contacts[4]['firstLetters']],
        "prio": "Low",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Invoices, receipts, expense reports", status: "Awaitingfeedback" },
            { nameSub: "General bookkeeping", status: "InProgress" }
        ],
        "listType": "InProgress"
    },
    {
        "category": "Marketing",
        "title": "Review project proposal",
        "description": 'Thoroughly review the project proposal and provide feedback on its feasibility, strategic alignment, and potential impact. Assess the proposed budget, timeline, and resource allocation. Identify any areas of improvement or concerns and communicate them to the project team.',
        "progress": "2",
        "assignedUser": [Contacts[0]['firstLetters']],
        "prio": "Mid",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "Awaitingfeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" }
        ],
        "listType": "Done"
    },
    {
        "category": "Media",
        "title": "Video cut",
        "description": 'Edit latest company video and review further clips',
        "progress": "1",
        "assignedUser": [Contacts[3]['firstLetters'], Contacts[5]['firstLetters']],
        "prio": "High",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Edit video", status: "Awaitingfeedback" },
            { nameSub: "Review clips", status: "InProgress" },
        ],
        "listType": "Awaitingfeedback"
    },
    {
        "category": "Backoffice",
        "title": "Prepare quarterly report",
        "description": 'Compile financial data and analysis to create a comprehensive quarterly report for the management team. Include key performance indicators, budget analysis, and recommendations for improvement.',
        "progress": "1",
        "assignedUser": [Contacts[2]['firstLetters'], Contacts[4]['firstLetters']],
        "prio": "Mid",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Compile Data", status: "AwaitingFeedback" },
            { nameSub: "Key performance indicators", status: "InProgress" }
        ],
        "listType": "InProgress"
    },
    {
        "category": "Sales",
        "title": "Call potential clients",
        "description": 'Create product presentation and general portfolio.',
        "progress": "0",
        "assignedUser": [Contacts[2]['firstLetters'], Contacts[4]['firstLetters']],
        "prio": "Mid",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Presentation", status: "AwaitingFeedback" },
            { nameSub: "Portfolio", status: "InProgress" }
        ],
        "listType": "ToDo"
    }
];

let categories = [{
    name: "Sales",
    color: "#FFC701",
},
{
    name: "Backoffice",
    color: "#1FD7C1",
},
{
    name: "Marketing",
    color: "#0038FF",
},
{
    name: "Design",
    color: "#FF7A00",
},
{
    name: "Media",
    color: "#FF0000",
},
];

let currentDraggedElement;

function renderBoard() {
    renderBoardCards();
}

function renderBoardCards() {
    clearBoardCards();
    for (let i = 0; i < cards.length; i++) {
        if (cards[i]['listType'] == 'ToDo') {
            document.getElementById('cardBoardToDo').innerHTML += `
            <div class="cardBoard" draggable="true" ondragstart="startDragging(${i})" onclick='openCard(${i})'>
            <div class="cardBoardInside">
                <div class="cardBoardInsideCategory" id="cardBoardInsideCategory${i}">${cards[i]['category']}</div>
                <div class="cardBoardInsideTitleAndDescrption">
                    <div class="cardBoardInsideTitle">${cards[i]['title']}</div>
                    <div class="cardBoardInsideDescription">${cards[i]['description']}</div>
                </div>
                <div class="cardBoardInsideProgress"><div class="progressBar"><div class="progress" id="progressBar${i}"></div></div>
                    <div><p>${cards[i]['progress']}/${cards[i]['subtasks'].length} Done</p></div>
                </div>
                <div class="cardBoardInsideUserAndPrio">
                    <div class="InsideUser" id="InsideUser${i}"></div><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
                </div>
            </div>
        </div>`;
            renderProgressBar(i);
            renderAssignedUserInBoard(i);
            renderBackgroundColorCategory(i);
        } else { renderBoardCardsInProgress(i) };
    }
}

function renderBoardCardsInProgress(i) {
    if (cards[i]['listType'] == 'InProgress') {
        document.getElementById('cardBoardInProgress').innerHTML += `
        <div class="cardBoard" draggable="true" ondragstart="startDragging(${i})" onclick='openCard(${i})'>
        <div class="cardBoardInside">
            <div class="cardBoardInsideCategory" id="cardBoardInsideCategory${i}">${cards[i]['category']}</div>
            <div class="cardBoardInsideTitleAndDescrption">
                <div class="cardBoardInsideTitle">${cards[i]['title']}</div>
                <div class="cardBoardInsideDescription">${cards[i]['description']}</div>
            </div>
            <div class="cardBoardInsideProgress"><div class="progressBar"><div class="progress" id="progressBar${i}"></div></div>
            <div><p>${cards[i]['progress']}/${cards[i]['subtasks'].length} Done</p></div>
            </div>
            <div class="cardBoardInsideUserAndPrio">
            <div class="InsideUser" id="InsideUser${i}"></div><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
            </div>
        </div>
    </div>`;
        renderProgressBar(i);
        renderAssignedUserInBoard(i);
        renderBackgroundColorCategory(i);
    } else { renderBoardCardsAwaitingFeedback(i) };
}

function renderBoardCardsAwaitingFeedback(i) {
    if (cards[i]['listType'] == 'Awaitingfeedback') {
        document.getElementById('cardBoardAwaitingfeedback').innerHTML += `
        <div class="cardBoard" draggable="true" ondragstart="startDragging(${i})" onclick='openCard(${i})'>
        <div class="cardBoardInside">
            <div class="cardBoardInsideCategory" id="cardBoardInsideCategory${i}">${cards[i]['category']}</div>
            <div class="cardBoardInsideTitleAndDescrption">
                <div class="cardBoardInsideTitle">${cards[i]['title']}</div>
                <div class="cardBoardInsideDescription">${cards[i]['description']}</div>
            </div>
            <div class="cardBoardInsideProgress"><div class="progressBar"><div class="progress" id="progressBar${i}"></div></div>
            <div><p>${cards[i]['progress']}/${cards[i]['subtasks'].length} Done</p></div>
            </div>
            <div class="cardBoardInsideUserAndPrio">
            <div class="InsideUser" id="InsideUser${i}"></div><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
            </div>
        </div>
    </div>`;
        renderProgressBar(i);
        renderAssignedUserInBoard(i);
        renderBackgroundColorCategory(i);
    } else { renderBoardCardsDone(i) };
}

function renderBoardCardsDone(i) {
    if (cards[i]['listType'] == 'Done') {
        document.getElementById('cardBoardDone').innerHTML += `
        <div class="cardBoard" draggable="true" ondragstart="startDragging(${i})" onclick='openCard(${i})'>
        <div class="cardBoardInside">
            <div class="cardBoardInsideCategory"; id="cardBoardInsideCategory${i}">${cards[i]['category']}</div>
            <div class="cardBoardInsideTitleAndDescrption">
                <div class="cardBoardInsideTitle">${cards[i]['title']}</div>
                <div class="cardBoardInsideDescription">${cards[i]['description']}</div>
            </div>
            <div class="cardBoardInsideProgress"><div class="progressBar"><div class="progress" id="progressBar${i}"></div></div>
            <div><p>${cards[i]['progress']}/${cards[i]['subtasks'].length} Done</p></div>
            </div>
            <div class="cardBoardInsideUserAndPrio">
            <div class="InsideUser" id="InsideUser${i}"></div><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
            </div>
        </div>
    </div>`;
        renderProgressBar(i);
        renderAssignedUserInBoard(i);
        renderBackgroundColorCategory(i);
    } else { };
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
    progressBar.style.width = progressValue + '%';
}

function renderAssignedUserInBoard(i) {
    for (let j = 0; j < cards[i]['assignedUser'].length; j++) {
        document.getElementById(`InsideUser${i}`).innerHTML += `
            <div class="label-card" style="background-color:${findUserColor(i, j)}">${cards[i]['assignedUser'][j]}</div>
            `;
    }
}

function findUserColor(i, j) {
    for (let k = 0; k < Contacts.length; k++) {
        if (Contacts[k]['firstLetters'] == cards[i]['assignedUser'][j]) {
            return `${Contacts[k]['color']}`;
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
    renderBackgroundColorCategory();

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
    cardDetailCat.innerHTML = `${cards[i]['category']}`;
    let cardDetailTitle = document.getElementById('cardDetailTitle');
    cardDetailTitle.innerHTML = `${cards[i]['title']}`;
    let cardDetailDesc = document.getElementById('cardDetailDesc');
    cardDetailDesc.innerHTML = `${cards[i]['description']}`;
    let cardDetailDueDate = document.getElementById('cardDetailDueDate');
    cardDetailDueDate.innerHTML = `<span class="detlabel">Due date:</span>${cards[i]['dueDate']}`;
    let cardDetailPrio = document.getElementById('cardDetailPrio');
    cardDetailPrio.innerHTML = `<span class="detlabel">Priority:</span>${cards[i]['prio']}`;
    let cardDetailAssignedUser = document.getElementById('cardDetailAssignedUser');
    cardDetailAssignedUser.innerHTML = `${cards[i]['assignedUser']}`;
    let cardDetailDelete = document.getElementById('deleteCard');
    cardDetailDelete.innerHTML = `<div onclick='deleteCard(${[i]})'><img src="assets/img/board/delete.svg" class="default"><img src="assets/img/board/delete-blue.svg" class="hover">`;
    let cardDetailEdit = document.getElementById('editCard');
    cardDetailEdit.innerHTML = `<div onclick='editCard(${[i]})'><img src="assets/img/board/edit.svg">`;
}


function deleteCard(i) {
    console.log('deleted', i);
}

function editCard(i) {
    console.log('edited', i);
    document.getElementById('CardDetail').style = "display:none;";
    document.getElementById('CardEditForm').style = "display:block;";
    document.getElementById('editCardTitle').value = `${cards[i]['title']}`;
    document.getElementById('editCardDescription').value = `${cards[i]['description']}`;
    document.getElementById('editCardDueDate').value = `${cards[i]['dueDate']}`;
    document.getElementById('editCardPrio').value = `${cards[i]['prio']}`;
    document.getElementById('editCardAssignedTo').value = `${cards[i]['assignedUser']}`;
    let editCardSave = document.getElementById('editCardSave');
    editCardSave.innerHTML = `<div onclick='saveEditedCard(${[i]})'>Ok`;
}

function saveEditedCard(i) {
    cards[i]['title'] = document.getElementById('editCardTitle').value;
    cards[i]['description'] = document.getElementById('editCardDescription').value;
    cards[i]['dueDate'] = document.getElementById('editCardDueDate').value;
    cards[i]['prio'] = document.getElementById('editCardPrio').value;
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


