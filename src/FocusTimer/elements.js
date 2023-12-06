export const controls = document.querySelector(".controls");
export const cards = document.querySelector("#cards-wrappers");
export const minutes = document.getElementById("minutes");
export const seconds = document.getElementById("seconds");

document.getElementById("pauseTimer").addEventListener("click", () => {
  document.getElementById("cardTree").classList.remove("active");
  document.getElementById("cardRain").classList.remove("active");
  document.getElementById("cardStore").classList.remove("active");
  document.getElementById("cardFire").classList.remove("active");
});

document.getElementById("cardTree").addEventListener("click", function () {
  document.getElementById("cardTree").classList.remove("active");
  document.getElementById("cardRain").classList.remove("active");
  document.getElementById("cardStore").classList.remove("active");
  document.getElementById("cardFire").classList.remove("active");

  this.classList.add("active");
});

document.getElementById("cardRain").addEventListener("click", function () {
  document.getElementById("cardTree").classList.remove("active");
  document.getElementById("cardRain").classList.remove("active");
  document.getElementById("cardStore").classList.remove("active");
  document.getElementById("cardFire").classList.remove("active");

  this.classList.add("active");
});

document.getElementById("cardStore").addEventListener("click", function () {
  document.getElementById("cardTree").classList.remove("active");
  document.getElementById("cardRain").classList.remove("active");
  document.getElementById("cardStore").classList.remove("active");
  document.getElementById("cardFire").classList.remove("active");

  this.classList.add("active");
});

document.getElementById("cardFire").addEventListener("click", function () {
  document.getElementById("cardTree").classList.remove("active");
  document.getElementById("cardRain").classList.remove("active");
  document.getElementById("cardStore").classList.remove("active");
  document.getElementById("cardFire").classList.remove("active");

  this.classList.add("active");
});
