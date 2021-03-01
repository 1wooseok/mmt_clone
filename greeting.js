const greeting_box = document.querySelector('.greeting_box');
const greeting = document.querySelector('.greeting');
const more = document.querySelector('.more');

//const USER_LS = 'USER';

function edit_userName() {
    console.log("Edit your name?");
}

function paintGreeting() {
    const currentUser = localStorage.getItem('USER');
    greeting.style.WebkitAnimation = 'fadeOut 2s';
    greeting.style.animation = 'fadeOut 2s';
    greeting.innerText = `Welcome, ${currentUser} !`;
}

// function onMouseOver(event) {
//     more.classList.toggle('none');
// }

function init() {
    paintGreeting();
    more.addEventListener('click', edit_userName);
    //greeting_box.addEventListener('mouseover', onMouseOver);
}

init();


// Animation 공부하기 
// text_bar 꾸미기
// main_focus 기능 추가.