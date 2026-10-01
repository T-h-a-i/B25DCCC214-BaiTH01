// Menu hamburger cho giao diện Mobile
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});

//Dark/Light Mode
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Màn Sáng';
    } else {
        themeBtn.textContent = 'Màn Tối';
    }
});

//Smooth scroll (khi click vào menu)
document.querySelectorAll('.smooth-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Ẩn menu mobile nếu đang mở
        if (window.innerWidth <= 600) {
            navLinks.classList.remove('show-menu');
        }
    });
});

//Hiển thị năm hiện tại ở footer
const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();

// Scroll reveal (Hiệu ứng xuất hiện khi cuộn)
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();