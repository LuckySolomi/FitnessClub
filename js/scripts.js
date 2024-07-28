window.addEventListener("scroll", function () {
  let header = document.querySelector(".main-header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

let dropMenu = document.querySelector(".drop-menu");

burgerSign.addEventListener("click", function () {
  dropMenu.classList.toggle("display-flex");
  event.stopPropagation();
});

dropMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    dropMenu.classList.remove("display-flex");
  });
});

document.addEventListener("click", function (event) {
  if (!dropMenu.contains(event.target) && event.target !== burgerSign) {
    dropMenu.classList.remove("display-flex");
  }
});
