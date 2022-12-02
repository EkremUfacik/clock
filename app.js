setInterval(time, 1000);

function time() {
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let day = new Date().toLocaleString("en-tr", { weekday: "long" });
  let session = "AM";

  const clock = document.getElementById("clock");
  const calendar = document.getElementById("calendar");
  const currentDay = document.getElementById("current-day");

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  if (date < 10) date = "0" + date;
  if (month < 10) month = "0" + month;

  clock.innerText = hours + ":" + minutes + ":" + seconds + " " + session;
  calendar.innerText = date + "/" + month + "/" + year;
  currentDay.innerText = day;
}
