const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getCurrentDate(dateObj) {
  const day = DAYS[dateObj.getDay()];
  const date =
    dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
  const month = MONTHS[dateObj.getMonth()];
  return `${day} ${date} ${month}`;
}
function getCurrentTime(dateObj) {
  const hour =
    dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours();
  const minute = dateObj.getMinutes();
  const meridiem = hour > 11 ? "PM" : "AM";
  return `${hour}:${minute} ${meridiem}`;
}

export default function CurrentDateTime() {
  let dateObj = new Date();
  return { date: getCurrentDate(dateObj), time: getCurrentTime(dateObj) };
}
