let Contacts = [
    {
        "firstName": "Anja",
        "lastName": "Schulz",
        "phone": 1234567890001,
        "email": "schulz@hotmail.com"
    },
    {
        "firstName": "Anton",
        "lastName": "Mayer",
        "phone": 987654321,
        "email": "antom@gmail.com"
    },
    {
        "firstName": "Benedikt",
        "lastName": "Ziegler",
        "phone": 5432167890,
        "email": "benedikt@gmail.com"
    },
    {
        "firstName": "David",
        "lastName": "Eisenberg",
        "phone": 6789054321,
        "email": "davidberg@gmail.com"
    },
    {
        "firstName": "Eva",
        "lastName": "Fischer",
        "phone": 5432109876,
        "email": "evag@gmail.com"
    },
    {
        "firstName": "Emmanuel",
        "lastName": "Mauer",
        "phone": 6789012345,
        "email": "emmanuelma@gmail.com"
    }
]

let nameTagsColors = ['#FF7A00', '#9327FF', '#29ABE2', '#FC71FF', '#02CF2F', '#AF1616','#FF7A00', '#9327FF', '#29ABE2', '#FC71FF', '#02CF2F', '#AF1616','#FF7A00', '#9327FF', '#29ABE2', '#FC71FF', '#02CF2F', '#AF1616'];

let firstLetters = [];
function getFirstLetters() {
    let allFirstLetters = [];
    for (let j = 0; j < Contacts.length; j++) {
        const element = Contacts[j];
        const firstNameLetter = element['firstName'].charAt(0);
        allFirstLetters.push(firstNameLetter);
    }
    let uniqueChars = allFirstLetters.filter((element, index) => {
        return allFirstLetters.indexOf(element) === index;
    });

    firstLetters.push(uniqueChars);

}
function renderContactsList() {
    getFirstLetters();
    let contactsList = document.getElementById('contacts_list');

    for (let i = 0; i < Contacts.length; i++) {
        let element = Contacts[i];
        let firstLetter = element['firstName'].charAt(0);
        let firstTwoLetters = element['firstName'].charAt(0) + element['lastName'].charAt(0);
        let letterTab = document.getElementById(`letter_${firstLetter}`);
        if (!letterTab) {
            contactsList.innerHTML +=
            `   <div class="frame-112" id="letter_${firstLetter}">
                    <p>${firstLetter}</p>
                </div> 
                
                <div class="frame-119">
                    <svg xmlns="http://www.w3.org/2000/svg" width="354" height="2" viewBox="0 0 354 2" fill="none">
                    <path d="M1 1H353" stroke="#D1D1D1" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="frame_112"> 
                 
            </div>
            <div class="contact_name"> 
                <div class="frame_79">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="20.5" fill="${nameTagsColors[i]}" stroke="white"/>
                </svg>
                <p>${firstTwoLetters}</p>
            </div>
            <div class="frame_81">
                <span>
                    ${element['firstName']} ${element['lastName']}
                </span>
                
                <a href = "mailto: ${element['email']}">${element['email']}</a>   
            </div>
        </div>
                `
        } else {
            contactsList.innerHTML += `
            <div class="frame_112"> 
                 
            </div>
            <div class="contact_name"> 
                <div class="frame_79">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="20.5" fill="#9327FF" stroke="white"/>
                </svg>
                <p>${firstTwoLetters}</p>
            </div>
            <div class="frame_81">
                <span>
                    ${element['firstName']} ${element['lastName']}
                </span>
                
                <a href = "mailto: ${element['email']}">${element['email']}</a>   
            </div>
        </div>`
        }


    }
}