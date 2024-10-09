/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    console.log("Clock isn't working yet!");
}, 10000);

function stopClock() {
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () {
    console.log("Hello, world!");
    console.log(Math.random());
}

function changeEmojiColor(elem) {
    const r = randInt(0, 255);
    const g = randInt(0, 255);
    const b = randInt(0, 255);
    elem.style.fill = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}