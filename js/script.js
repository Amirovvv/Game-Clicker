'use strict'; 

let clicks = 1;

const TIMEOUT = 5000;

const display = document.getElementById('display');
const button = document.getElementById('button');
const counter  = document.getElementById('counter');
const restart = document.getElementById('restart');

button.onclick = start;

function start() {
    const starttime = Date.now();

    display.textContent = formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - starttime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Game Over';
        restart.style.display = 'block';

        clearInterval(interval);
    }, TIMEOUT);


    function formatTime(ms) {
        return Number.parseFloat(ms / 1000).toFixed(2);
    }

    restart.addEventListener('click', () => {
        location.reload();
    });

}