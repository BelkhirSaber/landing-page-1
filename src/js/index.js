"use strict";

const menu = document.querySelector(".menu");
const moreLink = document.querySelector("#megamenu");
const skillsContianer = document.querySelector(".our-skills");
const skillProgElements = skillsContianer.querySelectorAll(".progress-value");
const el = document.querySelectorAll(".event .counter .count");
let days = 365,
  hours = 23,
  munites = 59,
  seconds = 60;
const ourStats = document.querySelector(".our-stats");
const statsElement = document.querySelectorAll(".stats-content .item strong");
let started = false;

// display mega menu
moreLink.onmouseover = function () {
  menu.classList.add("active");
};
moreLink.onmouseleave = function () {
  menu.classList.remove("active");
};
menu.onmouseover = function () {
  menu.classList.add("active");
};
menu.onmouseleave = function () {
  menu.classList.remove("active");
};

window.onscroll = function () {
  // skills animate progressBar
  if (scrollY >= skillsContianer.offsetTop - 100) {
    skillProgElements.forEach((el) => {
      el.style.width = el.dataset.width;
    });
  }
  // our-stats increase stats
  if (scrollY >= ourStats.offsetTop) {
    if (!started) {
      statsElement.forEach((el) => countUp(el));
    }
    started = true;
  }
};

// event counter
function initCounter(sec, mun, hour) {
  if (sec) seconds = 60;
  if (mun) munites = 59;
  if (hour) hours = 23;
}

function strPad(val, padLenght) {
  return val.toString().padStart(padLenght, "0");
}

function counter() {
  seconds--;
  el.item(3).firstElementChild.innerHTML = strPad(seconds, 2);
  if (seconds == 0 && munites == 0 && hours == 0) {
    initCounter(true, true, true);
    days--;
    el.item(0).firstElementChild.innerHTML = strPad(days, 3);
  } else if (seconds == 0 && munites == 0) {
    hours--;
    initCounter(true, true, false);
    el.item(1).firstElementChild.innerHTML = strPad(hours, 2);
  } else if (seconds == 0) {
    munites--;
    initCounter(true, false, false);
    el.item(2).firstElementChild.innerHTML = strPad(munites, 2);
  }
}

setInterval(counter, 1000);

function countUp(el) {
  let value = el.dataset.value;
  let countID = setInterval(() => {
    el.textContent++;
    if (el.textContent == value) clearInterval(countID);
  }, 2000 / value);
}
