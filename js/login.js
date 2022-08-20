// Step-1: add event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-2: get email in email input field
    // remember to add .value to get text from an input field
    const emailAddress = document.getElementById('user-email');
    const email = emailAddress.value;
    // Step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Step-4
    if (email == 'sadman@gmail.com' && password == 'g019rash') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid email or password');
    }
})