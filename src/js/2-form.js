'use strict';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

formData = JSON.parse(localStorage.getItem(localStorageKey)) || {
  email: '',
  message: '',
};
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', evt => {
  const fieldName = evt.target.name;
  const fieldValue = evt.target.value;
  formData[fieldName] = fieldValue.trim(); 
  localStorage.setItem(localStorageKey, JSON.stringify(formData)); 
});

form.addEventListener('submit', evt => {
  evt.preventDefault(); 
  if (!formData.email || !formData.message) {
    alert('Fill please all fields'); 
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();

  formData = { email: '', message: '' };
});