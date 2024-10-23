function maskPassword(password) {
    return '*'.repeat(password.length);
}

function checkPassword(password) {
    return /[!?]/.test(password);
}

function checkEmail(email) {
    return /[@]/.test(email);
}

function displaySignUpInfo(user) {
    const signUpInfo = `
        <div class="alert alert-success">
            <h2>Registration Successful!</h2>
            <p>First Name: ${user.firstName}</p>
            <p>Last Name: ${user.lastName}</p>
            <p>Email: ${user.email}</p>
            <p>Password: ${user.password}</p>
            <p>Date of Birth: ${user.dateOfBirth}</p>
        </div>
    `;
    document.getElementById('registrationInfo').innerHTML = signUpInfo;
}

document.getElementById('registerButton').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dateOfBirth').value;
    if (!firstName || !lastName || !email || !password || !dob) {
        alert('ERROR: All fields are required.');
    } else if (!checkPassword(password)) {
        alert('ERROR: Password must contain either "!" or "?".');
    } else if (!checkEmail(email)) {
      alert('ERROR: Email must contain @')
    } else {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: maskPassword(password),
            dob: dob,
        };
        displaySignUpInfo(user);
    }
});