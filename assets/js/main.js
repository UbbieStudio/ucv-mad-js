
console.log("Hello, world!");

let intervalId = window.setInterval(function () {
    console.log("Clock isn't working yet!");
}, 10000);

function stopClock() { 
    clearInterval(intervalId);
}