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

// target === where you want to scroll
// duration === how long you want the scroll effect to take
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  // returns coordinates relative to the viewport
  var targetPosition = target.getBoundingClientRect().top;
  // returns coordinates relative to the window
  var startPosition = window.pageYOffset;
  // returns distance
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    // Vertically scrolls
    window.scrollTo(0, run);
    // If timeElapsed is less than duration, call requestAnimationFrame.
    // This method tells the browser that you wish to perform an animation and requests
    // that the browser calls a specified function to update an animation before the next repaint
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing
    function ease (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
  };

  requestAnimationFrame(animation);
}

section1.addEventListener("click", function () {
  smoothScroll(".section2", 1000);
});


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
