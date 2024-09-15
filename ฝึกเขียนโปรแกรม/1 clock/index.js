function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[now.getMonth()];
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();
  const dateString = `${month} ${day}, ${year}`;

  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

setInterval(updateTime, 1000);

const calendarElement = document.querySelector('.calendar');

function createCalendar(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const monthElement = document.createElement('div');
  monthElement.classList.add('month');
  monthElement.textContent = `${monthNames[month]} ${year}`;
  calendarElement.appendChild(monthElement);

  const daysElement = document.createElement('div');
  daysElement.classList.add('days');
  calendarElement.appendChild(daysElement);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
    const dayNameElement = document.createElement('div');
    dayNameElement.classList.add('day', 'day-name');
    dayNameElement.textContent = weekDays[dayIndex];
    daysElement.appendChild(dayNameElement);
  }

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDayElement = document.createElement('div');
    emptyDayElement.classList.add('day', 'empty');
    daysElement.appendChild(emptyDayElement);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;
    daysElement.appendChild(dayElement);
  }
}

const now = new Date();
createCalendar(now.getFullYear(), now.getMonth());
