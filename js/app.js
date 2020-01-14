//Smooth scrolling module
import jump from '/js/jump.js'
//Scrolling animation
sal();


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


// const aTags = document.querySelectorAll('a');

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
  a.classList.add(sectionId);
  li.setAttribute("id", `#${sectionId}-btn`);
});


/**
 * Testing Area
 *
*/

//Select all a elements
//Iterate over them to get class names
//add addEventListener to classes
//use jump() to scroll to different sections



//'a' tags
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");


/**
 * 2) Add "click" event listeners on every Nav links you created.
 * 3) When user clicks on the link, scroll to the corresponding section.
 *
*/
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


/**
 * 4)  When a section is in the view, highlight the section as well as the corresponding
 *     Nav link by adding some kind of active state to them.
 *
*/
const h2 = document.querySelectorAll("h2");
const section1Btn = document.querySelector("#section1-button");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.classList.add("active-section");
    } else {
      entry.target.classList.remove("active-section");
    }
  });
});

h2.forEach(h => {
  observer.observe(h);
});



h2.forEach(h => {
  if(h.classList.contains("active-section")) {
    console.log("contains");
  }
});



// h2.forEach((h) => {
//   if(h.classList.contains("active-section")) {
//     console.log("contains");
//   }
// });

// li.forEach(i => {
//   if(h2.classList.contains("active-section")) {
//     i.classList.add("active-li");
//   } else {
//     i.classList.remove("active-li");
//   }
// });

// li.forEach(i => {
//   h2.forEach(h => {
//     if(h.target.classList.contains('active-section')) {
//       i.target.classList.add("active-li");
//     } else {
//       i.target.classList.remove("active-li");
//     }
//   });
// });
