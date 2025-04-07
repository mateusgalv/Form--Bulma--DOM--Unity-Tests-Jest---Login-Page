const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

const emailInput = document.getElementById("email-input");

const login = () => {

};

const validateUser = () => {
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!regex.test(email)) {
        emailInput.classList.add("is-danger");
    } else {
        emailInput.classList.remove("is-danger");
        // login();
        window.location.href = "home.html";
    }
};

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // must validade user credentials
    console.log(event)
    validateUser();
    // should redirect to home page or return error
});

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "registration.html";
    // should redirect to registration page
});