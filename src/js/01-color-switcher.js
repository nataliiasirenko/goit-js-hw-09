const btnStart = document.querySelector(`button[data-start]`);
const btnStop = document.querySelector(`button[data-stop]`);
const body = document.querySelector(`body`);
let timerCountId = null;

btnStart.addEventListener(`click`, onStartClick);

btnStop.addEventListener(`click`, onStoptClick);
btnStop.disabled = true;

function onStartClick() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerCountId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStoptClick() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerCountId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
