const sidebar = document.querySelector(".sidebar");
const menuToggler = document.querySelector(".menu-toggler");
const langBtn = document.querySelector(".langBtn");
const langBox = document.querySelector(".langBox");


function updateSidebarPosition() {
  const dir = document.documentElement.getAttribute("dir");
  if (sidebar) {
    sidebar.style.marginLeft = dir === "rtl" ? "auto" : "0px";
    sidebar.style.marginRight = dir === "rtl" ? "0px" : "auto";
  }
}

function changeDirection(dir) {
  document.documentElement.setAttribute("dir", dir);
  updateSidebarPosition();
}

function toggleLanguage() {
  const currentDir = document.documentElement.getAttribute("dir");
  const newDir = currentDir === "rtl" ? "ltr" : "rtl";
  langBox.innerHTML = newDir === "rtl" ? "En" : "Ar";
  changeDirection(newDir);
}

function toggleMenu() {
  const isMenuActive = sidebar.classList.toggle("menu-close");
  const currentDir = document.documentElement.getAttribute("dir");
  sidebar.style[currentDir === "rtl" ? "marginRight" : "marginLeft"] = isMenuActive ? "-250px" : "0px";
  const togglerSpan = menuToggler.querySelector("span");
  if (togglerSpan) {
    togglerSpan.innerText = isMenuActive ? "menu" : "close";
  }
}
if (langBtn) {
  langBtn.addEventListener("click", toggleLanguage);
} else {
  console.error("langBtn does not exist!");
}

menuToggler.addEventListener("click", toggleMenu);

updateSidebarPosition();
  