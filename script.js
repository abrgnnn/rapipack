
const burgerBtn = document.getElementById('burger-btn');
const navLinks = document.querySelector('.nav-links');

burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
});
