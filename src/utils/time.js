let now = new Date();
const arrOfDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const arrOfMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Time = {
  currentDate: now.getDate(),
  currentDay: arrOfDays[now.getDay()],
  currentMonth: arrOfMonths[now.getMonth()],
  currentYear: now.getFullYear(),
};

export { Time };
