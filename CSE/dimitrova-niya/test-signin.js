let btn = document.getElementById('btn');
btn.addEventListener('click', signin);


async function signin(e){
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value;
    const password = passwordInput.value;

    if(!email || !password){
        alert('fill the fields');
        return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const url = 'http://127.0.0.1:5001/signin';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'email': email, 'password': password})

    }

    try {
        let response = await fetch(url, options);
        let result = await response.json();

        alert(result.message || result.error);
    } catch (error) {
        alert(error);
    }
}