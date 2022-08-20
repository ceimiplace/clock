//added audio and sounds and button start + stop
let audio = null;
let start = document.querySelector(".play");
let stop = document.querySelector(".stop");
start.addEventListener("click", () => {
  audio = document.querySelector("audio");
});
stop.addEventListener("click", () => {
  audio = null;
});
//get info about time
//start
let date = new Date();
let minutes = date.getMinutes();
let hour = date.getHours();
let seconds = date.getSeconds();
//stop
//select from html
//start
let uiMinutes = document.querySelector(".minutes");
let uiSeconds = document.querySelector(".seconds");
let uiHours = document.querySelector(".hour");
let show = document.querySelector(".show");
//stop
uiSeconds.style.transform = `rotate(${-90 + seconds * 6}deg)`;
uiMinutes.style.transform = `rotate(${-90 + minutes * 6}deg)`;
uiHours.style.transform = `rotate(${-90 + hour * 30}deg)`;
let rotationSeconds = seconds;
let rotationMinutes = minutes;
let rotationHour = hour;

//display hour

function addZero(element) {
  if (element < 10) {
    return "0" + element;
  } else {
    return element;
  }
}
show.textContent = `${addZero(hour)}:${addZero(minutes)}:${addZero(seconds)}`;
//move arms and show hour

//
setInterval(() => {
  seconds++;
  rotationSeconds++;
  uiSeconds.style.transform = `rotate(${-90 + rotationSeconds * 6}deg)`;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    rotationMinutes++;
    uiMinutes.style.transform = `rotate(${-90 + rotationMinutes * 6}deg)`;
    if (minutes === 60) {
      minutes = 0;
      hour++;
      rotationHour++;
      uiHours.style.transform = `rotate(${-90 + hour * 30}deg)`;
      if (hour === 24) {
        hour = 0;
      }
    }
  }
  if (audio) {
    audio.play();
  }

  show.textContent = `${addZero(hour)}:${addZero(minutes)}:${addZero(seconds)}`;
}, 1000);
