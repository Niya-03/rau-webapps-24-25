const USERS = [
    {
        "email": "a@b.c",
        "password": "1345678900"
    },
    {
        "email": "d@b.c",
        "password": "1345678901"
    },
    {
        "email": "e@b.c",
        "password": "1345678902"
    },
    {
        "email": "f@b.c",
        "password": "1345678903"
    },
];

// 1. Capture user input 
// 2. Check if user exists 
// 3. Check if user credentials match provided details
// 4. If match => go to home else display a message.
function signin() {
    const errorParagraph = document.getElementById("errorMessage");
    errorParagraph.innerText = "";
    
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (email.value == "" || password.value == "") {
        return;
    }
    
    for (let user of USERS) {
        if (user.email == email.value) {
            if (user.password == password.value) {
                window.location.replace("home.html")
            }
        }
    }

    errorParagraph.innerText = "Invalid user credentials.";
    errorParagraph.style.color = "red";    

    //-------------------------------------------------
    const url = "http://localhost:5001/signin"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'email':email, 'password':password})
    };
    fetch(url, options).then(responseArrived).then(responseBodyReceived).catch(errorHappened);
}


const form = document.querySelector('form');
form.addEventListener('submit', stopFormDefault);

function stopFormDefault(event) {
    event.preventDefault();
    // actual logic, e.g. validate the form
    console.log('Form submission cancelled.');
}

function responseBodyArrived(response){
    console.log(response);
}

function responseArrived(response) {
    console.log("Success!!!");
    console.log(response);
    if (!response.ok) {
        throw new Error("Failed to get data.");
    }
    return response.json();
}

function responseBodyReceived(response) {
    console.log(response);
}

function errorHappened(response) {
    console.log("Error!!!");
    console.log(response);
}