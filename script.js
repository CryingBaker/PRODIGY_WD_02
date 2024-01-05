// script.js
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const lap = document.getElementById('lap');
const laps = document.getElementById('laps');

let startTime, running, elapsedTime = 0;

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    running = true;
    updateStopwatch();
}

function stopStopwatch() {
    running = false;
}

function resetStopwatch() {
    stopStopwatch();
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
    laps.innerHTML = '';
    elapsedTime = 0;
}

function updateStopwatch() {
    if (running) {
        elapsedTime = Date.now() - startTime;
        const hoursTime = Math.floor(elapsedTime / 3600000);
        const minutesTime = Math.floor((elapsedTime % 3600000) / 60000);
        const secondsTime = Math.floor((elapsedTime % 60000) / 1000);
    
        hours.textContent = ('0' + hoursTime).slice(-2);
        minutes.textContent = ('0' + minutesTime).slice(-2);
        seconds.textContent = ('0' + secondsTime).slice(-2);
    
        setTimeout(updateStopwatch, 1000);
    }
}

function lapStopwatch() {
    if (running) {
        const li = document.createElement('li');
        li.textContent = `${hours.textContent}:${minutes.textContent}:${seconds.textContent}`;
        laps.appendChild(li);
    }
}

start.addEventListener('click', startStopwatch);
stop.addEventListener('click', stopStopwatch);
reset.addEventListener('click', resetStopwatch);
lap.addEventListener('click', lapStopwatch);