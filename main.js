const offscreen = document.getElementById("off-screen");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",()=>{
  offscreen.classList.toggle("active")
  hamburger.classList.toggle("active")
} )
