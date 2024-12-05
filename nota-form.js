document.addEventListener('DOMContentLoaded', () => {
    const notaForm = document.getElementById('nota-form');

    if (notaForm) {
        notaForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('titulo').value;
            const description = document.getElementById('descripcion').value;
            const fulldescription = document.getElementById('descripcioncompleta').value;
            const brand = document.getElementById('marca').value;
            const imgSrc = document.getElementById('imagen').value;
            const imgAlt = document.getElementById('alt').value;

            const nuevaNota = {
                title,
                description,
                fulldescription,
                imgSrc,
                imgAlt,
                date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
                brand
            };

            // Obtener notas existentes del localStorage
            const notas = JSON.parse(localStorage.getItem('notas')) || [];
            notas.push(nuevaNota);

            // Guardar las notas actualizadas en el localStorage
            localStorage.setItem('notas', JSON.stringify(notas));

            // Redirigir a index.html
            alert('Nota creada exitosamente');
            window.location.href = 'index.html';
        });
    }
});
