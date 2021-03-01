const todo_form = document.querySelector('.todo_form');
const mainFocus = document.querySelector('.mainFocus');
const asking_main_focus = document.querySelector('.asking_main_focus');
const main_box = document.querySelector('.main_box');

const TODO_LS = 'MainTodo';

function something(event) {
    event.preventDefault();
    const main_focus = main_box.value;
    console.log(main_focus);
    localStorage.setItem(TODO_LS, main_focus);

    asking_main_focus.style.WebkitAnimation = 'fadeOut 2s';
    asking_main_focus.style.animation = 'fadeOut 2s';
    main_box.style.WebkitAnimation = 'fadeOut 2s';
    main_box.style.animation = 'fadeOut 2s';

    asking_main_focus.classList.toggle('none');
    main_box.classList.toggle('none');
}

function a() {
    mainFocus.style.WebkitAnimation = 'fadeOut 2s';
    mainFocus.style.animation = 'fadeOut 2s';
    asking_main_focus.innerText = `What is your main focus for today?`;
}

function init() {
    a();
    todo_form.addEventListener('submit', something);
}

init();
