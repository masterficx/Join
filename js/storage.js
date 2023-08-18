const STORAGE_TOKEN = '3ENG5I37YYIRIRHAMOTSPWZ7QUU5KTVYOANLRZYR';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

//Save and load contacts
function saveContactsToStorage(){
    let contactsAsString = JSON.stringify(Contacts);
    localStorage.setItem('contacts', contactsAsString);
}

function getContactsFromStorage(){

    let contactsAsString = localStorage.getItem('contacts');
    if(contactsAsString){
    Contacts = JSON.parse(contactsAsString);
}
}


//Save and load cards
function saveCardsToStorage() {
    let cardsAsString = JSON.stringify(cards);
    localStorage.setItem('cards', cardsAsString);
}

function getCardsFromStorage() {

    let cardsAsString = localStorage.getItem('cards');
    if (cardsAsString) {
        cards = JSON.parse(cardsAsString);
    }
}


//Save and load contacts in remoteStorage
async function saveRemoteStorage() {
    let key = contacts;
    let value = Contacts;
    let payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, {method: 'POST', body: JSON.stringify(payload)}).then(res => res.json());
}

async function loadRemoteStorage() {
    let key = contacts;
    let url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
        // Verbesserter code
        if (res.data) { 
            return res.data.value;
        } throw `Could not find data with key "${key}".`;
    });
}