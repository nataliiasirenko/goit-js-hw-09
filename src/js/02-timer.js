import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const textEll = document.querySelector(`#datetime-picker`);
const btn = document.querySelector(`button[data-start]`);
const daysEl = document.querySelector(`[data-days]`);
const hoursEl = document.querySelector(`[data-hours]`);
const minutesEl = document.querySelector(`[data-minutes]`);
const secondsEl = document.querySelector(`[data-seconds]`);

btn.disabled = true;
let selectedDate;
let intervalId;


function onCountStart(e) {
  intervalId = setInterval(() => {
    handlerButtonStart();
  }, 1000);
}

function handlerButtonStart() {
  const differentTime = selectedDate - new Date();
  if (differentTime <= 0) {
    clearInterval(intervalId);
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(differentTime);
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < options.defaultDate) {
      btn.disabled = true;
      Notiflix.Notify.failure(`Please choose a date in the future`);
    } else {
      btn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

flatpickr(textEll, options);

btn.addEventListener(`click`, onCountStart);