window.addEventListener('DOMContentLoaded', (event) => {



    const navButton = document.getElementById("nav-button");

    openNav = () => {
        navLinks = document.querySelector('.nav-links')
        navLinks.classList.toggle('open');


    }

    navButton.addEventListener('click', openNav)







});
