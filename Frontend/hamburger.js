// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');
    
    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', function() {
            nav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }
});