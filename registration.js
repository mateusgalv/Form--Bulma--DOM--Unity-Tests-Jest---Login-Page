import { validateNames, validateUsername, validateEmail, validatePassword } from "./modules/validation.js";

const confirmBtn = document.getElementById("registration-confirm-btn");
const returnBtn = document.getElementById("return-btn");

const name = document.getElementById('registration-name-input');
const surname = document.getElementById('registration-surname-input');
const username = document.getElementById('registration-username-input');
const email = document.getElementById("registration-email-input");
const password = document.getElementById("registration-password-input");
const passwordCheck = document.getElementById("registration-password-repeat-input");

const register = () => {
    const newUser = {
        name: name.value,
        surname: surname.value,
        username: username.value,
        email: email.value,
        password: password.value,
    };

    const users = JSON.parse(localStorage.getItem("users"));
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
};

const resetForm = () => {
    const danger = document.getElementsByClassName("is-danger");
    for(let i = 0; i < danger.length; i++) {
        danger[i].classList.remove("is-danger");
    }
};

const validateForm = () => {
    const users = JSON.parse(localStorage.getItem("users"));

    const isValidName = validateNames(name.value, surname.value);
    if(!isValidName) {
        if(name.value === "") {
            name.classList.add("is-danger");
            name.placeholder = "Please enter a name";
        } else {
            surname.classList.add("is-danger");
            surname.placeholder = "Please enter a surname";
        }
        return false;
    }

    if(username.value === "") {
        username.classList.add("is-danger");
        username.placeholder = "Enter a username";
        return false;
    }

    const isValidUsername = validateUsername(username.value, users);
    if(!isValidUsername) {
        username.classList.add("is-danger");
        const currUsername = username.value;
        username.value = "";
        username.placeholder = `Username '${currUsername}' is not available`;
        return false;
    }

    const isValidEmail = validateEmail(email.value);
    if(!isValidEmail) {
        email.classList.add("is-danger");
        if(email.value === "") {
            email.placeholder = "Enter an email";
        } else {
            email.value = '';
            email.placeholder = "Invalid email format";
        }
        return false;
    }

    const usedEmail = users.find(user => user.email === email.value);
    if(usedEmail) {
        email.classList.add("is-danger");
        email.value = '';
        email.placeholder = "Email already in use";
        return false;
    }

    if(password.value === '') {
        password.classList.add("is-danger");
        password.placeholder = "Inform a password"
        return false;
    }
    
    const isValidPassword = validatePassword(password.value, passwordCheck.value);
    if(!isValidPassword) {
        passwordCheck.classList.add("is-danger");
        passwordCheck.value = '';
        passwordCheck.placeholder = "Passwords do not match";
        return false;
    }
    return true;
};

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    resetForm();
    const isValid = validateForm();
    if(isValid) {
        register();
        window.location.href = "../index.html";
    }
});

returnBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "../index.html";
});