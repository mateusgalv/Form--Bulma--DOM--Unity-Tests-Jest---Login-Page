import { validateEmail } from './modules/validation.js';

const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

const email = document.getElementById("email-input");
const password = document.getElementById("password-input");
const messageBox = document.getElementById("message-box");

const login = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./pages/home.html";
};

const failedLogin = () => {
    const failedLoggin = document.createElement("p");
    failedLoggin.classList.add("has-text-danger");
    failedLoggin.innerText = "Invalid email or password";
    messageBox.appendChild(failedLoggin);
};

const tryLogin = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(user => user.email === email.value); 
    if(!user) {
        failedLogin();
    } else if(user.password === password.value) {
        login(user);
    } else {
        failedLogin();
    }
};

const resetFields = () => {
    email.value = "";
    password.value = "";
    email.placeholder = "user@email.com";
};

const validateForm = () => {
    if(email.value === "") {
        email.classList.add("is-danger");
        email.placeholder = "Email is required";
        return false;
    }

    const isValidEmail = validateEmail(email.value);
    if(!isValidEmail) {
        resetFields();
        email.classList.add("is-danger");
        email.placeholder = "Invalid email format";
        return false
    } else email.classList.remove("is-danger");

    if(password.value === "") {
        password.classList.add("is-danger");
        password.placeholder = "Password is required";
        return false;
    }

    return true;
};

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const isValidForm = validateForm();
    if(isValidForm) {
        tryLogin();
    }
});

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    if(!users) {
        localStorage.setItem('users', JSON.stringify([]));
    }
    window.location.href = "pages/registration.html";
});