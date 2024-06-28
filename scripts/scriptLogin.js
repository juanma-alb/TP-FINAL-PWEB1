let usuarioInput = document.getElementById('usuario-login');
let passwordInput = document.getElementById('password-login');
let submitButton = document.querySelector('.link-inicio');

function verificarFormulario() {
    let usuario = usuarioInput.value.trim();
    let password = passwordInput.value.trim();
    if (usuario && password) {
        submitButton.disabled = false;
        submitButton.style.opacity = 1;
        submitButton.style.backgroundColor = 'green';
        submitButton.style.cursor = 'pointer';
    } else {
        submitButton.disabled = true;
        submitButton.style.opacity = 0.5;
        submitButton.style.backgroundColor = '#999';
        submitButton.style.cursor = 'not-allowed';
    }
}

function almacenarUsuario() {
    let usuario = usuarioInput.value.trim();
    if (usuario) {
        localStorage.setItem('username', usuario);
    }
}

function iniciarSesion(event) {
    event.preventDefault(); 

    almacenarUsuario();
    
    window.location.href = '../index.html';
}

usuarioInput.addEventListener('input', verificarFormulario);
passwordInput.addEventListener('input', verificarFormulario);
submitButton.addEventListener('click', iniciarSesion);

verificarFormulario();
