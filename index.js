function showMenu() {
  const hamburger = document.querySelector(".fa-bars");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.toggleAttribute("hidden");
  });
}

showMenu();
