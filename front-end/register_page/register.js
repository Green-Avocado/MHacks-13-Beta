function register() {
    var email = document.getElementById("authEmail").value;
    var pass = document.getElementById("authPass").value;

    validity = fieldsValid();

    if(validity == 0) {
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
    else if(validity == -1) {
        alert("Error: imcomplete form");
    }
    else if(validity == -2) {
        alert("Error: passwords do not match");
    }
}

function fieldsValid() {
    var valid = 0;

    if(
        document.getElementById('email').value == '' ||
        document.getElementById('fname').value == '' ||
        document.getElementById('lname').value == '' ||
        document.getElementById('pword').value == ''
    ) {
        valid = -1;
    }
    else if(document.getElementById('pwordc').value != document.getElementById('pword').value) {
        valid = -2;
    }

    return valid;
}

function populateUserData() {
}

