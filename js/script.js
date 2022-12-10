const mobileBtn = document.getElementById('mobile-cta')
    nav = document.querySelector('nav');
    mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classlist.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classlist.remove('menu-btn');
})