document.addEventListener('DOMContentLoaded', () => {
    const detalleContainer = document.getElementById('detalle-container');

    // Recuperar los datos del artículo seleccionado
    const notaSeleccionada = JSON.parse(localStorage.getItem('notaSeleccionada'));

    if (!notaSeleccionada) {
        detalleContainer.innerHTML = '<p>Error: No se pudo cargar la información del artículo.</p>';
        return;
    }

    // Crear el contenido del artículo dinámicamente
    const detalleHTML = `
        <article>
            <div class="nota-box">
                <div class="nota-img">
                    <img src="${notaSeleccionada.imgSrc}" alt="${notaSeleccionada.imgAlt}">
                </div>
                <div class="nota-texto">
                    <span>${notaSeleccionada.date} | ${notaSeleccionada.brand}</span>
                    <h2 class="nota-titulo">${notaSeleccionada.title}</h2>
                    <p>${notaSeleccionada.description}</p>
                    <p>${notaSeleccionada.fulldescription}</p>
                </div>
            </div>
        </article>
    `;

    detalleContainer.innerHTML = detalleHTML;
});
