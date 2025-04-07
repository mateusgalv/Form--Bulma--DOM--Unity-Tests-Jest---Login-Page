const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const messageBox = document.getElementById("message-box");

const login = (user) => {
    console.log('login');
    window.location.href = "home.html";
};

const failedLogin = () => {
    const failedLoggin = document.createElement("p");
    failedLoggin.classList.add("has-text-danger");
    failedLoggin.innerText = "Invalid email or password";
    messageBox.appendChild(failedLoggin);
};

const tryLogin = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(user => user.email === emailInput.value);
    if(!user) {
        failedLogin();
    } else if(user.password === passwordInput.value) {
        login(user);
    } else {
        failedLogin();
    }
};

const validateEmail = () => {
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return regex.test(email);
};

const resetFields = () => {
    emailInput.value = "";
    passwordInput.value = "";
    emailInput.placeholder = "user@email.com";
};

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const isValidEmail = validateEmail();
    if(!isValidEmail) {
        resetFields();
        emailInput.classList.add("is-danger");
        emailInput.placeholder = "Invalid email format";
        console.log("invalid email");
    } else {
        emailInput.classList.remove("is-danger");
        tryLogin();
    }
});

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "pages/registration.html";
});

window.onload = () => {
    localStorage.setItem("users", JSON.stringify([{
        email: "admin@admin.com",
        password: "admin",
        name: "Admin",
        surname: "Admin",
        username: "admin",
    }]));
};