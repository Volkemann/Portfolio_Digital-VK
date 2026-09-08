
// ANIMAÇÃO DE SCROLL DAS SEÇÕES COMEÇO 

const sections = document.querySelectorAll(
  ".contact, #about, #stack, .projects, footer"
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


// ANIMAÇÃO DE SCROLL DAS SEÇÕE FIM 

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");
  const logoLeft = document.querySelector(".logo-left");
  const logoRight = document.querySelector(".logo-right");
  const logo = document.querySelector(".loader-logo");

  document.body.style.overflow = "hidden";

  const tl = gsap.timeline();

  // Logo começa separada
  tl.set(logoLeft, {
    x: -250,
    y: -80,
    rotation: -12,
    scale: 0.8,
    opacity: 0
  });

  tl.set(logoRight, {
    x: 250,
    y: 80,
    rotation: 12,
    scale: 0.8,
    opacity: 0
  });

  // Peça esquerda
  tl.to(logoLeft, {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out"
  });

  // Peça direita
  tl.to(logoRight, {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.8");

  // Pequeno zoom
  tl.to(logo, {
    scale: 1.08,
    duration: 0.25,
    ease: "power2.out"
  });

  tl.to(logo, {
    scale: 1,
    duration: 0.35,
    ease: "power3.out"
  });

  // Loader sai
  tl.to(loader, {
    yPercent: -100,
    duration: 1,
    ease: "power4.inOut"
  });

  // Libera scroll
  tl.set(loader, {
    display: "none"
  });

  document.body.style.overflow = "";

  // =========================
  // HERO
  // =========================

  tl.from(".hero h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  tl.from(".hero p", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6");

});