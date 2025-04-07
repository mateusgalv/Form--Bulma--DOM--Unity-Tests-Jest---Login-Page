const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

const login = () => {
    console.log('login');
};

const tryLogin = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(user => user.email === emailInput.value);
    if(!user) {
        console.log('failed login');
    } else if(user.password === passwordInput.value) {
        login();
    } else {
        console.log('failed login');
    }
};

const validateEmail = () => {
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return regex.test(email);
};

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const isValidEmail = validateEmail();
    if(!isValidEmail) {
        console.log("invalid email");
    } else {
        tryLogin();
    }
});

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "registration.html";
    // should redirect to registration page
});

window.onload = () => {
    localStorage.setItem("users", JSON.stringify([{
        email: "admin@admin.com",
        password: "admin",
    }]));
};