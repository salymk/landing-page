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
  a.href = `#${sectionId}`;
  li.appendChild(a);
  navbarList.appendChild(li);
  a.classList = sectionId;
});




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

const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");

section1.addEventListener('click', function () {
  smoothScroll(".section2", 1000);
});

section2.addEventListener('click', () => {
  smoothScroll(".section1", 1000);
});
