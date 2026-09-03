const navegation = document.querySelector('#topbar');

window.addEventListener('scroll', navFixed);

function navFixed() {
  if (window.scrollY > navegation.offsetHeight + 150) {
    navegation.classList.add('ativa');
  } else {
    navegation.classList.remove('ativa');
  }
};


const sections = document.querySelectorAll(
  ".contact, .about, .skills, .projects, .footer"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

});

sections.forEach((section) => {
  observer.observe(section);
});





