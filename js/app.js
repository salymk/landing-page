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
  a.href = "#";
  li.appendChild(a);
  navbarList.appendChild(li);
  a.classList.add(sectionId);
  li.id = sectionId + "-btn";
  a.href = "#"+sectionId;
});

const scroll = new SmoothScroll('nav ul li a[href*="#"]', {
  speed: 800
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
