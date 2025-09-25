// Crear partículas flotantes
const particlesContainer = document.getElementById("particles");
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Posición y animación aleatoria
  const left = Math.random() * 100;
  const delay = Math.random() * 10;
  const duration = 10 + Math.random() * 10;

  particle.style.left = `${left}%`;
  particle.style.animationDelay = `${delay}s`;
  particle.style.animationDuration = `${duration}s`;

  particlesContainer.appendChild(particle);
}

// Efecto de escritura para el nombre
document.addEventListener("DOMContentLoaded", function () {
  const name = document.querySelector("h1");
  const originalText = name.textContent;
  name.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < originalText.length) {
      name.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  setTimeout(typeWriter, 1000);
});
