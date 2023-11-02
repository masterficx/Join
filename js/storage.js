const STORAGE_TOKEN = 'ASF5HJPDXKIH2AGE883V27FL7MV9BZEAKH2J1FK3';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

/**
 * Function to save the Contacts to remote storage.
 */
async function saveContactsToStorage() { 
    let key = 'contacts';
    let value = Contacts;
    let payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, {method: 'POST', body: JSON.stringify(payload)}).then(res => res.json());
}

/**
 * Function to get the Contacts from remote storage.
 */
async function getContactsFromStorage() {
    let key = 'contacts';
    let url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        

        if (data.data) {
            Contacts = JSON.parse(data.data.value);
        } else {
            throw new Error(`Could not find data with key "${key}".`);
        }
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
}

/**
 * Function to save the cards/tasks to remote storage.
 */
async function saveCardsToStorage() { 
    let key = 'cards';
    let value = cards;
    let payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, {method: 'POST', body: JSON.stringify(payload)}).then(res => res.json());
}
/**
 * Function to get the cards/tasks from remote storage.
 */
async function getCardsFromStorage() { 
    let key = 'cards';
    let url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.data) {
            cards = JSON.parse(data.data.value);
        } else {
            throw new Error(`Could not find data with key "${key}".`);
        }
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
}

/**
 * Function to get the categories from remote storage. 
 */
async function saveCategoriesToStorage() { 
    let key = 'categories';
    let value = categories;
    let payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, {method: 'POST', body: JSON.stringify(payload)}).then(res => res.json());
}

/**
 * Function to save the categories to remote storage.
 */
async function getCategoriesFromStorage() { 
    let key = 'categories';
    let url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.data) {
            categories = JSON.parse(data.data.value);
        } else {
            throw new Error(`Could not find data with key "${key}".`);
        }
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
}