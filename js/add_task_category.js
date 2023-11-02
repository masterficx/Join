/** 
 * This function generates the drop down menu with the avaliable categories.
 */ 
function openCategoryDropDown() {
    openTranspOverlay();
    // removeClassTranspOverlay();
    let categoryMainContainer = document.getElementById('category');
    categoryMainContainer.classList.add('category-z-index-2');
    categoryMainContainer.innerHTML = "";
    categoryMainContainer.innerHTML += `<h5>Category</h5><div class="selectContainer addcatph" onclick="closeCategoryInput()"> Select task category</div>
                                                         <div class="selectCategoryContainer" id="addCategory"> </div>`;
    let categoryContainer = document.getElementById('addCategory');
    categoryContainer.innerHTML = "";
    ;
    categoryContainer.innerHTML += `<div class="category-selection" onclick="openCategoryInput()">Add category</div>`;
    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        categoryContainer.innerHTML += `<div class="category-selection" onclick="selectedCategory(${i})">${element['name']}<svg class="new-category-color">
        <circle cx="50%" cy="50%" r="12" stroke="black" stroke-width="0" fill="${element['color']}" />
        </svg> </div>`;
    }
}

/** 
 * This function generates the input field and color choice for the addition of a category.
 */
function openCategoryInput() {
    let categoryContainer = document.getElementById('addCategory');
    categoryContainer.innerHTML = "";
    let categoryMainContainer = document.getElementById('category');
    categoryMainContainer.innerHTML = "";
    categoryMainContainer.innerHTML = `
     <h5>Category</h5>
     <div class="add-category-container">
        <input class="added-category-name" id="added_category_name" type="text" placeholder="New category name">
        <button class="close-category-input-btn" onclick="closeCategoryInput()">${smallXSVG}</button>
        <svg height="40" width="3"> <line x1="2" y1="8" x2="2" y2="32" style="stroke:#d1d1d1;stroke-width:2" /> </svg>
        <button class="add-category-btn" onclick="addCategory()">${checkedSmallSVG}</button>
     </div>
     <div class="selectable-category-colors" id="selectable_category_colors"> </div>
     `;
    renderSelectableCategoryColors();
}

/** 
 * This function closes the category input field without selecting a category.
 */
function closeCategoryInput() {
    document.getElementById('category').innerHTML = "";
    document.getElementById('category').classList.remove('category-z-index-2');
    document.getElementById('transparentoverlay').style.display = "none";
    document.getElementById('category').innerHTML = `<h5>Category</h5><div class="selectContainer addcatph" id="addCategory" onclick="openCategoryDropDown()">Select task category</div>`;
}

/** 
 * This function closes the category input field and returns a global variable of the chosen category.
 * @param {number} x  
  */
function selectedCategory(x) {
    let element = categories[x];
    document.getElementById('category').innerHTML = `
    <h5>Category</h5>
    <div class="selectContainer" id="addCategory" onclick="openCategoryDropDown()">
        <div class="category-selection">${element['name']} 
            <svg class="new-category-color">
            <circle cx="12" cy="12" r="10" stroke="black" stroke-width="0" fill="${element['color']}" />
            </svg>
        </div>
    </div>`;
    window.theChosenCategory = x;
    document.getElementById('transparentoverlay').style.display = "none";
    document.getElementById('category').classList.remove('category-z-index-2');
}

/** 
 * This function renders the available colors to assign to the newly created category.
 */ 
function renderSelectableCategoryColors() {
    let selectableColorsMainDIV = document.getElementById('selectable_category_colors');
    selectableColorsMainDIV.innerHTML = "";
    for (let y = 0; y < categoryColors.length; y++) {
        const element = categoryColors[y];
        selectableColorsMainDIV.innerHTML += `
            <div class="selected-category-color" id="${element}" onclick="selectedCategoryColor('${element}')">
                <svg class="new-category-color">
                <circle id="circle_${element}" cx="12" cy="12" r="10" stroke="black" stroke-width="0" fill="${element}" />
                </svg>
            </div>`;
    }
}

/** 
 * This function returns a global variable of the selected color for the new category.
 * @param {number} x 
 */
function selectedCategoryColor(x) {
    renderSelectableCategoryColors();
    window.newCategoryColor = x;
    let selectedColorContainer = document.getElementById(`circle_${x}`);
    selectedColorContainer.classList.add('stroke-width-2');
}

/** 
 * This function creates and adds the new category to remote storage.
 */
async function addCategory() {
    let categoryNameInput = document.getElementById('added_category_name').value;
    categoryValue = categoryNameInput.toLowerCase();
    let newCategory = {
        name: categoryNameInput,
        color: newCategoryColor,
        value: categoryValue,
    };
    categories.push(newCategory);
    openCategoryDropDown();
    await saveCategoriesToStorage()
    await getCardsFromStorage()
}
