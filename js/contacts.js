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

let nameTagsColors = ['#FF7A00', '#9327FF', '#29ABE2', '#FC71FF', '#02CF2F', '#AF1616', '#FF7A00', '#9327FF', '#29ABE2', '#FC71FF', '#02CF2F', '#AF1616', '#FF7A00', '#9327FF', '#29ABE2', '#FC71FF', '#02CF2F', '#AF1616'];

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
    contactsList.innerHTML = "";
    contactsList.innerHTML += `
    <button class="new-contact" onclick="addNewContact()">
        <p>New contact</p> 
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33"
            viewBox="0 0 32 33" fill="none">
            <mask id="mask0_72255_869" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
            y="0" width="32" height="33">
            <rect y="0.5" width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_72255_869)">
            <path
                d="M25.3294 19.1667C25.0134 19.1667 24.7499 19.0602 24.5388 18.8473C24.3277 18.6343 24.2222 18.3704 24.2222 18.0556V14.9445H21.111C20.7962 14.9445 20.5323 14.8376 20.3194 14.6239C20.1064 14.4102 19.9999 14.1454 19.9999 13.8295C19.9999 13.5136 20.1064 13.2501 20.3194 13.0389C20.5323 12.8278 20.7962 12.7223 21.111 12.7223H24.2222V9.61115C24.2222 9.29635 24.329 9.03246 24.5427 8.81948C24.7564 8.60653 25.0212 8.50005 25.3372 8.50005C25.6531 8.50005 25.9166 8.60653 26.1277 8.81948C26.3388 9.03246 26.4444 9.29635 26.4444 9.61115V12.7223H29.5555C29.8703 12.7223 30.1342 12.8291 30.3472 13.0428C30.5601 13.2566 30.6666 13.5214 30.6666 13.8373C30.6666 14.1532 30.5601 14.4167 30.3472 14.6278C30.1342 14.8389 29.8703 14.9445 29.5555 14.9445H26.4444V18.0556C26.4444 18.3704 26.3375 18.6343 26.1238 18.8473C25.9101 19.0602 25.6453 19.1667 25.3294 19.1667ZM11.9999 16.4778C10.5333 16.4778 9.31473 15.9926 8.34435 15.0223C7.374 14.0519 6.88882 12.8334 6.88882 11.3667C6.88882 9.90005 7.374 8.68154 8.34435 7.71118C9.31473 6.7408 10.5333 6.25562 11.9999 6.25562C13.4666 6.25562 14.6851 6.7408 15.6555 7.71118C16.6258 8.68154 17.111 9.90005 17.111 11.3667C17.111 12.8334 16.6258 14.0519 15.6555 15.0223C14.6851 15.9926 13.4666 16.4778 11.9999 16.4778ZM2.44435 27.1667C2.12955 27.1667 1.86566 27.0602 1.65269 26.8473C1.43973 26.6343 1.33325 26.3704 1.33325 26.0556V23.8334C1.33325 23.063 1.5314 22.3612 1.92769 21.7279C2.324 21.0945 2.8666 20.6186 3.55549 20.3C5.12586 19.5815 6.58022 19.0649 7.91855 18.75C9.25691 18.4352 10.6162 18.2779 11.9963 18.2779C13.3765 18.2779 14.737 18.4352 16.0777 18.75C17.4184 19.0649 18.8666 19.5815 20.4222 20.3C21.111 20.6334 21.6573 21.113 22.061 21.7389C22.4647 22.3649 22.6666 23.063 22.6666 23.8334V26.0556C22.6666 26.3704 22.5601 26.6343 22.3472 26.8473C22.1342 27.0602 21.8703 27.1667 21.5555 27.1667H2.44435ZM3.55545 24.9445H20.4444V23.8334C20.4444 23.5149 20.3648 23.2149 20.2055 22.9334C20.0462 22.6519 19.8073 22.4408 19.4888 22.3C18.0518 21.5963 16.7629 21.1204 15.6222 20.8723C14.4814 20.6241 13.274 20.5 11.9999 20.5C10.7259 20.5 9.51844 20.6278 8.37769 20.8834C7.23695 21.1389 5.94066 21.6112 4.48882 22.3C4.19991 22.4408 3.97212 22.6519 3.80545 22.9334C3.63879 23.2149 3.55545 23.5149 3.55545 23.8334V24.9445ZM11.9999 14.2556C12.8221 14.2556 13.5092 13.9797 14.061 13.4278C14.6129 12.876 14.8888 12.1889 14.8888 11.3667C14.8888 10.5445 14.6129 9.85746 14.061 9.30562C13.5092 8.75375 12.8221 8.47782 11.9999 8.47782C11.1777 8.47782 10.4907 8.75375 9.93882 9.30562C9.38695 9.85746 9.11102 10.5445 9.11102 11.3667C9.11102 12.1889 9.38695 12.876 9.93882 13.4278C10.4907 13.9797 11.1777 14.2556 11.9999 14.2556Z"
                fill="white" />
        </g>
    </svg>
</button>`

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
            <div class="contact_name" id="contact_${[i]}" type="button" onclick="showContactDetails(${[i]})"> 
                <div class="frame_79">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="20.5" fill="${nameTagsColors[i]}" stroke="white"/>
                </svg>
                <p>${firstTwoLetters}</p>
            </div>
            <div class="frame_81">
                <span id="contact_name_${[i]}">
                    ${element['firstName']} ${element['lastName']}
                </span>
                
                <a>${element['email']}</a>   
            </div>
        </div>
                `
        } else {
            contactsList.innerHTML += `
            <div class="frame_112"> 
                 
            </div>
            <div class="contact_name" id="contact_${[i]}" type="button" onclick="showContactDetails(${[i]})"> 
                <div class="frame_79">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="20.5" fill="#9327FF" stroke="white"/>
                </svg>
                <p>${firstTwoLetters}</p>
            </div>
            <div class="frame_81">
                <span id="contact_name_${[i]}">
                    ${element['firstName']} ${element['lastName']}
                </span>
                
                <a>${element['email']}</a>   
            </div>
        </div>`
        }


    }
}

function showContactDetails(x) {
    renderContactsList();
    let contact = document.getElementById(`contact_${[x]}`);
    let contactName = document.getElementById(`contact_name_${[x]}`)
    contact.classList.add('background-color-2A3647');
    contactName.classList.add('color-FFFFFF');
}