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

const playlist = [
    {
        name: 'Comes love.m4a',
        source: 'https://www.youtube.com/watch?v=_WifOsGaBh4'
    }
];

window.onload = function () {
    console.log("Hello, world!");

    const player = document.getElementById('audio-player');
    console.dir(player);
    console.log(player);
    console.log(player.src);
}
