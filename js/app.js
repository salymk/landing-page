//Smooth scrolling module
import jump from '/js/jump.js'

/**
  Define Global Variables
*/

const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const h2 = document.querySelectorAll("h2");


/**
  Navigation is built dynamically as an unordered list.
  If you add new section, it would create a menu item for it
*/

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
  Select all a tags created
*/
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");

/**
  When clicking an item from the navigation menu, the link should scroll to the appropriate section.
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
    It should be clear which section is being viewed while scrolling through the page.
    The Intersection Observer API provides a way to asynchronously observe changes in
    the intersection of a target element with an ancestor element or with a top-level.
*/
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


const li = document.querySelectorAll("li");

li.forEach(i => {
  if(i.click === "true") {
    i.style.border = "1px solid red;"
  }
});
