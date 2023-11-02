/**
 * load current priority state
 * @param {number} i - index of the Cards array
 */
function loadActiveStatePrio(i) {
    let currentPrioSelection = cards[i]['prio'];
    if (currentPrioSelection == "Urgent") {
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
}

/**
 * remove or add prio state
 * @param {number} i - index of the Cards array
 * @param {number} j - index of priority number
 */
function addActiveState2(i, j) {
    let btnsTip = document.getElementById('prioButtons2').getElementsByClassName('SubTaskPrios2');
    if (btnsTip[j].classList.contains('active-state')) {
        btnsTip[j].classList.remove('active-state');
    }
    else {
        for (f = 0; f < btnsTip.length; f++) {
            btnsTip[f].classList.remove('active-state');
        };
        btnsTip[j].classList.add('active-state');
    }
    let priorityNumber = j;
    window.priority = priorityNumber;
    prioValueForSaving(i, j);
}

let prioValue;
/**
 * set prio depending on value 
 * @param {*} i - index of the Cards array
 * @param {*} h - priority number value
 */
function prioValueForSaving(i, h) {
    if (h == 0) {
        prioValue = "Urgent";
    } else
        if (h == 1) {
            prioValue = "Mid";
        } else
            if (h == 2) {
                prioValue = "Low";
            }
    cards[i]['prio'] = prioValue;
}

/**
 * Render the current prio state of card
 */
function renderPrioState(i) {
    return `
    <div class="addTaskPrios" id="prioButtons2">
                                    <button class="SubTaskPrios2 red" id="prioSelect0" onclick="addActiveState2(${i},0)">Urgent<img
                                            src="assets/img/addtask/prio-high.svg" alt="" class="default"><img
                                            src="assets/img/addtask/prio-high-w.svg" alt="" class="active"></button>
                                    <button class="SubTaskPrios2 yellow" id="prioSelect1" onclick="addActiveState2(${i},1)">Medium<img
                                        src="assets/img/addtask/prio-medium.svg" alt="" class="default"><img
                                        src="assets/img/addtask/prio-medium-w.svg" alt="" class="active"></button>
                                    <button class="SubTaskPrios2 green" id="prioSelect2" onclick="addActiveState2(${i},2)">Low<img
                                        src="assets/img/addtask/prio-low.svg" alt="" class="default"><img
                                        src="assets/img/addtask/prio-low-w.svg" alt="" class="active"></button>
                                </div>`;
}

/**
 * set style of priority button according to choosen priority
 */
function prioButtonStyle(i) {
    let prioBtnDetail = document.getElementById('priobtndetail');
    let prioBtnDetailImg = document.getElementById('prioImg');
    for (y = 0; y < cards.length; y++) {
        clearPrioBtnAndImgInCard(prioBtnDetail, prioBtnDetailImg);
    };
    if (cards[i]['prio'] == "Urgent") {
        setHighPrioBtnAndImgInCard(prioBtnDetail, prioBtnDetailImg);
    } else if (cards[i]['prio'] == "Medium" || cards[i]['prio'] == "Mid") {
        setMidPrioBtnAndImgInCard(prioBtnDetail, prioBtnDetailImg);
    } else if (cards[i]['prio'] == "Low") {
        setLowPrioBtnAndImgInCard(prioBtnDetail, prioBtnDetailImg);
    }
}

/**
 * Clears the styling of the priority buttons in the card
 * @param {string} prioBtnDetail 
 * @param {string} prioBtnDetailImg 
 */
function clearPrioBtnAndImgInCard(prioBtnDetail, prioBtnDetailImg) {
    prioBtnDetail.classList.remove('prio-high-btn');
    prioBtnDetail.classList.remove('prio-med-btn');
    prioBtnDetail.classList.remove('prio-low-btn');
    prioBtnDetailImg.src = "";
}

/**
 * Sets the high priority styling to the selected priority button in the card
 * @param {string} prioBtnDetail 
 * @param {string} prioBtnDetailImg  
 */
function setHighPrioBtnAndImgInCard(prioBtnDetail, prioBtnDetailImg) {
    prioBtnDetail.classList.add('prio-high-btn');
    prioBtnDetailImg.src = "assets/img/addtask/prio-high-w.svg";
}

/**
 * Sets the medium priority styling to the selected priority button in the card
 * @param {string} prioBtnDetail 
 * @param {string} prioBtnDetailImg  
 */
function setMidPrioBtnAndImgInCard(prioBtnDetail, prioBtnDetailImg) {
    prioBtnDetail.classList.add('prio-med-btn');
    prioBtnDetailImg.src = "assets/img/addtask/prio-medium-w.svg";
}

/**
 * Sets the low priority styling to the selected priority button in the card
 * @param {string} prioBtnDetail 
 * @param {string} prioBtnDetailImg  
 */
function setLowPrioBtnAndImgInCard(prioBtnDetail, prioBtnDetailImg) {
    prioBtnDetail.classList.add('prio-low-btn');
    prioBtnDetailImg.src = "assets/img/addtask/prio-low-w.svg";
}