var toggler = document.querySelector('.header__nav-btn__toggler'),
    togglerMenu = document.querySelector('.header__toggler-menu');

toggler.addEventListener('click', function() {
    togglerMenu.classList.toggle('adtive-menu');
});