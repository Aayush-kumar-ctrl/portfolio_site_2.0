// Toggle mobile navbar
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Simple scroll animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 400) {
            section.classList.add('show');
        }
    });
});
