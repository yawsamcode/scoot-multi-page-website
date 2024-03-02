const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  console.log("you clicked");
});
