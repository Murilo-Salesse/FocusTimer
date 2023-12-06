import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  sounds.buttonPressAudio.play();
  document.documentElement.classList.remove("running");
  timer.updateDisplay();

  sounds.cardTreeAudio.pause();
  sounds.cardRainAudio.pause();
  sounds.cardStoreAudio.pause();
  sounds.cardFireAudio.pause();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function plusFive() {
  timer.plusFive();
}

export function lessFive() {
  timer.lessFive();
}

export function pauseRunning() {
  timer.pauseAndBack();
  sounds.buttonPressAudio.play();

}

// cards
export function soundTree() {
  if (sounds.cardStoreAudio || sounds.cardRainAudio || sounds.cardFireAudio) {
    sounds.cardStoreAudio.pause();
    sounds.cardRainAudio.pause();
    sounds.cardFireAudio.pause();
  }
  sounds.cardTreeAudio.play();
}

export function soundRain() {
  if (sounds.cardStoreAudio || sounds.cardTreeAudio || sounds.cardFireAudio) {
    sounds.cardStoreAudio.pause();
    sounds.cardTreeAudio.pause();
    sounds.cardFireAudio.pause();
  }
  sounds.cardRainAudio.play();
}

export function soundStore() {
  if (sounds.cardTreeAudio || sounds.cardRainAudio || sounds.cardFireAudio) {
    sounds.cardTreeAudio.pause();
    sounds.cardRainAudio.pause();
    sounds.cardFireAudio.pause();
  }
  sounds.cardStoreAudio.play();
}

export function soundFire() {
  if (sounds.cardStoreAudio || sounds.cardRainAudio || sounds.cardTreeAudio) {
    sounds.cardStoreAudio.pause();
    sounds.cardRainAudio.pause();
    sounds.cardTreeAudio.pause();
  }
  sounds.cardFireAudio.play();
}

