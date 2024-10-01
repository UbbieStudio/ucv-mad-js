/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    const clock = document.getElementById('clock');
    let now = new Date();
    let currentTime = now.toString();

    if (clock.innerHTML != currentTime) {
        clock.innerHTML = currentTime;
    }

}, 1000);

function stopClock() { 
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () { 
    console.log("Hello, world!");
}
