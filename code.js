function toggleBurgerMenu() {
  if (document.getElementById("burger-menu-items").className == "toggle-burger") {
    document.getElementById("burger-menu-items").className = " ";
    document.getElementById("hamburger").setAttribute("fill", "#A00000");
  } else {
    document.getElementById("burger-menu-items").className += "toggle-burger"
    document.getElementById("hamburger").setAttribute("fill", "green");
  }

}
