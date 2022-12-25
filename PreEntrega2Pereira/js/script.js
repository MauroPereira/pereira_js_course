// Declaración de constantes
// Productos por defecto
const cantTornillos = 10;
const precTornillos = 1.5;
const cantTuercas = 100;
const precTuercas = 2.0;
const cantClavos = 50;
const precClavos = 3.5;
const cantArandelas = 10;
const precArandelas = 4.52;

const enConstruccion = "En construcción"

// Declaración de variables
let opcion = -1
let idProducto = -1;
let idPersona = -1;

// Declaración de clases
class Producto {
  /* Clase Producto */
  constructor(nombre, precio, stock) {
    idProducto++;
    this.id = idProducto;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  /* Métodos */
}

class Persona {
  /* Clase Persona */
  constructor(nombre, apellido, contrasena, direccion, email, condicionIva) {
    idPersona++;
    this.id = idPersona;
    this.nombre = nombre;
    this.apellido = apellido;
    this.contrasena = contrasena;
    this.direccion = direccion;
    this.email = email;
    this.condicionIva = condicionIva;
  }
  /* Métodos */
}

// Declaración de funciones

const funcionMensajeAlert = (stringEncabezado, arrayVar, stringPie) => {
  /* Se encarga de armar un Alert con toda la informacion */

  let stringBuffer = stringEncabezado;

  // Crea un string de todo el stock
  for (const index of arrayVar) {
    stringBuffer = stringBuffer + `${index.nombre}   ${index.precio}   ${index.stock}\n`
  };

  stringBuffer = stringBuffer + stringPie;

  return parseInt(prompt(stringBuffer));
}

const mostrarTablaStock = (arrayProducto) => {
  /* Se encarga de retornar en forma de tabla todos los productos
  */
  const stringEncabezado = "######## Stock ########\nItems   Cantidad   Precio por unidad\n";
  const stringPie = "Ingrese 1 para realizar un pedido. 'Cancelar' o ingresar cualquier otra caracter para volver al menú principal.";

  return funcionMensajeAlert(stringEncabezado, arrayProducto, stringPie);
}

const mostrarMenuPrincipal = () => {
  /* Se encarga de retornar en forma de tabla el menú principal
  */

  return (
    "######## E-Shop de Ferretería ########" + "\n" +
    "Opciones:\n" +
    "1 - Ver stock general" + "\n" +
    "2 - Ver un producto en específico" + "\n" +
    "3 - Realizar pedido" + "\n" +
    "0 - Salir" + "\n\n" +
    "Ingrese alguna de las opciones."
  )
}

const menuTomarProducto = (arrayProducto) => {
  /* Se encarga de retornar el id de un producto
  */

  let repeat = true;
  let productoId = -1;

  const stringEncabezado = "######## Pedido - Producto ########\n";
  const stringPie = "Opciones:\n* Ingrese el nombre del producto en el cuadro y luego clickee 'Aceptar'. \n * Clickee 'Cancelar' para volver hacia atrás.";

  while (repeat == true) {
    // Crea un string de todo el stock
    productoNombre = (prompt(`${stringEncabezado} ${stringPie}`).toUpperCase());
    console.log(productoNombre);

    productoId = arrayProducto.find(objeto => objeto.nombre === productoNombre);
    console.log(productoId);

    if (productoId != "undefined") {
      return productoId;
    }
    else {
      mensajeOpcionNoValida("nombre de producto");
    }
  }
}

const preguntarCantidad = (producto) => {
  /* Obtiene la cantidad de producto
  */

  let value;

  while (true) {
    value = parseInt(prompt((
      "######## Pedido - Cantidad ########" + "\n" +
      "Ingrese la cantidad de " + producto + ":"
    )));
    if (value > 0) {
      return value;
    } else {
      alert("Error: la cantidad tiene que mayor a 0")
    }
  }
}

const chequearNanEspacioVacio = (mensaje) => {
  /* Se encarga de chequear que no sea NaN o 
  un espacio en blanco, independientemente del
  mensaje mostrado
  */

  let condicion = true;

  while (condicion == true) {
    valor = prompt(mensaje);
    console.log(valor);
    if (valor == "" || valor == null) {
      condicion = true;
      alert("Error: no se ha ingresado ningún valor o se ha clickeado sobre 'Cancelar'");
    } else {
      condicion = false;
    }
  }

  return valor;
}

const preguntarNombres = () => {
  /* Se encarga de preguntar nombres
  */

  valor = 0

  return chequearNanEspacioVacio(
    "######## Pedido - Nombres ########" + "\n" +
    "Ingrese su/s nombre/s:"
  );
}

const preguntarApellidos = () => {
  /* Se encarga de preguntar apellidos
  */

  return chequearNanEspacioVacio(
    "######## Pedido - Apellidos ########" + "\n" +
    "Ingrese su/s apellido/s:"
  )
}

const preguntarDireccion = () => {
  /* Se encarga de preguntar la dirección
  */

  return chequearNanEspacioVacio(
    "######## Pedido - Dirección ########" + "\n" +
    "Ingrese su dirección:"
  )
}

const preguntarEmail = () => {
  /* Se encarga de preguntar el email
  */

  return chequearNanEspacioVacio(
    "######## Pedido - E-mail ########" + "\n" +
    "Ingrese la dirección de su correo:"
  )
}

const emailComprador = () => {
  /* Se encarga de preguntar la dirección
  */
  return (
    "######## Pedido - Dirección ########" + "\n" +
    "Ingrese su dirección:"
  )
}

const preguntarCondicionIva = () => {
  /* Se encarga de preguntar la dirección
  */

  let condicion = -1;

  while (condicion == -1) {
    condicion = parseInt(prompt(
      "######## Pedido - IVA ########" + "\n" +
      "Condiciones frente al IVA:\n" +
      "1 - Exento" + "\n" +
      "2 - No exento" + "\n\n" +
      "Ingrese su condición:"
    ));
    if (!(condicion > 0 && condicion <= 2)) {
      condicion = -1;
      mensajeOpcionNoValida();
    }
  }

  return condicion;
}

const confirmarCompra = (productoId, productoQty, ivaComprador, precioFinal, nombresComprador, apellidosComprador, direccionComprador, emailComprador) => {
  /* Se encarga de retornar en forma de tabla todos los productos
  */

  let condicionIva = " | IVA exento";

  if (ivaComprador == 2) {
    condicionIva = " | incluye IVA";
  }

  return parseInt(prompt((
    "######## Confirmar compra ########" + "\n" +
    productoQty + " uni de " + convierteIdNombre(productoId) + " | Pre. uni: $" + precioProducto(productoId) + condicionIva + " | Precio final: $" + precioFinal + "\n" +
    "A nombre de: " + apellidosComprador + ", " + nombresComprador + ".\n" +
    "Dirección de entrega: " + direccionComprador + ". E-mail: " + emailComprador + ".\n\n" +
    "Ingrese 1 para confirmar la compra. Cualquier otro valor o click en 'Cancelar' cancelará la compra."
  )));
}

const chequearStock = (stock, cantSolicitada) => {
  /* Algoritmo que chequea si hay stock suficiente, caso contrario lo advierte 
  y devuelve true
  */

  if (stock - cantSolicitada >= 0) {
    return false;
  } else {
    alert("Error: cantidad pedida supera el stock de " + stock + " unidades");
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

const precioProducto = (productoId) => {
  /* Devuelve el precio por unidad del producto según
  su ID
  */

  switch (productoId) {
    case 1:
      return precTornillos;
    case 2:
      return precTuercas;
    case 3:
      return precClavos;
    case 4:
      return precArandelas;
    default:
      alert("Error")
      return 0;
  }
}

const calcularPrecioFinal = (productoId, productoQty, ivaComprador) => {
  /* Algoritmo que se encarga de calcular el precio final, que puede ser
  con o sin el IVA del 21%
  */

  let precioFinal = productoQty * precioProducto(productoId);

  if (ivaComprador == 2) {
    return precioFinal * 1.21;
  }

  return precioFinal;
}

const graciasCompra = () => {
  /* Mensaje de gracias por la compra
  */

  alert("Muchas gracias por su compra!");
}

const compraCancelada = () => {
  /* Mensaje de compra cancelada
  */

  alert("Atención: Compra cancelada!");
}

const descontarStock = (productoId, productoQty) => {
  switch (productoId) {
    case 1:
      cantTornillos = cantTornillos - productoQty;
      break;
    case 2:
      cantTuercas = cantTuercas - productoQty;
      break;
    case 3:
      cantClavos = cantClavos - productoQty;
      break;
    case 4:
      cantArandelas = cantArandelas - productoQty;
      break;
    default:
      alert("Error");
      break;

  }
}


const menuPrincipalPedido = (arrayProducto) => {
  /* Se encarga del proceso de tomar el pedido */
  let repeat = true;
  let productoId;
  let productoQty;
  let nombresComprador;
  let apellidosComprador;
  let emailComprador;
  let ivaComprador;
  let precioFinal;
  let confirmaCompra;

  while (repeat == true) {

    productoId = menuTomarProducto(arrayProducto);
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

  nombresComprador = preguntarNombres();
  apellidosComprador = preguntarApellidos();
  direccionComprador = preguntarDireccion();
  emailComprador = preguntarEmail();
  ivaComprador = preguntarCondicionIva();
  precioFinal = calcularPrecioFinal(productoId, productoQty, ivaComprador);
  confirmaCompra = confirmarCompra(productoId, productoQty, ivaComprador, precioFinal, nombresComprador, apellidosComprador, direccionComprador, emailComprador);

  if (confirmaCompra == 1) {
    descontarStock(productoId, productoQty);
    graciasCompra();
  } else {
    compraCancelada();
  }

  return -1;
}

const mensajeOpcionNoValida = (mensaje, genero = "o") => {
  if (genero == "o") {
    alert(`Error por ingreso de ${mensaje} no válido. Clickee 'Aceptar' para continuar`);
  }
  else {
    alert(`Error por ingreso de ${mensaje} no válida. Clickee 'Aceptar' para continuar`);
  }
}


// Main /////////////////////////////////////////////////////////////////////////////////
console.log("Inicio");

const arrayProducto = [
  new Producto("Tornillos".toUpperCase(), cantTornillos, precTornillos),
  new Producto("Tuercas".toUpperCase(), cantTuercas, precTuercas),
  new Producto("Clavos".toUpperCase(), cantClavos, precClavos),
  new Producto("Arandelas".toUpperCase(), cantArandelas, precArandelas)
];

for (const item of arrayProducto) {
  console.log(item)
};

while (opcion != 0) {
  opcion = parseInt(prompt(mostrarMenuPrincipal()))

  switch (opcion) {
    case 0:
      alert("Saliendo... Gracias por su visita.");
      break;
    case 1:
      opcion = mostrarTablaStock(arrayProducto);
      if (opcion == 1) {
        menuPrincipalPedido();
      } else {
        opcion = -1;
      }
      break;
    case 2:
      opcion = mostrarProductoEspecifico();
      breaj;
    case 3:
      opcion = menuPrincipalPedido(arrayProducto);
      break;
    default:
      mensajeOpcionNoValida();
      break;
  }
}

console.log("Fin");


