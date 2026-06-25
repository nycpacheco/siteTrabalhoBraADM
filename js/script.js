// ==========================================
// CONTROLE DO MENU RESPONSÍVEL (TOGGLE)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });

    document.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  }

  // ==========================================
  // ATIVA O EFEITO GLITCH (ARASAKA TERMINAL INTERFERENCE)
  // Aplica a classe e o atributo data-glitch
  // em qualquer elemento com [data-glitch]
  // ==========================================
  document.querySelectorAll("[data-glitch]").forEach(el => {
    el.classList.add("glitch-target");
  });
});

