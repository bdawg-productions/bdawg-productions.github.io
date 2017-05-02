var menuNav, menuButton, audio;

window.onload = function() {
  menuNav = document.getElementById("menu-nav");
  menuButton = document.getElementById("menu-button");
}

function playAudio() {
  audio.play();
}

function toggleMenu() {
  menuNav.classList.toggle("nav-show");
  menuButton.classList.toggle("rotate-cw");
}
