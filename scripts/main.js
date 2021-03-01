const menuOpen = document.querySelector(".navbar__menu-icon--open");
const menuClose = document.querySelector(".navbar__menu-icon--close");
const nav = document.querySelector(".navbar__nav");

menuOpen.addEventListener("click", (evt) => {
  evt.target.style.display = "none";
  menuClose.style.display = "block";
  nav.style.display = "flex";
});

menuClose.addEventListener("click", (evt) => {
  evt.target.style.display = "none";
  menuOpen.style.display = "block";
  nav.style.display = "none";
});

window.addEventListener("resize", (evt) => {
  if (evt.target.innerWidth >= 768) {
    nav.style.display = "flex";
  } else if (evt.target.innerWidth < 768) {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    nav.style.display = "none";
  }
});
