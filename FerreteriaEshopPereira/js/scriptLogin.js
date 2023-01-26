// Declaración de constantes
const NO_CONSOLE_LOG = false;

// Declaración de variables
let idPersona = -1;
let arrayPersona = [];

// Declaraciones DOM
let formDatosCompra = document.querySelector("#form-datos-compra");
let btnLogin = document.querySelector("#btn-comprar-carrito");

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
  /* Se encarga de leer los Datos de Compra
  */

  e.preventDefault();  // validación de compras

  let valUsuario = document.querySelector("#input-nombres").value;
  let valContrasena = document.querySelector("#input-apellidos").value;

  Swal.fire({
    title: `Gracias por su compra ${valNombres} ${valApellidos}!`,
    icon: 'success',
    text: `Destino del envio: ${valDireccion}.\nSe le enviará un email a ${valEmail} con toda la información de compra.`,
    confirmButtonText: 'OK',
    timer: 10000
  });

  // Main /////////////////////////////////////////////////////////////////////////////////
  NO_CONSOLE_LOG ? null : console.log("Inicio\nACLARACIÓN: la consola sólo es a modo de debug.");

  // LocalStorage Productos
  // IMPORTANTE: no se guardan los métodos de un objeto
  if (localStorage.getItem("arrayPersonaLS")) {
    arrayPersonaAlmacenado = JSON.parse(localStorage.getItem("arrayPersonaLS"));
    NO_CONSOLE_LOG ? null : console.log(arrayPersonaAlmacenado);

    for (const obj of arrayPersonaAlmacenado)
      arrayPersona.push(new Persona(obj));

    NO_CONSOLE_LOG ? null : console.log("INFO: Recuperado de localStorage");
  } else {
    arrayPersona = [
      new Persona({ usuario: "admin".toUpperCase(), contrasena: "admin" }),
    ];

    // Se guarda en localStorage
    // NOTA: no importa que guarde un arreglo de objetos, no guarda los métodos de dichos objetos
    localStorage.setItem("arrayPersonaLS", JSON.stringify(arrayPersona));
    NO_CONSOLE_LOG ? null : console.log("INFO: Guardado en localStorage");
  }
  NO_CONSOLE_LOG ? null : console.log("INFO de arrayPersona:");
  NO_CONSOLE_LOG ? null : console.log(arrayPersona);

  // Listeners de nodos fijos
  btnLoguearse.addEventListener("submit", fncLoguearse);

  // Carga de DOM
  crearHtmlStockProductos(arrayPersona);
///////////////////////////////////////////////////////////////////////////////////
