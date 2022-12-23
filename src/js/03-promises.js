import Notiflix from 'notiflix';

const refs = {
  formEll: document.querySelector('.form'),
  delayEll: document.querySelector(`[name="delay" ]`),
  stepEll: document.querySelector(`[name="step"]`),
  amountEll: document.querySelector(`[name="amount"]`),
  btnEll: document.querySelector(`[type="submit"]`),
};

refs.formEll.addEventListener('submit', e => {
  e.preventDefault();

  const amount = Number(refs.amountEll.value);
  let delay = Number(refs.delayEll.value);
  const step = Number(refs.stepEll.value);

  refs.formEll.reset();
  // перебираємо проміс і на кожній ітерації створюємо проміс
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
});

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};
