function soloLetras(input) {
    input.value = input.value.replace(/[^A-Za-z]/g, '');
    validarCampos();
}

function validarEmail(input) {
    let esEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailError = document.getElementById('email-error');
    if (!esEmail.test(input.value)) {
        emailError.style.display = 'inline';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

function letrasYNumeros(input) {
    input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
    validarCampos();
}

function validarContraseña(input) {
    let contraseñaError = document.getElementById('contraseña-error');
    let valor = input.value;
    let longitudValida = valor.length == 8;
    let tieneLetras = (valor.match(/[a-zA-Z]/g) || []).length >= 2;
    let tieneNumeros = (valor.match(/[0-9]/g) || []).length >= 2;
    let tieneEspeciales = (valor.match(/[^a-zA-Z0-9]/g) || []).length >= 2;
    if (longitudValida && tieneLetras && tieneNumeros && tieneEspeciales) {
        contraseñaError.style.display = 'none';
        return true;
    } else {
        contraseñaError.style.display = 'inline';
        return false;
    }
}

function contraseñasIguales() {
    let contraseña = document.getElementById('contraseña').value;
    let confirmarContraseña = document.getElementById('confirmar_contraseña').value;
    let confirmarContraseñaError = document.getElementById('confirmar-contraseña-error');
    if (contraseña === confirmarContraseña) {
        confirmarContraseñaError.style.display = 'none';
        return true;
    } else {
        confirmarContraseñaError.style.display = 'inline';
        return false;
    }
}

function validarNumeroTarjeta() {
    let numeroTarjeta = document.getElementById('numero_tarjeta').value;
    let tarjetaError = document.getElementById('numero-tarjeta-error');

    if (numeroTarjeta.length < 16 || numeroTarjeta.length > 19) {
        tarjetaError.style.display = 'inline';
        return false;
    }

    let suma = 0;
    for (let i = 0; i < numeroTarjeta.length - 1; i++) {
        suma += parseInt(numeroTarjeta.charAt(i));
    }

    let ultimoDigito = parseInt(numeroTarjeta.charAt(numeroTarjeta.length - 1));
    if ((suma % 2 === 0 && ultimoDigito % 2 !== 0) || (suma % 2 !== 0 && ultimoDigito % 2 === 0)) {
        tarjetaError.style.display = 'none';
        return true;
    } else {
        tarjetaError.style.display = 'inline';
        return false;
    }
}

function validarCVV() {
    let cvv = document.getElementById('codigo_tarjeta').value;
    let cvvError = document.getElementById('codigo-tarjeta-error');
    if (cvv.length !== 3 || !/^[0-9]{3}$/.test(cvv)||cvv.includes('0')) {
        cvvError.style.display = 'inline';
        return false;
    } else {
        cvvError.style.display = 'none';
        return true;
    }
}

function validarCampos() {
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let email = document.getElementById('email').value.trim();
    let nombreUsuario = document.getElementById('nombre_usuario').value.trim();
    let contraseña = document.getElementById('contraseña').value.trim();
    let confirmarContraseña = document.getElementById('confirmar_contraseña').value.trim();

    let emailValido = validarEmail(document.getElementById('email'));
    let contraseñaValida = validarContraseña(document.getElementById('contraseña'));
    let contraseñasCoinciden = contraseñasIguales();

    let camposPersonalesValidos = nombre && apellido && emailValido && nombreUsuario && contraseñaValida && contraseñasCoinciden;

    let numeroTarjetaValido = validarNumeroTarjeta();
    let cvvValido = validarCVV();
    let opcion1 = document.getElementById('opcion1').checked;
    let opcion2 = document.getElementById('opcion2').checked;
    let opcion3 = document.getElementById('opcion3').checked;

    let checkbox1 = document.getElementById('checkbox_1').checked;
    let checkbox2 = document.getElementById('checkbox_2').checked;
    let cbu = document.getElementById('cbu').value.trim();

    let camposPagoValidos = false;

    if (opcion1 && numeroTarjetaValido && cvvValido) {
        camposPagoValidos = true;
    } else if (opcion2 && (checkbox1 || checkbox2)) {
        camposPagoValidos = true;
    } else if (opcion3 && cbu.length === 10) {
        camposPagoValidos = true;
    }

    let botonAceptar = document.getElementById('boton-aceptar');
    if (camposPersonalesValidos && camposPagoValidos) {
        botonAceptar.style.pointerEvents = 'auto';
        botonAceptar.style.opacity = '1';
    } else {
        botonAceptar.style.pointerEvents = 'none';
        botonAceptar.style.opacity = '0.5';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('nombre').addEventListener('input', function() { soloLetras(this); });
    document.getElementById('apellido').addEventListener('input', function() { soloLetras(this); });
    document.getElementById('email').addEventListener('input', function() { validarEmail(this); });
    document.getElementById('nombre_usuario').addEventListener('input', function() { letrasYNumeros(this); });
    document.getElementById('contraseña').addEventListener('input', function() { validarContraseña(this); contraseñasIguales(); });
    document.getElementById('confirmar_contraseña').addEventListener('input', function() { contraseñasIguales(); });
    document.getElementById('numero_tarjeta').addEventListener('input', function() { validarNumeroTarjeta(); });
    document.getElementById('codigo_tarjeta').addEventListener('input', function() { validarCVV(); });
    document.getElementById('opcion1').addEventListener('change', validarCampos);
    document.getElementById('opcion2').addEventListener('change', validarCampos);
    document.getElementById('opcion3').addEventListener('change', validarCampos);
    document.getElementById('checkbox_1').addEventListener('change', validarCampos);
    document.getElementById('checkbox_2').addEventListener('change', validarCampos);
    document.getElementById('cbu').addEventListener('input', validarCampos);

    validarCampos();  
});