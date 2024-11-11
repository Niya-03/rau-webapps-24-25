let user = localStorage.getItem('user');
    
    if(!user){
         user = {
            id: undefined,
            first_name: undefined,
            last_name: undefined,
            email: undefined,
            password: undefined,
            phone: undefined,
            dob: undefined,
            gender: undefined,
            created_at: undefined,
            updated_at: undefined,
            is_active: undefined
        }
    }else{
        user = JSON.parse(user);
    }

async function signuptest(){
    

    const formInput = document.getElementById('step1Form');
    const form = new FormData(formInput);

    let firstname = form.get('firstname');
    let lastname = form.get('lastname');
    let dob = form.get('dob');
    let gender = form.get('gender');
    let email = form.get('email');
    let phone = form.get('phone');
    let password = form.get('password');
    let confirm = form.get('confirm_password');

    let terms = document.getElementById('terms');
    let privacy = document.getElementById('privacy');

    if(password !== confirm){
        alert('passwords dont match');
        return;
    }

    if(!email){
        alert('fill email');
        return;
    }

    if(!terms.checked || !privacy.checked){
        alert('agree with the terms');
        return;
    }

    

    user.first_name = firstname;
    user.last_name = lastname;
    user.email = email;
    user.password = password;
    user.phone = phone;
    user.dob = new Date(dob).getTime();
    user.gender = parseInt(gender);

    const url = 'http://localhost:5001/signup';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    try {
        let response = await fetch(url, options);
        let result = await response.json();

        alert(result.message || result.error);
        
    } catch (error) {
        alert(error);
    }


}