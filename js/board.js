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
            { name: "Test Subtask 1", status: "AwaitingFeedback"},
            { name: "Test Subtask 2", status: "InProgress"}
        ],
        "listType": "ToDo"
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
            { name: "Test Subtask 1", status: "AwaitingFeedback"},
            { name: "Test Subtask 2", status: "InProgress"}
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
            { name: "Test Subtask 1", status: "AwaitingFeedback"},
            { name: "Test Subtask 2", status: "InProgress"}
        ],
        "listType": "AwaitingFeedback"
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
            { name: "Test Subtask 1", status: "AwaitingFeedback"},
            { name: "Test Subtask 2", status: "InProgress"}
        ],
        "listType": "AwaitingFeedback"
    }
]

function renderBoardCards() {
    let cardIndex = 0;
    clearBoardCards();
    for (let i = 0; i < cards.length; i++) {
        if (cards[i]['listType'] = 'ToDo') {
            document.getElementById('cardBoardToDo').innerHTML += `
            <div class="cardBoard">
            <div class="cardBoardInside">
                <div class="cardBoardInsideCategory">${cards[i]['category']}</div>
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

        } else {

        };




        const element = cards[i];

    }
}

function clearBoardCards() {
    document.getElementById('cardBoardToDo').innerHTML = '';
    document.getElementById('cardBoardInProgress').innerHTML = '';
    document.getElementById('cardBoardAwaitingfeedback').innerHTML = '';
    document.getElementById('cardBoardDone').innerHTML = '';
}


function openAddTask() {
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('mainBoard').classList.add('d-none');
    renderAddTask();
}


function renderAddTask() {
    document.getElementById('CardContainer').innerHTML =`
    <div class="includeTaskForm" w3-include-html="templates/task_form.html">
    `;
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