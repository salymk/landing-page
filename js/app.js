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
const li = document.createElement("li");

// const sectionOne = li.textContent = "Section One";
// const sectionTwo = li.textContent = "Section Two";
// const sectionThree = li.textContent = "Section Three";

const menuItems = `
  <li>Section One</li>
  <li>Section Two</li>
  <li>Section Three</li>
`;

navbarList.innerHTML(menuItems).appendChild(menuItems);


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


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
