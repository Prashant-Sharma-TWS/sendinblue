window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  var windowPosition = window.scrollY > 0;

  header.classList.toggle("scrolling-active", windowPosition);
});

var hamburger = document.getElementsByClassName("hamburger")[0];
var menu = document.getElementsByClassName("menu")[0];

var menuOpen = false;
hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    menu.style.display = "flex";
    menu.classList.toggle("down");
    hamburger.classList.add("open");
    menuOpen = true;
  } else {
    menu.style.display = "none";
    menu.classList.toggle("down");
    hamburger.classList.remove("open");
    menuOpen = false;
  }
});

var parentDropDownSelector = document.getElementsByClassName(
  "parent-drop-down-selector"
);
var menuDropDown = document.getElementsByClassName("menu-drop-down");
window.addEventListener("resize", () => {
  if (window.innerWidth > 950) {
    menu.style.display = "flex";
    menuDropDown[0].style.display = "none";
    menuDropDown[1].style.display = "none";
    menuDropDown[2].style.display = "none";
  } else {
    menuDropDown[0].style.display = "block";
    menuDropDown[1].style.display = "block";
    menuDropDown[2].style.display = "block";
  }
});

// solution drop down
parentDropDownSelector[0].addEventListener("mouseover", () => {
  menuDropDown[0].style.display = "block";
});
parentDropDownSelector[0].addEventListener("mouseout", () => {
  menuDropDown[0].style.display = "none";
});
menuDropDown[0].addEventListener("mouseover", () => {
  menuDropDown[0].style.display = "block";
});
menuDropDown[0].addEventListener("mouseout", () => {
  menuDropDown[0].style.display = "none";
});
// features drop down
parentDropDownSelector[1].addEventListener("mouseover", () => {
  menuDropDown[1].style.display = "flex";
});
parentDropDownSelector[1].addEventListener("mouseout", () => {
  menuDropDown[1].style.display = "none";
});
menuDropDown[1].addEventListener("mouseover", () => {
  menuDropDown[1].style.display = "flex";
});
menuDropDown[1].addEventListener("mouseout", () => {
  menuDropDown[1].style.display = "none";
});
// resources drop down
parentDropDownSelector[2].addEventListener("mouseover", () => {
  menuDropDown[2].style.display = "block";
});
parentDropDownSelector[2].addEventListener("mouseout", () => {
  menuDropDown[2].style.display = "none";
});
menuDropDown[2].addEventListener("mouseover", () => {
  menuDropDown[2].style.display = "block";
});
menuDropDown[2].addEventListener("mouseout", () => {
  menuDropDown[2].style.display = "none";
});
