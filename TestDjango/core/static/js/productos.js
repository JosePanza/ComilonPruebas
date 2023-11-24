function enviarformulario() {
    var usuario = document.getElementById('usuario').value;
    var correo = document.getElementById('correo').value;
    var clave = document.getElementById('clave').value;

    if (usuario.trim() === '') {
      alert('Por favor, ingrese un nombre de usuario.');
      console.log("Funcionaaa!!!!")
      return false;
    }
    if (correo.trim() === '') {
      alert('Por favor, ingrese un correo.');
      console.log("Funcionaaa!!")
      return false;
    }
    if (clave.trim() === '') {
      alert('Por favor, ingrese una contraseña.');
      console.log("Funcionoooo!!!!")
      return false;
    }
    return true;
  }