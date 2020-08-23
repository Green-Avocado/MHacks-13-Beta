var db = firebase.firestore();

var userList = new Array();

function loadUserProfiles() {
    var user = firebase.auth().currentUser;

    db.collection('users').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.id != user.uid) {
                    userList.push(doc);
                }
            }
        });
}

function loadAllMatches() {
    var cards = document.getElementsByClassName('cards');

    for(let i = 0; i < cards.length; i++) {
        getMatch(i);
    }
}

function getMatch(index) {
    var card = document.getElementsByClassName('cards')[index];
    var image = card.getElementsByClassName('match-user-image')[0];
    var name = card.getElementsByClassName('match-user-name')[0];

    var newMatch = userList.pop();

    image.innerHTML = `<img src="/Profiles/${newMatch.profilePicture}.png">`;
    name.innerText = newMatch.fname;
}

function ignore(index) {
    var user = firebase.auth().currentUser;
    var userDB = db.collection('users').doc(user.uid);

    var card = document.getElementsByClassName('cards')[index];
}

function friend(index) {
    var user = firebase.auth().currentUser;
    var userDB = db.collection('users').doc(user.uid);

    var card = document.getElementsByClassName('cards')[index];
}

