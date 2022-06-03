// To display different time features

document.getElementById("feature-toggle").addEventListener("click",toggleFeature);

function toggleFeature() {
    var stopwatch_div = document.getElementById("stopwatch-container");
    var pomodoro_div = document.getElementById("pomodoro-container");
    if (stopwatch_div.style.display === "block") {
        stopwatch_div.style.display = "none";
        pomodoro_div.style.display = "block";
    }else {
        stopwatch_div.style.display = "block";
        pomodoro_div.style.display = "none";
    }
}

/* Stopwatch created with inspiration from:
https://www.youtube.com/watch?v=49f1cjZWRJA&ab_channel=TylerPotts */

// Global Variables

const elapsedTime = document.getElementById('watch-face');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

// Event Listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);
// Timer Function for ticking up seconds and the display of time
// Update the timer

function timer() {
    seconds ++;

    // Formatting our Time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds- (hrs * 3600)) / 60);
    let secs = seconds % 60;
    
    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    elapsedTime.innerText = `${hrs}:${mins}:${secs}`;

}

function start () {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    seconds = 0;
    elapsedTime.innerText = "00:00:00"
}

//Pomodoro Timer

