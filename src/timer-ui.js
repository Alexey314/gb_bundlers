"use strict";

const timerForm = document.getElementById("timer");
const timerInput = document.getElementById("timer__input");
const timerBtn = document.getElementById("timer__btn");
const timer = new Timer(timerUpdateHandler);
// import './howler.js';

const timerSound = new Howl({
    src: ['./assets/beep-09.mp3']
  });

timerForm.addEventListener("submit", timerFormEventHandler);

function renderTimerStartBtn(){
    timerBtn.innerText = "Старт";
}

function renderTimerStopBtn(){
    timerBtn.innerText = "Стоп";
}

function timerFormEventHandler(event) {
    event.preventDefault();
    if (timer.isStopped()) {
        timer.start(timerInput.value);
        renderTimerStopBtn();
    }
    else {
        timer.stop();
        renderTimerStartBtn();
    }
}

function playTimerSound(){
    timerSound.play();
}

function timerUpdateHandler(time) {
    timerInput.value = String(time);
    if (time == 0) {
        renderTimerStartBtn();
        playTimerSound();
    }
};
