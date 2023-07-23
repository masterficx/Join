//Conditionen für Mobile-Version
const mediaQueryMobile = window.matchMedia('(max-width: 992px)');

let currentuser = "Jon Doe";

async function init() {
    welcomeMsgTime();
    welcomeMsgUser();
    addClassMobile();
}

//Begrüßung zur aktuellen Tageszeit
function welcomeMsgTime() {
    const currenttime = new Date().getHours();
    const morningstart = 6;
    const morningend = 11;
    const daystart = 12;
    const dayend = 14;
    const afternoonstart = 15;
    const afternoonend = 17;
    const eveningstart = 18;
    const eveningend = 22;
    const nightstart = 23;
    const nightend = 24;
    const nightstart2 = 0;
    const nightend2 = 5;
    let messageTime = document.getElementById('welcomemsgtime');

    if (currenttime >= morningstart && currenttime <= morningend) {
        messageTime.innerHTML = "Good morning";
    };
    if (currenttime >= daystart && currenttime <= dayend) {
        messageTime.innerHTML = "Good day";
    };
    if (currenttime >= afternoonstart && currenttime <= afternoonend) {
        messageTime.innerHTML = "Good afternoon";
    };
    if (currenttime >= eveningstart && currenttime <= eveningend) {
        messageTime.innerHTML = "Good evening";
    };
    if ((currenttime >= nightstart && currenttime <= nightend) || (currenttime >= nightstart2 && currenttime <= nightend2)) {
        messageTime.innerHTML = "Good night";
    };
}

//Begrüßung des eingeloggten Nutzers mit Namen
function welcomeMsgUser() {
    let messageUser = document.getElementById('welcomemsguser');
    messageUser.innerHTML = `${currentuser}`;
}


//Fügt in der mobilen Version (nach 2 Sekunden) eine Klasse hinzu
function addClassMobile() {
    let messageContainer = document.getElementById('welcomemsg');
    setTimeout(function hideWelcome() {
        if (mediaQueryMobile.matches) {
            messageContainer.classList.add('remove');
        }
        else {
            messageContainer.classList.remove('remove');
        }
    }, 2000);
}


// Prüft bei Veränderung die Media Query Conditions
  window.addEventListener('resize', addClassMobile);