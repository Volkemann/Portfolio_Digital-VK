const navegation = document.querySelector('#topbar');

window.addEventListener('scroll', navFixed);

function navFixed() {
    if (window.scrollY > navegation.offsetHeight + 150) {
        navegation.classList.add('ativa');
    } else {
        navegation.classList.remove('ativa');
    }
};