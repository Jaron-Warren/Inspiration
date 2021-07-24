import { ProxyState } from "../AppState.js";

//Private
function _drawClock(clock) {
  document.getElementById("clock").innerText = `${clock.time}`
  document.getElementById("date").innerText = `${clock.date}`
}

function _startClock() {
  _updateClock()
  setInterval(_updateClock, 60000)
}

function _updateClock() {
  let clock = {
    date: new Date().toDateString(),
    time: ''
  }
  clock.time = `${new Date().getHours()}:${_getMinutes()}`
  _drawClock(clock)
}

function _getMinutes() {
  let minutes = new Date().getMinutes()
  if (minutes < 10) {
    return `0${minutes.toString()}`
  } else {
    return minutes
  }
}

//Public
export default class ClockController {
  constructor() {
    _startClock()
  }
}
