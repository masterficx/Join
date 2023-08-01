let cards = [
    {
        "category": "Design",
        "title": "Test Title 1",
        "description": 'Test Card 3',
        "progress": "0",
        "assignedUser": [Contacts[0]['firstName'] + Contacts[0]['lastName'], Contacts[1]['firstName'] + Contacts[1]['lastName'], Contacts[4]['firstName'] + Contacts[4]['lastName']],
        "prio": "High",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "Awaitingfeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" },
            { nameSub: "Test Subtask 3", status: "InProgress" }
        ],
        "listType": "ToDo",
    },
    {
        "category": "Backoffice",
        "title": "Test Title 2",
        "description": 'Test Card 3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporinvidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sitamet.',
        "progress": "1",
        "assignedUser": [Contacts[3]['firstName'] + Contacts[3]['lastName'], Contacts[4]['firstName'] + Contacts[4]['lastName']],
        "prio": "Low",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "Awaitingfeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" }
        ],
        "listType": "InProgress"
    },
    {
        "category": "Marketing",
        "title": "Test Title 3",
        "description": 'Test Card 3',
        "progress": "2",
        "assignedUser": [Contacts[0]['firstName'].charAt(0) + Contacts[0]['lastName'].charAt(0)], 
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
        "title": "Test Title 4",
        "description": 'Test Card 4',
        "progress": "1",
        "assignedUser": [Contacts[3]['firstName'] + Contacts[3]['lastName'], Contacts[5]['firstName'] + Contacts[5]['lastName']],
        "prio": "High",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "Awaitingfeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" },
            { nameSub: "Test Subtask 3", status: "InProgress" }
        ],
        "listType": "Awaitingfeedback"
    },
    {
        "category": "Media",
        "title": "Test Title 5",
        "description": 'Test Card 5',
        "progress": "1",
        "assignedUser": [Contacts[2]['firstName'] + Contacts[2]['lastName'], Contacts[4]['firstName'] + Contacts[4]['lastName']],
        "prio": "Mid",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "AwaitingFeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" }
        ],
        "listType": "InProgress"
    }
];

let categories = [{
    name: "Sales",
    color: "#FC71FF",
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
    setTimeout(renderBackgroundColorCategory(), 500);
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
                    <div class="InsideUser">${cards[i]['assignedUser']}</div><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
                </div>
            </div>
        </div>`;
        renderProgressBar(i);
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
            <div class="InsideUser">${cards[i]['assignedUser']}</div><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
            </div>
        </div>
    </div>`;
    renderProgressBar(i);
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
            <div class="InsideUser">${cards[i]['assignedUser']}</div><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
            </div>
        </div>
    </div>`;
    renderProgressBar(i);
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
            <div id="InsideUser"></div><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
            </div>
        </div>
    </div>`;
    renderProgressBar(i);
    renderAssignedUserInBoard(i);
    } else { };
}

function renderBackgroundColorCategory() {
    for (let j = 0; j < cards.length; j++) {
        let cat = cards[j]['category'];
        let catClass = document.getElementById(`cardBoardInsideCategory${j}`);
        for (let k = 0; k < categories.length; k++) {
            if (cat == categories[k]['name']) {
                catClass.style['background-color'] = categories[j]['color'];
            } else { };
        };
    };
}

function renderProgressBar(i) {
    let progressValue = cards[i]['progress']*100/cards[i]['subtasks'].length;
    let progressBar = document.getElementById(`progressBar${i}`);
    progressBar.style.width = progressValue + '%';
}

function renderAssignedUserInBoard(i) {
    	for (let j = 0; j < cards[i]['assignedUser'].length; j++) {
            document.getElementById('InsideUser').innerHTML += `
            <div class="label-card" style="background-color:#FF5C00">${cards[i]['assignedUser']}</div>
            `;
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
    cardDetailDelete.innerHTML = `<div onclick='deleteCard(${[i]})'>Delete`;
    let cardDetailEdit = document.getElementById('editCard');
    cardDetailEdit.innerHTML = `<div onclick='editCard(${[i]})'>Edit`;
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

function saveEditedCard(i){
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
