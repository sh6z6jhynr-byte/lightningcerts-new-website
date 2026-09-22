const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

if (menu && nav) {
  menu.setAttribute('aria-expanded', 'false');

  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    });
  });
}
