const btn = document.getElementById("btn");
const body = document.getElementById("body");
btn.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
});