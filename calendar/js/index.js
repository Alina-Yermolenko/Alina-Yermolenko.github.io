'use strict'

import '/js/weekNames.js';
import '/js/deleteInfo.js';
import '/css/style.scss';
import '/css/main.scss';

let tiles = document.querySelector('.calendar__list');
let data = document.querySelector('.calendar__data');
let previous = document.querySelector('.calendar__previous');
let next = document.querySelector('.calendar__next');
let monthNumber = new Date().getMonth();


const date = new Date();
let currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();

let createTiles = (daysInCurrentMonth) => {
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    let day = document.createElement('li');
    day.innerText = i;
    day.classList = 'calendar__item'
    tiles.appendChild(day);
    let today = new Date().getDate();

    if (i === +today && new Date().getMonth() === date.getMonth() && currentYear === new Date().getFullYear()) {
      day.style.background = 'rgb(0 0 0 / 54%)';
      day.className +=' today'
    }
  }
  data.innerHTML = `${date.toLocaleString('en-US', { month: 'long' })} ${currentYear}`;
  let dayWeekOfMonth = new Date(currentYear, monthNumber).getDay();

  if (dayWeekOfMonth === 0) {
    dayWeekOfMonth = 7
  }
  tiles.firstElementChild.style.gridColumn = dayWeekOfMonth;
}

previous.addEventListener('click', () => {
  date.setMonth(monthNumber -= 1)
  if (monthNumber === -1) {
    monthNumber = 11;
    currentYear -= 1
  }

  const daysInCurrentMonth = new Date(currentYear, monthNumber + 1, 0).getDate();
  if (tiles) {
    window.deleteTiles()
  }
  createTiles(daysInCurrentMonth)
})

next.addEventListener('click', () => {
  date.setMonth(monthNumber += 1)
  if (monthNumber === 12) {
    monthNumber = 0
    currentYear += 1;
  }

  const daysInCurrentMonth = new Date(currentYear, monthNumber + 1, 0).getDate();
  if (tiles) {
    window.deleteTiles()
  }
  createTiles(daysInCurrentMonth)
})

createTiles(daysInCurrentMonth);
