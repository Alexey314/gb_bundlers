"use strict";

const TIMER_STOPPED = 0;
const TIMER_RUNNING = 1;

export class Timer {
    constructor(onTimerUpdateHandler) {
        this._state = TIMER_STOPPED;
        this._time = 0;
        this._timerId = null;
        this._onTimerUpdateHandler = onTimerUpdateHandler;
    }

    _timerHandler() {
        this._time -= 1;
        if (this._time <= 0){
            this.stop();
        }
        if (this._onTimerUpdateHandler != null) {
            this._onTimerUpdateHandler(Math.max(0,this._time));
        }
    }

    start(seconds) {
        this._time = Number(seconds);
        this._state = TIMER_RUNNING;
        this._timerId = setInterval(this._timerHandler.bind(this), Math.min(1000,this._time*1000));
    }

    stop() {
        clearTimeout(this._timerId);
        this._state = TIMER_STOPPED;
        this._time = 0;
    }

    isStopped() {
        return this._state == TIMER_STOPPED;
    }

    isRunning() {
        return this._state == TIMER_RUNNING;
    }

    getTime() {
        return this._time;
    }
}