/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const navbarList = document.querySelector("#navbar__list");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const li = document.createElement("li");


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

const isInViewport = (elem) => {
  conts bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};





/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const menuItems = `
  <li class="menu__items"><a href="#section1">Section 1</a></li>
  <li class="menu__items"><a href="#section2">Section 2</a></li>
  <li class="menu__items"><a href="#section3">Section 3</a></li>
`;

navbarList.innerHTML = menuItems;


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
