// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// show / hide mobile nav
const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

const openNav = () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
}

openBtn.addEventListener('click', openNav);

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);