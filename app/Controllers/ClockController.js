import { ProxyState } from "../AppState.js";

//Private
function _drawClock(time) {
  document.getElementById("clock").innerText = time
}

function _clock() {
  let clock = 'null'
  setInterval(() => clock = new Date().toDateString(), 60000)
  setInterval(() => _drawClock(clock), 60000)
}

//Public
export default class ClockController {
  constructor() {
    _clock()
  }
}
