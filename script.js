

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





