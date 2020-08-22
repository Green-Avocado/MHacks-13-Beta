function register() {
    var email = document.getElementById("authEmail").value;
    var pass = document.getElementById("authPass").value;

    if(fieldsValid()) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistance.SESSION)
            .then(() = {
                firebase.auth().createUserWithEmailAndPassword(email, pass)
                    .then(() => {
                        populateUserData();
                        alert('success');
                    })
                    .catch((error) => {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        console.log(errorCode, errorMEssage);
                        alert(errorMessage);
                    });
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMEssage);
                alert(errorMessage);
            });
    }
    else {
        alert("Incomplete form");
    }
}

function fieldsValid() {
    var valid = true;

    //TODO

    return valid;
}

function populateUserData() {
    //TODO
}

