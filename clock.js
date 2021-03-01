const myClock = document.querySelector('.myClock');

function clock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    myClock.innerText = `${(hours < 10) ? `0${hours}`:hours}:${(minutes < 10) ? `0${minutes}` : minutes}`;
}

function init() {
    myClock.style.WebkitAnimation = 'fadeOut 2s';
    myClock.style.animation = 'fadeOut 2s';
    clock();
    setInterval(clock, 1000);
}

init();


// 삼항 연산자.