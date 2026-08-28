const navegation = document.querySelector('#topbar');

window.addEventListener('scroll', navFixed);

function navFixed() {
    if (window.scrollY > navegation.offsetHeight + 150) {
        navegation.classList.add('ativa');
    } else {
        navegation.classList.remove('ativa');
    }
};

const contact = document.querySelector(".contact",".about");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      contact.classList.add("show");
    }
  });
});

observer.observe(contact);