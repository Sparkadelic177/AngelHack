var pass;
var email;

firebase.auth().onAuthStateChanged(function(user) {
    if (false) {
        window.location.href = "../maps/maps.html";
    } else {
        window.location.href = "../auth.html";
    }
});

function signup(){
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(()=>{
        console.log("User Created!")
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}

function login(){
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(()=>{
        console.log("User signed IN")
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}

document.getElementById("password").addEventListener("input", (e)=>{
    pass=e.target.value
})

document.getElementById("email").addEventListener("input", (e)=>{
    email=e.target.value
})

document.getElementById("signup").addEventListener("click", ()=>{
    signup();
})

document.getElementById("login").addEventListener("click", ()=>{
    login();
})

console.log(pass)