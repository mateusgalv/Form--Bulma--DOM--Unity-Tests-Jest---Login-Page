const FEMALE_ICON_PATH = "/assets/172622_user_female_icon.png";
const MALE_ICON_PATH = "/assets/172626_user_male_icon.png";

const profile = document.getElementById('profile-container');
const currentUserName = document.getElementById('name-container');

const logout = document.getElementById('logout-btn');
const deleteBtn = document.getElementById('delete-btn'); 

const switchAvatar = ({ target }) => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const currentAvatar = user.avatar;

    if(currentAvatar === "male") {
        user.avatar = "female";
        target.src = FEMALE_ICON_PATH;
    } else {
        user.avatar = "male";
        target.src = MALE_ICON_PATH;
    }

    sessionStorage.setItem('user', JSON.stringify(user));
};

const createImgElement = (gender) => {
    const img = document.createElement('img');
    img.classList.add('my-img');
    if(gender === "male") {
        img.src = MALE_ICON_PATH;
    } else {
        img.src = FEMALE_ICON_PATH;
    }

    img.addEventListener('click', switchAvatar);
    img.addEventListener('mouseover', ({ target }) => {
        target.style.cursor = 'pointer';
    });
    return img;
};

const renderAvatar = (avatar) => {
    const img = createImgElement(avatar);
    profile.appendChild(img);
};

const renderName = (name) => {
    const fullName = document.createElement('h1');
    fullName.innerText = name;
    profile.appendChild(fullName);
};

const renderEmail = (email) => {
    const emailContainer = document.createElement('h2');
    emailContainer.innerText = email;
    profile.appendChild(emailContainer);
};

logout.addEventListener("click", () => {
    sessionStorage.removeItem('user');
    window.location.href = "../index.html";
});

deleteBtn.addEventListener("click", () => {
    const users = JSON.parse(localStorage.getItem('users'));
    const { username } = JSON.parse(sessionStorage.getItem('user'));
    const updatedUsers = users.filter(user => user.username !== username);
  
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert("Your account has been deleted.");
    window.location.href = "../index.html";
});

window.onload = () => {
    const { name, surname, email, avatar } = JSON.parse(sessionStorage.getItem('user'));
    const fullName = `${name} ${surname}`;

    renderAvatar(avatar);
    renderName(fullName);
    renderEmail(email);
};