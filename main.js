document.addEventListener('DOMContentLoaded', () => {
    // Crear ventana para cookies
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#ffffff';
    modal.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.zIndex = '1000';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.innerHTML = `
        <p style="font-size: 1.2rem; margin-bottom: 15px;">¿Acepta las cookies relacionadas a nuestro contenido?</p>
        <div style="display: flex; gap: 10px;">
            <button id="accept-cookies" style="padding: 10px 20px; background-color: #38AECC; color: white; border: none; border-radius: 5px; cursor: pointer;">Aceptar</button>
            <button id="decline-cookies" style="padding: 10px 20px; background-color: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer;">No aceptar</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('accept-cookies').addEventListener('click', () => {
        alert('Has aceptado las cookies.');
        modal.style.display = 'none';
    });

    document.getElementById('decline-cookies').addEventListener('click', () => {
        alert('Has rechazado las cookies.');
        modal.style.display = 'none';
    });
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