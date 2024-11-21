const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    // Validación de credenciales
    if (data.username === 'admin' && data.password === 'admin') {
        alert('Ingresaste como admin');
        localStorage.setItem('isAdmin', 'true'); // Marca al usuario como admin
        window.location.href = 'index.html'; // Redirige al archivo index.html
    } else {
        alert('Credenciales incorrectas, intenta de nuevo');
    }
})