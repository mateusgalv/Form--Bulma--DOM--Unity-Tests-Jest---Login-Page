export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validateNames = (name, surname) => {
    if(name === "" || surname === "") {
        return false;
    }
    return true;
};

export const validateUsername = (username, users) => {
    const user = users.find(user => user.username === username);
    if(username === "" || user) {
        return false;
    }
    return true;
};

export const validatePassword = (password, passwordCheck) => {
    if(password === "" || passwordCheck === "") {
        return false;
    }
    return password === passwordCheck;
};