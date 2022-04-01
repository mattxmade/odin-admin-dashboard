const menuAside = document.querySelector('.dashboard-aside');
const menuButtons = document.querySelectorAll('.js-menu-toggle');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
    menuAside.classList.toggle('translate-menu');
  });
});

window.addEventListener('resize', (e) => {
  if (window.innerWidth >= 1200 && menuAside.classList.contains('translate-menu')) {
    menuAside.classList.toggle('translate-menu');
  }
});