const body = document.body;


body.classList.add('theme-dark');

const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });