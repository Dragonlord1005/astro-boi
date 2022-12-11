let isMenuOpen = false;
const toggleMenu = () => {
  const menuElement = document.getElementById("menu");
  if (menuElement) {
    if (isMenuOpen) {
      menuElement.style.display = "none";
      isMenuOpen = false;
    } else {
      menuElement.style.display = "block";
      isMenuOpen = true;
    }
  }
};

const menuButtonElement = document.getElementById("menu-button");
if (menuButtonElement) {
  menuButtonElement.addEventListener("click", toggleMenu);
}
