const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

const inputField = document.querySelector('input');
const errorMessage = document.getElementById('error-message');

const myButton = document.getElementById('myButton');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

inputField.addEventListener('blur', () => {
  if (inputField.value === '') {
    errorMessage.classList.remove('hidden');
  } else {
    errorMessage.classList.add('hidden');
  }
});

function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

myButton.addEventListener('click', (e) => {
  e.preventDefault();
});
