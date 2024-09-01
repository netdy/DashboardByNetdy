document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.fa-bars');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('collapsed');
        main.classList.toggle('expanded');
    });
});