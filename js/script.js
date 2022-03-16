//time
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const millisecondElement = document.querySelector(".millisecond");
//buttons
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const pauseButton = document.querySelector(".pause");
const newButton = document.querySelector(".new");
//variables
let hour = 0,
  minute = 0,
  second = 0,
  millisecond = 0,
  interval,
  counter = 0,
  disabled = true;
//listener
startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
  newButton.disabled = false;
});

pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  clearTimer();
  disableBtn();
});
newButton.addEventListener("click", () => {
  clearInterval(interval);
  counter++;
  const results = document.querySelector(".results");
  const block = document.createElement("div");
  block.classList.add("results_info");
  block.innerText = `Result ${counter}: ${hour}:${minute}:${second}:${millisecond}`;
  results.append(block);
  clearTimer();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
//
function disableBtn() {
  if (disabled) {
    newButton.disabled = true;
  }
}
disableBtn();
function startTimer() {
  //milliseconds
  millisecond++;
  if (millisecond < 10) {
    millisecondElement.innerText = "0" + millisecond;
  }
  if (millisecond >= 10) {
    millisecondElement.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondElement.innerText = "0" + second;
    millisecond = 0;
    millisecondElement.innerText = "0" + millisecond;
  }
  //seconds
  if (second < 10) {
    secondElement.innerText = "0" + second;
  }
  if (second >= 10) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }
  //minutes
  if (minute < 10) {
    minuteElement.innerText = "0" + minute;
  }
  if (minute >= 10) {
    minuteElement.innerText = minute;
  }
  if (minute > 59) {
    hour++;
    hourElement.innerText = "0" + hour;
    minute = 0;
    minuteElement.innerText = "0" + minute;
  }
  //hours
  if (hour < 10) {
    hourElement.innerText = "0" + hour;
  }
  if (hour >= 10) {
    hourElement.innerText = hour;
  }
}

function clearTimer() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  hourElement.innerText = "00";
  minuteElement.innerText = "00";
  secondElement.innerText = "00";
  millisecondElement.innerText = "00";
}
