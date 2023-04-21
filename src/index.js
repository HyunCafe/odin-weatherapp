console.log('hello world')


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  hamburger.classList.toggle('open');
});