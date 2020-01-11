//Smooth scrolling module
import jump from '/js/jump.js'


//1) Create the Nav Links for every section you have on the page.
//2) Add "click" event listeners on every Nav links you created.
//3) When user clicks on the link, scroll to the corresponding section.
//4)  When a section is in the view, highlight the section as well as the corresponding Nav link by adding some kind of active state to them.

/**
 * Define Global Variables
 *
*/

const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

/**
 * 1) Create the Nav Links for every section on the page
 *
*/

//Dynamically creates the navbar
//If you add new section, it would create a
//menu item for it.
sections.forEach((element) => {
  const menuItem = element.dataset.nav;
  const sectionId = element.id;
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = menuItem;
  // a.href = `#${sectionId}`;
  a.href = "#";
  li.appendChild(a);
  navbarList.appendChild(li);
  a.classList = sectionId;
});

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");


section1.addEventListener("click", () => {
  jump("#section1");
});

section2.addEventListener("click", () => {
  jump("#section2");
});

section3.addEventListener("click", () => {
  jump("#section3");
});

section4.addEventListener("click", () => {
  jump("#section4");
});
