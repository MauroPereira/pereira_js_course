// Declaración de variables
let opcion = -1

let cant_tornillos = 10;
let prec_tornillos = 1.5;

let cant_tuercas = 100;
let prec_tuercas = 2.0;

let cant_clavos = 50;
let prec_clavos = 3.5;

let cant_arandelas = 10;
let prec_arandelas = 4.52;

let enConstruccion = "En construcción"

// Declaración de funciones
const mostrarTablaStock = (nTorn, nTuer, nClav, nAran, pTorn, pTuer, pClav, pAran) => {
  /* Se encarga de retornar en forma de tabla todos los productos
  */
  return (
    "######## Stock ########" + "\n\n" +
    "Items\t\tCantidad\tPrecio por unidad\n" +
    "Tornillos\t" + nTorn + "\t\t\t" + pTorn + "\n" +
    "Tuercas\t\t" + nTuer + "\t\t\t" + pTuer + "\n" +
    "Clavos\t\t" + nClav + "\t\t\t" + pClav + "\n" +
    "Arandelas\t" + nAran + "\t\t\t" + pAran + "\n"
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

while (opcion != 0) {
  opcion = parseInt(prompt(mostrarMenuPrincipal()))

  switch (opcion) {
    case 0:
      alert("Saliendo... Gracias por su visita.");
      break;
    case 1:
      opcion = parseInt(prompt(mostrarTablaStock()));
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

