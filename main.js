document.addEventListener('DOMContentLoaded', () => {
    // Verificacion de propiedad admin
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) {
        const nuevaNota = document.querySelector('.nueva-nota-invisible');
        if (nuevaNota) {
            nuevaNota.classList.remove('nueva-nota-invisible');
        }
    }

    // Script para cargar notas desde el almacenamiento local al cargar la página
    const notasContainer = document.querySelector('.nota-container');
    const notas = JSON.parse(localStorage.getItem('notas')) || [];

    notas.forEach(nota => {
        const notaHTML = `
            <article>
                <div class="nota-box">
                    <div class="nota-img">
                        <a href="#">
                            <img src="${nota.imagen}" alt="${nota.alt}">
                        </a>
                    </div>
                    <div class="nota-texto">
                        <span>${nota.fecha} | ${nota.marca}</span>
                        <a href="#" class="nota-titulo"><h2>${nota.titulo}</h2></a>
                        <p>${nota.descripcion}</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
            </article>
        `;
        notasContainer.innerHTML += notaHTML;
    });
});