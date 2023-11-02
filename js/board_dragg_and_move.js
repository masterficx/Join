/**
 * drag and drop function, start dragging element 
 * @param {number} i - index of the Cards array
 */
function startDragging(i) {
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

/**
 * set new list type for card after dropped in new column of board
 * @param {string} listType - name of list type
 */
async function moveTo(listType) {
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