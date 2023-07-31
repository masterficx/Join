
function addTaskToBoard(){
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


