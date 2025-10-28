document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const audio = section.querySelector("audio");
    const paragraphs = section.querySelectorAll("p");

    // Guardamos el texto original de cada párrafo
    paragraphs.forEach(p => p.dataset.text = p.innerHTML);

    let intervals = []; // Para controlar múltiples intervalos

    function typeParagraph(p) {
      const lines = p.dataset.text.split(/<br>/); // Separar por saltos de línea
      p.innerHTML = ""; // Limpiar el párrafo
      let lineIndex = 0;

      function typeLine() {
        if (lineIndex >= lines.length) return;
        let line = lines[lineIndex];
        let charIndex = 0;

        const interval = setInterval(() => {
          p.innerHTML += line[charIndex];
          charIndex++;
          if (charIndex >= line.length) {
            clearInterval(interval);
            intervals = intervals.filter(i => i !== interval);
            p.innerHTML += "<br>"; // Añadimos el salto de línea
            setTimeout(() => {
              lineIndex++;
              typeLine();
            }, 1000); // pausa entre líneas
          }
        }, 35); // velocidad de escritura (ms por letra)

        intervals.push(interval);
      }

      typeLine();
    }

    function startTyping() {
      // Detener cualquier animación previa
      intervals.forEach(i => clearInterval(i));
      intervals = [];

      paragraphs.forEach(p => typeParagraph(p));
    }

    // Cuando se reproduce la canción
    audio.addEventListener("play", () => {
      startTyping();
    });

    // Cuando se pausa, se detiene la animación
    audio.addEventListener("pause", () => {
      intervals.forEach(i => clearInterval(i));
      intervals = [];
    });

    // Al terminar la canción, mostramos todo el texto completo
    audio.addEventListener("ended", () => {
      intervals.forEach(i => clearInterval(i));
      intervals = [];
      paragraphs.forEach(p => p.innerHTML = p.dataset.text);
    });
  });
});
