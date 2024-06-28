let emailInput = document.getElementById('email');
        let usernameInput = document.getElementById('usuario');
        let submitButton = document.getElementById('aceptar-btn');

        function validarEmail(input) {
            let esEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!esEmail.test(input.value.trim())) {
                return false;
            } else {
                return true;
            }
        }

        function verificarFormulario() {
            let emailValido = validarEmail(emailInput);
            let usuarioValido = usernameInput.value.trim() !== '';

            if (emailValido && usuarioValido) {
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

        emailInput.addEventListener('input', verificarFormulario);
        usernameInput.addEventListener('input', verificarFormulario);

        verificarFormulario();