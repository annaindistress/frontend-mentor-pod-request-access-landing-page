'use strict';

const form = document.querySelector('.form__item');
const input = document.querySelector('.form__input');
const error = document.querySelector('.form__error');

input.addEventListener('input', () => {
  error.textContent = '';
  error.classList.remove('form__error--active');
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if(!input.validity.valid) {
    if (input.validity.valueMissing) {
      error.textContent = 'Oops! Please add your email';
    } else {
      error.textContent = 'Oops! Please check your email';
    }
    error.classList.add('form__error--active');
  }
});
