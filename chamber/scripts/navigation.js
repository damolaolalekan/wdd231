const hamBtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

hamBtn.addEventListener("click", () => {
    navBar.classList.toggle("show");
    hamBtn.classList.toggle("show");
});

const links = document.querySelectorAll(".navigation a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});