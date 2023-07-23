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
        "age": 6789012345,
        "email": "emmanuelma@gmail.com"
    }
]

function renderContactsList() {
    let contactsList = document.getElementById('contacts_list');
    for (let i = 0; i < Contacts.length; i++) {
        const element = Contacts[i];
        const firstTwoLetters = element['firstName'].charAt(0) + element['lastName'].charAt(0);
        console.log(firstTwoLetters);
        contactsList.innerHTML += `
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