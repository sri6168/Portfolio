function toggleMenu() {
  // Select the elements with the classes "menu-links" and "hamburger-icon"
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Toggle the "open" class for both the menu and the icon
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
