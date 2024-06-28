document.addEventListener('DOMContentLoaded', () => {

    let nombreUsuario = localStorage.getItem('username');

    if (nombreUsuario) {
        document.getElementById('nombre-usuario').textContent = nombreUsuario;
    }

    function validarContraseña(input) {
        let valor = input.value;
        let longitudValida = valor.length == 8;
        let tieneLetras = (valor.match(/[a-zA-Z]/g) || []).length >= 2;
        let tieneNumeros = (valor.match(/[0-9]/g) || []).length >= 2;
        let tieneEspeciales = (valor.match(/[^a-zA-Z0-9]/g) || []).length >= 2;
        return longitudValida && tieneLetras && tieneNumeros && tieneEspeciales;
    }

    
    function validarTarjeta() {
        let numeroTarjeta = document.getElementById('tarjeta').value.replace(/\s/g, ''); 
        let cvv = document.getElementById('cvv').value.trim();
        let tarjetaValida = true;
        let tarjetaError=document.getElementById('tarjeta-error');
    
        if (numeroTarjeta.length < 16 || numeroTarjeta.length > 19) {
            tarjetaValida = false;
            tarjetaError.style.display = 'inline';
            return
        } else {
            let sumaDigitos = 0;
            for (let i = 0; i < numeroTarjeta.length - 1; i++) {
                sumaDigitos += parseInt(numeroTarjeta.charAt(i));
            }
            let ultimoDigito = parseInt(numeroTarjeta.charAt(numeroTarjeta.length - 1));
            if ((sumaDigitos % 2 === 0 && ultimoDigito % 2 !== 0) || (sumaDigitos % 2 !== 0 && ultimoDigito % 2 === 0)) {
                tarjetaValida = false;
                tarjetaError.style.display = 'inline';
            } else {
                document.getElementById('tarjeta-error').style.display = 'none';
            }
        }

        
        if (cvv.length !== 3 || cvv.includes('0') || cvv === '000' || !cvv.match(/^\d+$/)) {
            tarjetaValida = false;
        }

        return tarjetaValida;
    }

    
    function validarCampos() {
        let newPass = document.getElementById('new-password').value;
        let confirmNewPass = document.getElementById('confirm-new-password').value;
        let metodoPagoSeleccionado = document.querySelector('input[name="category"]:checked');

        
        let contraseñaValida = validarContraseña(document.getElementById('new-password')) && newPass === confirmNewPass;

        
        let metodoPagoValido = false;
        if (metodoPagoSeleccionado) {
            let valorMetodo = metodoPagoSeleccionado.value;
            if (valorMetodo === 'Tarjeta de Crédito') {
                metodoPagoValido = validarTarjeta();
            } else if (valorMetodo === 'Cupón de Pago') {
                metodoPagoValido = document.getElementById('pago-facil').checked || document.getElementById('rapi-pago').checked || document.getElementById('otro').checked;
            } else {
                metodoPagoValido = true; 
            }
        }

    
        let confirmarCambiosBtn = document.getElementById('confirmar-cambios');
        if (contraseñaValida || metodoPagoValido) {
            confirmarCambiosBtn.style.pointerEvents = 'auto';
            confirmarCambiosBtn.style.opacity = '1';
        } else {
            confirmarCambiosBtn.style.pointerEvents = 'none';
            confirmarCambiosBtn.style.opacity = '0.5';
        }
    }

    
    validarCampos();

    
    document.getElementById('new-password').addEventListener('input', validarCampos);
    document.getElementById('confirm-new-password').addEventListener('input', validarCampos);
    document.querySelectorAll('input[name="category"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            validarCampos();
            if (radio.value === 'Tarjeta de Crédito') {
                document.getElementById('tarjeta').addEventListener('input', validarCampos);
                document.getElementById('cvv').addEventListener('input', validarCampos);
            } else if (radio.value === 'Cupón de Pago') {
                document.querySelectorAll('#pago-facil, #rapi-pago, #otro').forEach(function(checkbox) {
                    checkbox.addEventListener('change', validarCampos);
                });
            }
        });
    });

    
    document.getElementById('tarjeta').addEventListener('input', validarCampos);
    document.getElementById('cvv').addEventListener('input', validarCampos);

    
    function confirmarCambios() {
    
        alert('Cambios confirmados');

        let metodoPagoSeleccionado = document.querySelector('input[name="category"]:checked');
        let metodoPago = metodoPagoSeleccionado ? metodoPagoSeleccionado.value : '';

            if (metodoPago === 'Tarjeta de Crédito') {
            let numeroTarjeta = document.getElementById('tarjeta').value.replace(/\s/g, '');
            let cvv = document.getElementById('cvv').value.trim();
            if (numeroTarjeta && cvv) {
                localStorage.setItem('metodoPago', metodoPago);
                localStorage.setItem('numeroTarjeta', numeroTarjeta);
                localStorage.setItem('cvv', cvv);
            }
        } else if (metodoPago === 'Cupón de Pago') {
            
            let checkboxes = document.querySelectorAll('#pago-facil, #rapi-pago, #otro');
            let cuponesSeleccionados = [];
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    cuponesSeleccionados.push(checkbox.id);
                }
            });
            if (cuponesSeleccionados.length > 0) {
                localStorage.setItem('cuponesSeleccionados', JSON.stringify(cuponesSeleccionados));
            }
        }
    }

    
    document.getElementById('confirmar-cambios').addEventListener('click', confirmarCambios);


    document.addEventListener('DOMContentLoaded', function() {
        const cerrarSesionBtn = document.getElementById('cerrar-sesion');
    
        cerrarSesionBtn.addEventListener('click', function(event) {
            event.preventDefault();
    
    
            localStorage.clear();
    
            window.location.href = '../index.html'; 
        });
    });
    
});
