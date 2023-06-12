let  nombre = "Lester";
let apellido = "Alvarado ";

const nombreApellido = {
  nombre, apellido
};

// localStorage.setItem("nombre y Apellido", JSON.stringify(nombreApellido));
// sessionStorage.setItem("nombre y Apellido", JSON.stringify(nombreApellido));

function crearCookie(nombre, valor, minutos) {
  var fecha = new Date();
  fecha.setTime(fecha.getTime() + (minutos * 60 * 1000));

  var expiracion = "; expires=" + fecha.toUTCString();
  document.cookie = nombre + "=" + valor + expiracion + "; path=/";
}

// crearCookie("Nombre y Apellido", "Lester Alvarado", 2);
