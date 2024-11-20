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

    // Crear boton de menu
    const menuButton = document.createElement('div');
    menuButton.style.position = 'fixed';
    menuButton.style.top = '10px';
    menuButton.style.left = '10px';
    menuButton.style.cursor = 'pointer';
    menuButton.style.zIndex = '1000';
    menuButton.innerHTML = `
        <div style="width: 30px; height: 4px; background-color: #046E8F; margin: 5px 0;"></div>
        <div style="width: 30px; height: 4px; background-color: #046E8F; margin: 5px 0;"></div>
        <div style="width: 30px; height: 4px; background-color: #046E8F; margin: 5px 0;"></div>
    `;
    document.body.appendChild(menuButton);

    // Crear menu desplegable
    const menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.left = '0';
    menu.style.width = '200px';
    menu.style.height = '100vh';
    menu.style.backgroundColor = '#B3BFB8';
    menu.style.boxShadow = '2px 0 5px rgba(0, 0, 0, 0.2)';
    menu.style.transform = 'translateX(-100%)';
    menu.style.transition = 'transform 0.3s ease-in-out';
    menu.style.zIndex = '999';
    menu.innerHTML = `
        <ul style="margin: 20px; padding: 0; list-style: none;">
            <li><a href="#" style="display: block; padding: 10px; color: #022F40; text-decoration: none;"></a></li>
            <li><a href="#Ultimas Noticias" style="display: block; padding: 10px; color: #022F40; text-decoration: none;">Ultimas Noticias</a></li>
            <li><a href="#Celulares" style="display: block; padding: 10px; color: #022F40; text-decoration: none;">Celulares</a></li>
            <li><a href="#Consolas" style="display: block; padding: 10px; color: #022F40; text-decoration: none;">Consolas</a></li>
            <li><a href="#Ordenadores" style="display: block; padding: 10px; color: #022F40; text-decoration: none;">Ordenadores</a></li>
        </ul>
    `;
    document.body.appendChild(menu);

    menuButton.addEventListener('click', () => {
        if (menu.style.transform === 'translateX(0%)') {
            menu.style.transform = 'translateX(-100%)';
        } else {
            menu.style.transform = 'translateX(0%)';
        }
    });

    // Cerrar menu al hacer click en un enlace
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.style.transform = 'translateX(-100%)';
        });
    });
    

    // Crear boton de crear usuario
    const createUserButton = document.createElement('button');
    createUserButton.textContent = 'Crear Usuario';
    createUserButton.style.position = 'fixed';
    createUserButton.style.top = '10px';
    createUserButton.style.right = '10px';
    createUserButton.style.padding = '5px 10px';
    createUserButton.style.backgroundColor = '#38AECC';
    createUserButton.style.color = 'white';
    createUserButton.style.border = 'none';
    createUserButton.style.borderRadius = '5px';
    createUserButton.style.cursor = 'pointer';
    createUserButton.style.zIndex = '1000';
    document.body.appendChild(createUserButton);

    // Crear formulario para ingresar usuario y contraseña
    const userForm = document.createElement('div');
    userForm.style.position = 'fixed';
    userForm.style.top = '50%';
    userForm.style.left = '50%';
    userForm.style.transform = 'translate(-50%, -50%)';
    userForm.style.backgroundColor = '#ffffff';
    userForm.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    userForm.style.padding = '20px';
    userForm.style.borderRadius = '10px';
    userForm.style.zIndex = '1001';
    userForm.style.display = 'none';
    userForm.innerHTML = `
        <h2>Crear Nuevo Usuario</h2>
        <label for="username">Usuario:  </label>
        <input type="text" id="username" required><br><br>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" required><br><br>
        <button id="submit-user" style="padding: 10px 20px; background-color: #38AECC; color: white; border: none; border-radius: 5px; cursor: pointer;">Crear Usuario</button>
        <button id="close-form" style="padding: 10px 20px; background-color: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer;">Cancelar</button>
    `;
    document.body.appendChild(userForm);

    // Mostrar formulario al hacer click en el boton de crear usuario
    createUserButton.addEventListener('click', () => {
        userForm.style.display = 'block';
    });

    // Cancelar y cerrar el formulario
    document.getElementById('close-form').addEventListener('click', () => {
        userForm.style.display = 'none';
    });

    // Manejar el envio del formulario
    document.getElementById('submit-user').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`Nuevo usuario creado: ${username}`);

        // Ocultar el boton crear usuario despues de crear el usuario
        createUserButton.style.display = 'none';

        // Cerrar el formulario
        userForm.style.display = 'none';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });
});