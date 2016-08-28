// Toggle Hamburger Menu in Mobile View

var burgerMenuItems = document.getElementById("burger-menu-items");
var hamburger = document.getElementById("hamburger");

function toggleBurgerMenu() {
  if (burgerMenuItems.className == "toggle-burger") {
    burgerMenuItems.className = " ";
    hamburger.setAttribute("fill", "#A00000");
  } else {
    burgerMenuItems.className = "toggle-burger"
    hamburger.setAttribute("fill", "green");
  }
}
