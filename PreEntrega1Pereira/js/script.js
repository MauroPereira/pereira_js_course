// Declaración de variables
let repetir = false

let cant_tornillos = 10;
let prec_tornillos = 1.5;

let cant_tuercas = 100;
let prec_tuercas = 2.0;

let cant_clavos = 50;
let prec_clavos = 3.5;

let cant_arandelas = 10;
let prec_arandelas = 4.52;


// Declaración de funciones
const mostrar_menu = (n_torn, n_tuer, n_clav, n_aran, p_torn, p_tuer, p_clav, p_aran) => {
  return (
    "######## E-Shop de Ferretería ########" + "\n\n" +
    "Items\t\tCantidad\tPrecio por unidad\n" +
    "Tornillos\t" + n_torn + "\t\t\t" + p_torn + "\n" +
    "Tuercas\t\t" + n_tuer + "\t\t\t" + p_tuer + "\n" +
    "Clavos\t\t" + n_clav + "\t\t\t" + p_clav + "\n" +
    "Arandelas\t" + n_aran + "\t\t\t" + p_aran + "\n"
  )
}

// Main
console.log("Inicio");
console.log(mostrar_menu(cant_tornillos, cant_tuercas,
  cant_clavos, cant_arandelas, prec_tornillos, prec_tuercas,
  prec_clavos, prec_arandelas));

// while (repetir) {
//   foo = parseInt(prompt("Pepe"));
//   if (foo < 0) {
//     repetir = false;
//   }
// };
console.log("Fin");

