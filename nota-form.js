document.addEventListener('DOMContentLoaded', () => {
    const notaForm = document.getElementById('nota-form');

    if (notaForm) {
        notaForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const titulo = document.getElementById('titulo').value;
            const descripcion = document.getElementById('descripcion').value;
            const marca = document.getElementById('marca').value;
            const imagen = document.getElementById('imagen').value;
            const alt = document.getElementById('alt').value;

            const nuevaNota = {
                titulo,
                descripcion,
                imagen,
                alt,
                fecha: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
                marca
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
