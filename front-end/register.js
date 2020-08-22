function register() {
    var email = document.getElementById("authEmail").value;
    var pass = document.getElementById("authPass").value;

    firebase.auth().setPersistence(firebase.auth.Auth.Persistance.SESSION)
        .then(() = {
            firebase.auth().createUserWithEmailAndPassword(email, pass)
                .then(() => {
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

