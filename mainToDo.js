const todo_form = document.querySelector('.todo_form');
const mainFocus = document.querySelector('.mainFocus');
const asking_main_focus = document.querySelector('.asking_main_focus');
const main_box = document.querySelector('.main_box');
const mainFocus2 = document.querySelector('.mainFocus2');
const todays_main_focus = document.querySelector('.todays_main_focus');
const del_btn = document.querySelector('.del_btn');

const TODO_LS = 'MainTodo';

function getToDo() {
    const todays_main_focus = localStorage.getItem(TODO_LS);
    if(todays_main_focus !== null){
        next(todays_main_focus);
        
    } else {
        asking();
        todo_form.addEventListener('submit', setMainToDo);
    }
}

function del_main_focus() {
    localStorage.removeItem(TODO_LS);  
    main_box.value = ""; 
    asking_main_focus.style.WebkitAnimation = 'fadeOut 2s';
    asking_main_focus.style.animation = 'fadeOut 2s'
    main_box.style.WebkitAnimation = 'fadeOut 2s';
    main_box.style.animation = 'fadeOut 2s'

    mainFocus2.classList.toggle('none');
    asking_main_focus.classList.toggle('none');
    main_box.classList.toggle('none');
    asking_main_focus.innerText = `What is your main focus for today?`;
}

function setMainToDo(event) {
    event.preventDefault();
    const main_focus = main_box.value;
    localStorage.setItem(TODO_LS, main_focus);

    mainFocus2.style.WebkitAnimation = 'fadeOut 2s';
    mainFocus2.style.animation = 'fadeOut 2s';

    next(main_focus);
}

function next(text) {
    mainFocus.style.WebkitAnimation = 'fadeOut 2s';
    mainFocus.style.animation = 'fadeOut 2s';

    asking_main_focus.classList.toggle('none');
    main_box.classList.toggle('none');

    mainFocus2.classList.toggle('none');
    todays_main_focus.innerText = text;
}

function asking() {
    mainFocus.style.WebkitAnimation = 'fadeOut 2s';
    mainFocus.style.animation = 'fadeOut 2s';
    asking_main_focus.innerText = `What is your main focus for today?`;
}

function onMouseOver(event) {
    console.log('mouse on');
}

function init() {
    getToDo();  
    mainFocus2.addEventListener('mouseover', onMouseOver);
    del_btn.addEventListener('click', del_main_focus); 
}

init();
