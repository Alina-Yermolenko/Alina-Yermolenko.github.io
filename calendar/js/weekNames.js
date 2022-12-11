const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let week = document.querySelector('.calendar__week');

weekdays.forEach(weekday => {
  let weekDay = document.createElement('li');
  weekDay.classList = 'calendar__item-week'
  weekDay.innerText = weekday;
  week.appendChild(weekDay);
})