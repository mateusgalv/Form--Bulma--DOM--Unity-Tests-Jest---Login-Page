import { validateNames, validateUsername, validateEmail, validatePassword } from "./modules/validation.js";

const confirmBtn = document.getElementById("registration-confirm-btn");

const name = document.getElementById('registration-name-input');
const surname = document.getElementById('registration-surname-input');
const username = document.getElementById('registration-username-input');
const email = document.getElementById("registration-email-input");
const password = document.getElementById("registration-password-input");
const passwordCheck = document.getElementById("registration-password-repeat-input");
const users = JSON.parse(localStorage.getItem("users"));

const tryRegister = () => {
    const isValidName = validateNames(name.value, surname.value);
    if(!isValidName) {
        console.log('failed');
    }

    const isValidUsername = validateUsername(username.value, users);
    if(!isValidUsername) {
        console.log('failed');
    }

    const isValidEmail = validateEmail(email.value);
    if(!isValidEmail) {
        console.log('failed');
    }
    
    const isValidPassword = validatePassword(password.value, passwordCheck.value);
    if(!isValidPassword) {
        console.log('failed');
    }
};

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    tryRegister();
});