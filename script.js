/* Seleccionando todas las etiquetas en la clase de control de formulario. */
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    /* Establecer el HTML interno de la etiqueta en el texto interno de la etiqueta. */
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
