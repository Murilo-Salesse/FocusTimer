import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";
import * as sounds from "./sounds.js";

export function countDown() {
  clearTimeout(state.setTimeout);

  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset();
    kitchenTimer.play();
    return;
  }

  updateDisplay(minutes, seconds);

  state.countdownId = setTimeout(() => countDown(), 1000);
}

export function plusFive() {
  let fiveMore = Number(el.minutes.textContent);
  fiveMore += 5;

  el.minutes.innerText = fiveMore;
}

export function lessFive() {
  let fiveLess = Number(el.minutes.textContent);
  fiveLess -= 5;

  el.minutes.innerText = fiveLess;
}

export function pauseAndBack() {
  if (state.isRunning) {
    state.isRunning = false;
    clearTimeout(state.countdownId);
  } else {
    clearTimeout(state.setTimeout);
    state.isRunning = true;
    countDown();
  }
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
