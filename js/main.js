// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// show/hide faq answers
const faqs = document.querySelectorAll('.faq');
let faqactive = false;

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    });
});

// swiper testimonials
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints :{
        600: {
            slidesPerView: 2
        }
    }
})