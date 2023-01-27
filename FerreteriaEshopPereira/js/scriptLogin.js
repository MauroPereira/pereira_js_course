// Declaración de constantes
const NO_CONSOLE_LOG = true;

// Declaración de variables
let idPersona = -1;
let arrayPersona = [];

// Declaraciones DOM
let formDatosUsuario = document.querySelector("#form-datos-usuario");

// Declaración de clases
class Persona {
  /* Clase Persona */
  constructor(obj) {
    idPersona++;
    this.id = idPersona;
    this.usuario = obj.usuario;
    this.contrasena = obj.contrasena;
    this.nombre = obj.nombre;
    this.apellido = obj.apellido;
    this.direccion = obj.direccion;
    this.email = obj.email;
    this.condicionIva = obj.condicionIva;
  }
  /* Métodos */
}

// Declaración de funciones
const fncLoguearse = (e) => {
  /* Se encarga de leer los Datos de usuario
  */

  e.preventDefault();  // validación

  let valUsuario = document.querySelector("#in-usuario").value;
  let valContrasena = document.querySelector("#in-contrasena").value;

  console.log("hola2");

  // Bloque que se encarga de chequear que si existe el usuario
  let matchUsuario = arrayPersona.find(objeto => objeto.usuario === valUsuario);
  if (matchUsuario == undefined) {
    Swal.fire({
      title: `Usuario ${valUsuario} no encontrado!`,
      icon: 'error',
      text: `Revise el nombre del usuario.`,
      confirmButtonText: 'OK',
    });
  }
  else if (matchUsuario.contrasena !== valContrasena) {
    Swal.fire({
      title: `Contraseña del usuario ${valUsuario} incorrecta!`,
      icon: 'warning',
      text: `Revise la contraseña`,
      confirmButtonText: 'OK',
    });
  }
  else {
    Swal.fire({
      title: `Usuario ${valUsuario} logueado correctamente.`,
      icon: 'success',
      text: `Presione OK o espere, será trasladado a la página para modificar el stock`,
      confirmButtonText: 'OK',
      timer: 10000
    }).then(() => window.location.href = './modificarStock.html'
    );
  }
}

// Main /////////////////////////////////////////////////////////////////////////////////
NO_CONSOLE_LOG ? null : console.log("Inicio\nACLARACIÓN: la consola sólo es a modo de debug.");

// LocalStorage Persona
// IMPORTANTE: no se guardan los métodos de un objeto
if (localStorage.getItem("arrayPersonaLS")) {
  arrayPersonaAlmacenado = JSON.parse(localStorage.getItem("arrayPersonaLS"));
  NO_CONSOLE_LOG ? null : console.log(arrayPersonaAlmacenado);

  for (const obj of arrayPersonaAlmacenado)
    arrayPersona.push(new Persona(obj));

  NO_CONSOLE_LOG ? null : console.log("INFO: Recuperado de localStorage");
} else {
  arrayPersona = [
    new Persona({ usuario: "admin".toLowerCase(), contrasena: "admin" }),
  ];

  // Se guarda en localStorage
  // NOTA: no importa que guarde un arreglo de objetos, no guarda los métodos de dichos objetos
  localStorage.setItem("arrayPersonaLS", JSON.stringify(arrayPersona));
  NO_CONSOLE_LOG ? null : console.log("INFO: Guardado en localStorage");
}
NO_CONSOLE_LOG ? null : console.log("INFO de arrayPersona:");
NO_CONSOLE_LOG ? null : console.log(arrayPersona);

// Listeners de nodos fijos
formDatosUsuario.addEventListener("submit", fncLoguearse);
///////////////////////////////////////////////////////////////////////////////////
