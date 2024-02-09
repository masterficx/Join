/**
 * drag and drop function, start dragging element 
 * @param {number} i - index of the Cards array
 */
function startDragging(i) {
    markAllAvailableDropAreas();
    currentDraggedElement = i;
    const cardElement = document.getElementById('card' + i);
    cardElement.classList.add('dragging'); // Füge die Klasse 'dragging' hinzu
}

/**
 * allow elements to drop in area with event
 */
function allowDrop(ev) {
    ev.preventDefault();
}

function markMe(iD) {
    clearAllAvailableDropAreas();
    let container = document.getElementById(iD);
    let containerTitle = document.getElementById(`${iD}Title`);
    let containerImgDiv = document.getElementById(`${iD}ImgDiv`);
    let plusSign = document.getElementById(`${iD}Plus`);
    plusSign.src="assets/img/board/plusDark_white.png";
    containerImgDiv.classList.add('white_border');
    containerTitle.classList.add('white_text');
    container.classList.add('hover_before_drop');
    markAllAvailableDropAreas();
}

function clearAllAvailableDropAreas(){
    removeTwoClassesFromOneId('toDoMain', 'mark_available_drop_area', 'hover_before_drop');
    removeTwoClassesFromOneId('inProgressMain', 'mark_available_drop_area', 'hover_before_drop');
    removeTwoClassesFromOneId('awaitingFeedbackMain', 'mark_available_drop_area', 'hover_before_drop');
    removeTwoClassesFromOneId('doneMain', 'mark_available_drop_area', 'hover_before_drop');
    clearCategoryTitleWhiteText();
}

function markAllAvailableDropAreas() {
    addOneClassToOneId('toDoMain', 'mark_available_drop_area');
    addOneClassToOneId('inProgressMain', 'mark_available_drop_area');
    addOneClassToOneId('awaitingFeedbackMain', 'mark_available_drop_area');
    addOneClassToOneId('doneMain', 'mark_available_drop_area');
}

function clearCategoryTitleWhiteText(){
    if(document.getElementById('toDoMainTitle').classList.contains('white_text')){
        removeOneClassFromOneId('toDoMainTitle', 'white_text');
        removeOneClassFromOneId('toDoMainImgDiv', 'white_border');
        document.getElementById('toDoMainPlus').src="assets/img/board/plusDark.png";
    } else if(document.getElementById('inProgressMainTitle').classList.contains('white_text')){
        removeOneClassFromOneId('inProgressMainTitle', 'white_text');
        removeOneClassFromOneId('inProgressMainImgDiv', 'white_border');
        document.getElementById('inProgressMainPlus').src="assets/img/board/plusDark.png";
    } else if(document.getElementById('awaitingFeedbackMainTitle').classList.contains('white_text')){
        removeOneClassFromOneId('awaitingFeedbackMainTitle', 'white_text');
        removeOneClassFromOneId('awaitingFeedbackMainImgDiv', 'white_border');
        document.getElementById('awaitingFeedbackMainPlus').src="assets/img/board/plusDark.png";
    } else if(document.getElementById('doneMainTitle').classList.contains('white_text')){
        removeOneClassFromOneId('doneMainTitle', 'white_text');
    }     
}

/**
 * set new list type for card after dropped in new column of board
 * @param {string} listType - name of list type
 */
async function moveTo(listType) {
    clearAllAvailableDropAreas();
    getCardsFromStorage();
    cards[currentDraggedElement]['listType'] = listType.slice(9);
    await saveCardsToStorage();
    renderBoard();
}

/**
 * render arrows to transfer cards to next or previous column
 * @param {number} i - index of the Cards array
 */
function renderListTypeArrows(i) {
    if (cards[i].listType == "ToDo") {
        document.getElementById(`svgToLeft${i}`).classList.add('d-none');
    } else {
        if (cards[i].listType == 'Done') {
            document.getElementById(`svgToRight${i}`).classList.add('d-none');
        }
    }
}

/**
 * change list type of card to previous type in board
 * @param {number} i - index of the Cards array
 */
async function listTypeToLeft(i) {
    for (let j = 0; j < listTypes.length; j++) {
        if (cards[i].listType === listTypes[j].name) {
            const nextListTypeIndex = (j - 1) % listTypes.length;
            cards[i].listType = listTypes[nextListTypeIndex].name;
            break;
        }
    }
    event.stopPropagation();
    await saveCardsToStorage();
    renderBoard();
}

/**
 * change list type of card to next type in board
 * @param {number} i - index of the Cards array 
 */
async function listTypeToRight(i) {
    for (let j = 0; j < listTypes.length; j++) {
        if (cards[i].listType === listTypes[j].name) {
            const nextListTypeIndex = (j + 1) % listTypes.length;
            cards[i].listType = listTypes[nextListTypeIndex].name;
            break;
        }
    }
    event.stopPropagation();
    await saveCardsToStorage();
    renderBoard();
}

function addOneClassToOneId(theId, theClass){
    document.getElementById(theId).classList.add(theClass);
}

function removeOneClassFromOneId(theId, theClass){
    document.getElementById(theId).classList.remove(theClass);
}

function removeTwoClassesFromOneId(theId, firstCLass, secondClass){
    document.getElementById(theId).classList.remove(firstCLass);
    document.getElementById(theId).classList.remove(secondClass);
}

document.addEventListener("dragend", (event) => {
    if (!event.target.id == 'toDoMain' || 'inProgressMain' || 'awaitingFeedbackMain' || 'doneMain') {
      clearAllAvailableDropAreas();
      renderBoard();
    }
  });