const quote = document.querySelector('.quote');

const arr = ["'have courage, and be kind'",
             "'No pressure, No diamonds'",
             "'Try again, Fail agin, Fail better.'",
             "'Eat the frog'"];

function init() {
    var i = Math.floor(Math.random() * arr.length);
    quote.style.WebkitAnimation = 'fadeOut 2s';
    quote.style.animation = 'fadeOut 2s';
    quote.innerText = arr[i];
}

init();


