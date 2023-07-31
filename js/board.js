let cards = [
    {
        "category": "Design",
        "title": "Test Title 1",
        "description": 'Test Card 3',
        "progress": "0",
        "assignedUser": [" Paul", " Rita"],
        "prio": "High",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "AwaitingFeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" }
        ],
        "listType": "ToDo",
    },
    {
        "category": "Backoffice",
        "title": "Test Title 2",
        "description": 'Test Card 3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporinvidunt utlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duodolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sitamet.',
        "progress": "1",
        "assignedUser": ["Sara", " Mike"],
        "prio": "Low",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "AwaitingFeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" }
        ],
        "listType": "InProgress"
    },
    {
        "category": "Marketing",
        "title": "Test Title 3",
        "description": 'Test Card 3',
        "progress": "2",
        "assignedUser": ["Klaus", " Paul", " Rita"],
        "prio": "Mid",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "AwaitingFeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" }
        ],
        "listType": "Done"
    },
    {
        "category": "Media",
        "title": "Test Title 4",
        "description": 'Test Card 4',
        "progress": "1",
        "assignedUser": ["Klaus", " Rita"],
        "prio": "High",
        "dueDate": "2022-08-14",
        "subtasks": [
            { nameSub: "Test Subtask 1", status: "AwaitingFeedback" },
            { nameSub: "Test Subtask 2", status: "InProgress" }
        ],
        "listType": "AwaitingFeedback"
    },
    {
        "category": "Media",
        "title": "Test Title 5",
        "description": 'Test Card 5',
        "progress": "1",
        "assignedUser": [" Rita"],
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

function renderBoardCards() {
    let cardIndex = 0;
    clearBoardCards();
    for (let i = 0; i < cards.length; i++) {
        if (cards[i]['listType'] == 'ToDo') {
            document.getElementById('cardBoardToDo').innerHTML += `
            <div class="cardBoard" onclick='openCard(${i})'>
            <div class="cardBoardInside">
                <div class="cardBoardInsideCategory" id="cardBoardInsideCategory${i}">${cards[i]['category']}</div>
                <div class="cardBoardInsideTitleAndDescrption">
                    <div class="cardBoardInsideTitle">${cards[i]['title']}</div>
                    <div class="cardBoardInsideDescription">${cards[i]['description']}</div>
                </div>
                <div class="cardBoardInsideProgress"><img src="/assets/img/board/loadingBar.png"
                        alt="">
                    <p>${cards[i]['progress']}/2 Done</p>
                </div>
                <div class="cardBoardInsideUserAndPrio">
                    <p>${cards[i]['assignedUser']}</p><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
                </div>
            </div>
        </div>`;
        } else { renderBoardCardsInProgress(i) };
    }
}

function renderBoardCardsInProgress(i) {
    if (cards[i]['listType'] == 'InProgress') {
        document.getElementById('cardBoardInProgress').innerHTML += `
        <div class="cardBoard" onclick='openCard(${i})'>
        <div class="cardBoardInside">
            <div class="cardBoardInsideCategory" id="cardBoardInsideCategory${i}">${cards[i]['category']}</div>
            <div class="cardBoardInsideTitleAndDescrption">
                <div class="cardBoardInsideTitle">${cards[i]['title']}</div>
                <div class="cardBoardInsideDescription">${cards[i]['description']}</div>
            </div>
            <div class="cardBoardInsideProgress"><img src="/assets/img/board/loadingBar.png"
                    alt="">
                <p>${cards[i]['progress']}/2 Done</p>
            </div>
            <div class="cardBoardInsideUserAndPrio">
                <p>${cards[i]['assignedUser']}</p><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
            </div>
        </div>
    </div>`;
    } else { renderBoardCardsAwaitingFeedback(i) };

}

function renderBoardCardsAwaitingFeedback(i) {
    if (cards[i]['listType'] == 'AwaitingFeedback') {
        document.getElementById('cardBoardAwaitingfeedback').innerHTML += `
        <div class="cardBoard" onclick='openCard(${i})'>
        <div class="cardBoardInside">
            <div class="cardBoardInsideCategory" id="cardBoardInsideCategory${i}">${cards[i]['category']}</div>
            <div class="cardBoardInsideTitleAndDescrption">
                <div class="cardBoardInsideTitle">${cards[i]['title']}</div>
                <div class="cardBoardInsideDescription">${cards[i]['description']}</div>
            </div>
            <div class="cardBoardInsideProgress"><img src="/assets/img/board/loadingBar.png"
                    alt="">
                <p>${cards[i]['progress']}/2 Done</p>
            </div>
            <div class="cardBoardInsideUserAndPrio">
                <p>${cards[i]['assignedUser']}</p><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
            </div>
        </div>
    </div>`;
    } else {renderBoardCardsDone(i) };
}

function renderBoardCardsDone(i) {
    if (cards[i]['listType'] == 'Done') {
        document.getElementById('cardBoardDone').innerHTML += `
        <div class="cardBoard" onclick='openCard(${i})'>
        <div class="cardBoardInside">
            <div class="cardBoardInsideCategory"; id="cardBoardInsideCategory${i}">${cards[i]['category']}</div>
            <div class="cardBoardInsideTitleAndDescrption">
                <div class="cardBoardInsideTitle">${cards[i]['title']}</div>
                <div class="cardBoardInsideDescription">${cards[i]['description']}</div>
            </div>
            <div class="cardBoardInsideProgress"><img src="/assets/img/board/loadingBar.png"
                    alt="">
                <p>${cards[i]['progress']}/2 Done</p>
            </div>
            <div class="cardBoardInsideUserAndPrio">
                <p>${cards[i]['assignedUser']}</p><img src="/assets/img/board/${cards[i]['prio']}.svg" alt="">
            </div>
        </div>
    </div>`;
    } else {};
    renderBackgroundColorCategory(i);
}

function renderBackgroundColorCategory(i) {
    for (let j = 0; j < categories.length; j++) {
        let cat = document.getElementById(`cardBoardInsideCategory${i}`).innerHTML;
        let catClass = document.getElementById(`cardBoardInsideCategory${i}`);
        if (cat == categories[j]['name']) {
            catClass.classList.style['background-color'] = categories[j]['color'];
        } else {};
    };
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