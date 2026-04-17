export function initNavigation() {
  const hamBtn = document.querySelector("#ham-btn");
  const navBar = document.querySelector("#nav-bar");


  if (hamBtn && navBar) {
  hamBtn.addEventListener("click", () => {
    navBar.classList.toggle("show");
    hamBtn.classList.toggle("show");
});
}

    const links = document.querySelectorAll(".navigation a");

    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
  }
});

// Footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  "Last Modified: " + document.lastModified;
}