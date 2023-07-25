let cards = [
    {
        "category": "Design",
        "title": "Test Title 1",
        "description": 'Test Card 3',
        "progress": "0",
        "assignedUser": [" Paul", " Rita"],
        "prio": "High",
        "listType": "ToDo"
    },
    {
        "category": "Backoffice",
        "title": "Test Title 2",
        "description": 'Test Card 3',
        "progress": "1",
        "assignedUser": ["Sara", " Mike"],
        "prio": "Low",
        "listType": "InProgress"
    },
    {
        "category": "Marketing",
        "title": "Test Title 3",
        "description": 'Test Card 3',
        "progress": "2",
        "assignedUser": ["Klaus", " Paul", " Rita"],
        "prio": "Mid",
        "listType": "AwaitingFeedback"
    },
    {
        "category": "Media",
        "title": "Test Title 4",
        "description": 'Test Card 4',
        "progress": "1",
        "assignedUser": ["Sara", " Paul", " Rita"],
        "prio": "High",
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