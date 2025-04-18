document.getElementById('authForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Previene que recargue la página

  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && surname && email) {
    alert(`Welcome, ${name} ${surname}!\nWe’ve received your email: ${email}`);
    // Enviar los datos a una base de datos con fetch o AJAX
  } else {
    alert('Please fill out all fields.');
  }
});
