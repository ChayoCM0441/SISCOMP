document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Simulación de una solicitud al servidor
  simulateServerRequest(name, email, password, role).then(response => {
    if (response.success) {
      // Redirigir a la página de inicio con el nombre del usuario
      window.location.href = `index.html?name=${encodeURIComponent(name)}`;
    } else {
      // Mostrar mensaje de error
      document.querySelector('.register-form').style.display = 'none';
      document.getElementById('error-message').style.display = 'block';
    }
  });
});

function simulateServerRequest(name, email, password, role) {
  return new Promise((resolve) => {
    // Simulación de una respuesta del servidor después de 1 segundo
    setTimeout(() => {
      const success = true; // Simulación de registro exitoso
      resolve({ success });
    }, 1000);
  });
}
