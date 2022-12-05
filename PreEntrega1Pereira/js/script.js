// Declaración de variables
let opcion = -1

let cantTornillos = 10;
let precTornillos = 1.5;

let cantTuercas = 100;
let precTuercas = 2.0;

let cantClavos = 50;
let precClavos = 3.5;

let cantArandelas = 10;
let precArandelas = 4.52;

let enConstruccion = "En construcción"

// Declaración de funciones
const mostrarTablaStock = (nTorn, nTuer, nClav, nAran, pTorn, pTuer, pClav, pAran) => {
  /* Se encarga de retornar en forma de tabla todos los productos
  */
  return (
    "######## Stock ########" + "\n\n" +
    "Items    Cantidad    Precio por unidad\n" +
    "Tornillos    " + nTorn + "    " + pTorn + "\n" +
    "Tuercas    " + nTuer + "    " + pTuer + "\n" +
    "Clavos    " + nClav + "    " + pClav + "\n" +
    "Arandelas    " + nAran + "    " + pAran + "\n\n" +
    "Ingrese 1 para realizar un pedido. 'Cancelar' o ingresar cualquier otra caracter para volver al menú principal."
  )
}

const mostrarMenuPrincipal = () => {
  /* Se encarga de retornar en forma de tabla el menú principal
  */
  return (
    "######## E-Shop de Ferretería ########" + "\n\n" +
    "Opciones:\n" +
    "1 - Ver Stock" + "\n" +
    "2 - Realizar pedido" + "\n" +
    "0 - Salir" + "\n\n" +
    "Ingrese alguna de las opciones."
  )
}

const menuPrincipalPedido = () => {
  /* Se encarga del proceso de tomar el pedido */
  alert(enConstruccion);
}

// Main
console.log("Inicio");
// opcion = parseInt(prompt(mostrarTablaStock(cantTornillos, cantTuercas, cantClavos, cantArandelas, precTornillos, precTuercas, precClavos, precArandelas)));
// opcion = 0;
while (opcion != 0) {
  opcion = parseInt(prompt(mostrarMenuPrincipal()))

  switch (opcion) {
    case 0:
      alert("Saliendo... Gracias por su visita.");
      break;
    case 1:
      opcion = parseInt(prompt(mostrarTablaStock(cantTornillos, cantTuercas, cantClavos, cantArandelas, precTornillos, precTuercas, precClavos, precArandelas)));
      if (opcion == 1) {
        menuPrincipalPedido();
      } else {
        opcion = -1;
      }
      break;
    default:
      alert("Error por opción no valida ingresada o por haber clickeado sobre el botón 'Cancelar'");
      break;
  }
}

console.log("Fin");

