const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  console.log("you clicked");
});



// ********ACCORDION*******
// const items = document.querySelectorAll("#accordion .item .header");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.currentTarget.closest(".item").classList.toggle("active");
//   });
// });

let items = document.querySelectorAll("#accordion .item .header");

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      items.forEach((header) => {
        const closestItem = header.closest(".item");
        if (closestItem !== e.currentTarget.closest(".item")) {
          closestItem.classList.remove("active");
        }
      });

      e.currentTarget.closest(".item").classList.toggle("active");
    });
  });