let lightMode = true;
const changeButtonTheme = document.getElementById("toggle-mode");

changeButtonTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
