const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const elem = document.querySelector('.main-carousel');

const inputField = document.querySelector('input');
const errorMessage = document.getElementById('error-message');

const myButton = document.getElementById('myButton');

let init = false;
let swiper = null;

swiperInit();
window.addEventListener('resize', swiperInit);
function swiperInit() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper', {
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'dot--active',
          bulletClass: 'dot',
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

inputField.addEventListener('blur', () => {
  const email = inputField.value;
  if (!validateEmail(email)) {
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
