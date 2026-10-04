const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menu) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id;
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});
