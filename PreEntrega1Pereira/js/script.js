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

const menuMostrarProductos = () => {
  /* Se encarga de retornar en forma de tabla el menú principal
  */
  let productoId;

  while (repeat = true) {
    productoId = parseInt(prompt((
      "######## Pedido - Producto ########" + "\n\n" +
      "IDs:\n" +
      "1 - Tornillos" + "\n" +
      "2 - Tuercas" + "\n" +
      "3 - Clavos" + "\n" +
      "4 - Arandelas" + "\n\n" +
      "Ingrese algún ID de producto."
    )))
    if (productoId > 0 && productoId <= 4) {
      return productoId;
    } else {
      mensajeOpcionNoValida();
    }
  }
}

const preguntarCantidad = (producto) => {
  /* Obtiene la cantidad de producto
  */
  let value;

  while (true) {
    value = parseInt(prompt((
      "######## Pedido - Cantidad ########" + "\n\n" +
      "Ingrese la cantidad de " + producto + " :"
    )));
    if (value > 0) {
      return value;
    } else {
      alert("Error: la cantidad tiene que mayor a 0")
    }
  }
}

const preguntarNombres = () => {
  /* Se encarga de preguntar nombres
  */
  return (
    "######## Pedido - Nombres ########" + "\n\n" +
    "Ingrese su/s nombre/s:"
  )
}

const preguntarApellidos = () => {
  /* Se encarga de preguntar apellidos
  */
  return (
    "######## Pedido - Apellidos ########" + "\n\n" +
    "Ingrese su/s apellido/s:"
  )
}

const preguntarDireccion = () => {
  /* Se encarga de preguntar la dirección
  */
  return (
    "######## Pedido - Dirección ########" + "\n\n" +
    "Ingrese su dirección:"
  )
}

const emailComprador = () => {
  /* Se encarga de preguntar la dirección
  */
  return (
    "######## Pedido - Dirección ########" + "\n\n" +
    "Ingrese su dirección:"
  )
}

const preguntarCondicionIva = () => {
  /* Se encarga de preguntar la dirección
  */
  return (
    "######## Pedido - IVA ########" + "\n\n" +
    "Condiciones frente al IVA:\n" +
    "1 - Exento" + "\n" +
    "2 - No exento" + "\n\n" +
    "Ingrese su condición:"
  )
}

const confirmarCompra = (nTorn, nTuer, nClav, nAran, pTorn, pTuer, pClav, pAran) => {
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

const chequearStock = (stock, cantSolicitada) => {
  /* Algoritmo que chequea si hay stock suficiente, caso contrario lo advierte 
  y devuelve true
  */
  if (stock - cantSolicitada < 0) {
    return false;
  } else {
    alert("Error: cantidad pedida supera el stock");
  }

  return true;
}

const convierteIdNombre = (id) => {
  /* Devuelve el nombre que corresponde al ID del producro
  */
  switch (id) {
    case 1:
      return "Tornillos";
    case 2:
      return "Tuercas";
    case 3:
      return "Clavos"
    case 4:
      return "Arandelas"
    default:
      return "Producto Desconocido"
  }
}


const menuPrincipalPedido = () => {
  /* Se encarga del proceso de tomar el pedido */
  let repeat = true;
  let productoId;
  let productoQty;
  let productoNombre;

  while (repeat == true) {

    productoId = menuMostrarProductos();
    productoQty = preguntarCantidad(convierteIdNombre(productoId));

    switch (productoId) {
      case 1:
        repeat = chequearStock(cantTornillos, productoQty);
        break;
      case 2:
        repeat = chequearStock(cantTuercas, productoQty);
        break;
      case 3:
        repeat = chequearStock(cantClavos, productoQty);
        break;
      case 4:
        repeat = chequearStock(cantArandelas, productoQty);
        break;
      default:
        alert("Error: producto no encontrado o clickeado 'Cancelar'");
        break;
    }
  }

  let nombresComprador = prompt(preguntarNombres());
  let apellidosComprador = prompt(preguntarApellidos());
  let direccionComprador = prompt(preguntarDireccion());
  let emailComprador = prompt(preguntarEmail());
  let ivaComprador = prompt(preguntarCondicionIva());
  let confirmaCompra = parseInt(prompt(confirmarCompra(producto, productoQty, ivaComprador, precioFinal, nombresComprador, apellidosComprador, direccionComprador, emailComprador)));
  if (confirmaCompra == 1) {
    alert(graciasCompra());
  }

  return -1;
}

const mensajeOpcionNoValida = () => {
  alert("Error por opción no valida ingresada o por haber clickeado sobre el botón 'Cancelar'");
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
    case 2:
      opcion = menuPrincipalPedido();
      break;
    default:
      mensajeOpcionNoValida();
      break;
  }
}

console.log("Fin");


