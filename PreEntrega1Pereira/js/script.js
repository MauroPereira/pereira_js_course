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


// Declaración de funciones
const mostrarTablaStock = (n_torn, n_tuer, n_clav, n_aran, p_torn, p_tuer, p_clav, p_aran) => {
  /* Se encarga de retornar en forma de tabla todos los productos
  */
  return (
    "######## Stock ########" + "\n\n" +
    "Items\t\tCantidad\tPrecio por unidad\n" +
    "Tornillos\t" + n_torn + "\t\t\t" + p_torn + "\n" +
    "Tuercas\t\t" + n_tuer + "\t\t\t" + p_tuer + "\n" +
    "Clavos\t\t" + n_clav + "\t\t\t" + p_clav + "\n" +
    "Arandelas\t" + n_aran + "\t\t\t" + p_aran + "\n"
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
    "Ingrese alguna de las opciones " +
    "que figurar en consola"
  )
}

// Main
console.log("Inicio");

while (opcion != 0) {
  opcion = parseInt(prompt(mostrarMenuPrincipal()))

  switch (opcion) {
    case 0:
      alert("Saliendo... Gracias por su visita.");
      break;
    default:
      alert("Error: Opción no valida o apretado botón 'Cancelar'");
      break;
  }
}

console.log("Fin");

