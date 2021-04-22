"use strict";

import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import Timer from "./timer.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}


const timerForm = document.getElementById("timer");
const timerInput = document.getElementById("timer__input");
const timerBtn = document.getElementById("timer__btn");
const timer = new Timer(timerUpdateHandler);

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
    console.log("play sound");
}

function timerUpdateHandler(time) {
    timerInput.value = String(time);
    if (time == 0) {
        renderTimerStartBtn();
        playTimerSound();
    }
};