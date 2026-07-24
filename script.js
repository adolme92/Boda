// Invitación Adrián & Andrea
// El primer clic abre el sobre. El botón posterior permite repetir la animación.

const envelope = document.getElementById("envelope");
const scene = document.getElementById("scene");
const instruction = document.getElementById("instruction");
const continueButton = document.getElementById("continueButton");

let opened = false;

function openEnvelope() {
  if (opened) return;

  opened = true;
  scene.classList.add("is-opening");
  envelope.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  instruction.textContent = "Con mucho cariño";

  // Se muestra cuando la carta ha terminado de salir.
  window.setTimeout(() => {
    continueButton.hidden = false;
  }, 950);
}

function resetEnvelope() {
  opened = false;
  continueButton.hidden = true;
  scene.classList.remove("show-card");
  scene.classList.remove("is-opening");
  envelope.classList.remove("is-open");
  envelope.setAttribute("aria-expanded", "false");
  instruction.textContent = "Pulsa el sello para abrir";
  envelope.focus();
}

envelope.addEventListener("click", openEnvelope);

continueButton.addEventListener("click", () => {
  // En esta primera pantalla, el segundo clic permite volver a ver la apertura.
  if (scene.classList.contains("show-card")) {
    resetEnvelope();
    return;
  }

  scene.classList.add("show-card");
  continueButton.textContent = "Repetir apertura";
});
