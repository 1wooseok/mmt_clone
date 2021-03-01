const asking_form = document.querySelector('.asking_form');
const name_box = document.querySelector('.name_box');
const init_screen = document.querySelector('.init');
const main = document.querySelector('.main');

const USER_LS = 'USER';
const NONE_CN = 'none';

function goNext() {
    main.style.WebkitAnimation = 'fadeOut 1s';
    main.style.animation = 'fadeOut 1s';
    setTimeout(() => {
        
        init_screen.WebkitAnimation = 'fadeIn 1s';
        init_screen.animation = 'fadeIn 1s';
        setTimeout(() => {
            main.classList.toggle(NONE_CN);
            init_screen.classList.toggle(NONE_CN);
        }, 100);
    }, 100);
}

function setUserName(event) {
    event.preventDefault();
    const userName = name_box.value;
    localStorage.setItem(USER_LS, userName);  
    goNext();
}

function getUserName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser !== null){
        main.classList.toggle(NONE_CN);
        init_screen.classList.toggle(NONE_CN);
    }
}

function init() {
    getUserName();
    asking_form.addEventListener('submit', setUserName);
}

init();
