// Declaración de constantes
// Productos por defecto
const cantTornillo = 10;
const precTornillo = 1.5;
const cantTuerca = 100;
const precTuerca = 2.0;
const cantClavo = 50;
const precClavo = 3.5;
const cantArandela = 10;
const precArandela = 4.52;

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
    this.pedidoQty = 0;
  }
  /* Métodos */
  actualizarStock() {
    this.stock = this.stock - this.pedidoQty;
  }
}

class Persona {
  /* Clase Persona */
  constructor(nombre, apellido, direccion, email, condicionIva) {
    idPersona++;
    this.id = idPersona;
    this.nombre = nombre;
    this.apellido = apellido;
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
    stringBuffer = stringBuffer + `${index.nombre}      $ ${index.precio}      ${index.stock} uni\n`
  };

  stringBuffer = stringBuffer + stringPie;

  return parseInt(prompt(stringBuffer));
}

const funcionMensajeAlertCanasta = (stringEncabezado, arrayVar, stringPie) => {
  /* Se encarga de armar un Alert con toda la informacion pero en formato Canasta */

  let stringBuffer = stringEncabezado;

  // Crea un string de todo el stock
  for (const index of arrayVar) {
    stringBuffer = stringBuffer + `${index.nombre}   ${index.pedidoQty} uni  $ ${index.pedidoQty * index.precio}\n`
  };

  stringBuffer = stringBuffer + stringPie;

  return prompt(stringBuffer);
}

const mostrarTablaStock = (arrayProducto) => {
  /* Se encarga de retornar en forma de tabla todos los productos
  */

  const stringEncabezado = "######## Stock ########\nItems      Precio por unidad   Cantidad en stock\n";
  const stringPie = "Opciones: \n" +
    "* Para realizar un pedido ingrese 1 en el cuadro y luego clickee 'Aceptar':\n" +
    "* Clickee 'Cancelar' para volver atrás.";

  return funcionMensajeAlert(stringEncabezado, arrayProducto, stringPie);
}

const mostrarMenuPrincipal = () => {
  /* Se encarga de retornar en forma de tabla el menú principal
  */

  return (
    "######## E-Shop de Ferretería ########" + "\n" +
    "Ingrese algunas de las opciones y luego clickee 'Aceptar':\n" +
    "* 1 - Ver stock general" + "\n" +
    "* 2 - Realizar pedido" + "\n\n" +
    "* Clickee 'Cancelar' para salir."
  )
}

const menuTomarProducto = (arrayProducto) => {
  /* Se encarga de retornar el id de un producto
  */

  let matchProducto = -1;

  const stringEncabezado = "######## Pedido - Producto ########\n";
  const stringPie = "Opciones:\n* Ingrese el nombre del producto en el cuadro y luego clickee 'Aceptar'. \n * Clickee 'Cancelar' para volver hacia atrás.";

  while (true) {
    // Crea un string de todo el stock
    productoNombre = prompt(`${stringEncabezado} ${stringPie}`);
    console.log(productoNombre);

    if (productoNombre == null) {
      return -1;
    }

    matchProducto = arrayProducto.find(objeto => objeto.nombre === productoNombre.toUpperCase());
    console.log(matchProducto);

    if (matchProducto != undefined) {
      return matchProducto;
    } else {
      mensajeOpcionNoValida("nombre de producto");
    }
  }
}

const preguntarCantidad = (objectProducto) => {
  /* Obtiene la cantidad de producto
  */

  let cantProducto;

  while (true) {
    const stringEncabezado = `######## Pedido - Cantidad ########\n`;
    const stringPie = `Opciones:\n* Ingrese la cantidad de ${objectProducto.nombre} en el cuadro y luego clickee 'Aceptar'. \n * Clickee 'Cancelar' para volver hacia atrás.`;

    cantProducto = prompt(`${stringEncabezado} ${stringPie}`);

    if (cantProducto == null) {
      return -1;
    }

    if (parseInt(cantProducto) > 0) {
      return parseInt(cantProducto);
    }
    else {
      alert(`Error por cantidad ingresada menor a 1. Clickee 'Aceptar' para continuar`);
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

const confirmarCompra = (arrayCanasta, personaComprador) => {
  /* Se encarga de retornar en forma de tabla todos los productos
  */

  const condicionIva = " | IVA exento";
  const stringEncabezado = "######## Confirmar compra ########\n";

  const stringPie = `A nombre de: ${personaComprador.apellido}, ${personaComprador.nombre}\nDirección de entrega: ${personaComprador.direccion}. E-mail: ${personaComprador.email}\n\nOpciones:\n* Clickee 'Aceptar' para confirmar la compra. \n* Clickee 'Cancelar' para cancelar la compra.\nNo ingrese ningún valor en el cuadro de texto.`;

  let stringBuffer = stringEncabezado;
  let precioTotal = 0.0;

  if (personaComprador.ivaComprador == 2) {
    condicionIva = " | incluye IVA";
  }

  // Crea un string de todo el stock
  for (const index of arrayCanasta) {
    stringBuffer = stringBuffer + `${index.pedidoQty} uni de ${index.nombre}  | Pre. uni: $ ${index.precio} | Subtotal: $ ${index.precio * index.pedidoQty}\n`
    precioTotal = precioTotal + index.pedidoQty * index.precio;
  };

  if (personaComprador.ivaComprador == 2) {
    stringBuffer = stringBuffer + `Subtotal s/iva: $ ${precioTotal} | TOTAL A PAGAR c/iva 21%: $ ${precioTotal * 1.21}\n`;
  }
  else {
    stringBuffer = stringBuffer + `TOTAL A PAGAR: $ ${precioTotal}\n`;
  }

  stringBuffer = stringBuffer + stringPie;

  while (true) {
    opcion = prompt(stringBuffer);
    if (opcion != null && opcion != "") {
      alert(`Error por escritura en cuadro. Clickee 'Aceptar' para continuar.`);
    }
    else {
      return opcion;
    }
  }
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

const calcularPrecioFinal = (matchProducto, productoQty, ivaComprador) => {
  /* Algoritmo que se encarga de calcular el precio final, que puede ser
  con o sin el IVA del 21%
  */

  let precioFinal = productoQty * matchProducto.precio;

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

const mostrarCanastaYconsultar = (arrayProducto) => {
  /* Se encarga de mostrar la Canasta actual y preguntar si
  se desea seguir comprando 
  */

  const stringEncabezado = "######## Canasta de productos ########\nItems   Cantidad   Subtotal\n";
  const stringPie = "\nOpciones: \n" +
    "* Clickee 'Aceptar' sin escribir en el cuadro para proceder con la compra de la canasta.\n" +
    "* Clickee 'Cancelar' para agregar más productos a la canasta.";

  let opcion;

  while (true) {
    opcion = funcionMensajeAlertCanasta(stringEncabezado, arrayProducto, stringPie);
    console.log(opcion);

    if (opcion != null && opcion != "") {
      alert(`Error por escritura en cuadro. Clickee 'Aceptar' para continuar.`);
    }
    else {
      return opcion;
    }
  }
}

const menuPrincipalPedido = (arrayProducto) => {
  /* Se encarga del proceso de tomar el pedido */
  let repeat = true;
  let repeat2 = true;
  let matchProducto;
  let productoQty;
  let nombresComprador;
  let apellidosComprador;
  let emailComprador;
  let ivaComprador;
  let confirmaCompra;

  const arrayCanasta = [];  // array donde se colocan los objetos que el usuario desea comprar

  while (repeat == true) {
    repeat = false;

    matchProducto = menuTomarProducto(arrayProducto);
    console.log(`Producto elegido: ${matchProducto}`);

    if (matchProducto == -1) {
      return -1;
    }

    while (repeat2 == true) {
      productoQty = preguntarCantidad(matchProducto);
      if (productoQty == -1) {
        repeat = true;  // para que vuelva al estado anterior
        break;
      }
      // Tengase en cuenta que si el usuario vuelve a pedir el mismo producto, debe descontarse
      // del stock de Producto la cantidad pedida anterior, debido a eso se realiza la resta.
      // Hasta que el usuario no confirme la compra, no se va a descontar la cantidad pedida del
      // stock. En caso de se trate de una base de datos y varios usuarios esten realizando pedidos
      // al mismo tiempo, esto puede llegar a generar un error de stock.
      repeat2 = chequearStock(matchProducto.stock - matchProducto.pedidoQty, productoQty);
    }

    if (repeat != true) { // por si se quiere volver al estado anterior desde preguntarCantidad()

      // Bloque que se encarga de chequear que si existen Productos repetidos, de actualizarlos
      let matchProducto2 = arrayCanasta.find(objeto => objeto.nombre === matchProducto.nombre);
      if (matchProducto2 == undefined) {
        matchProducto.pedidoQty = productoQty;  // carga la cantidad pedida en el objeto Producto
        arrayCanasta.push(matchProducto); // se agrega un objeto Producto al arrayCanasta
      }
      else {
        /* En este caso al existir ya el Producto y estar "referenciado" a una posición en el arrayCanasta
        sólo con actualizar la cantidad pedida de producto se logra modificar el valor en el arrayCanasta
        */
        matchProducto.pedidoQty = matchProducto.pedidoQty + productoQty;
      }
      //////////////////////////////////////////////////////////////////////////////////////////

      let opcionSeguirComprando = mostrarCanastaYconsultar(arrayCanasta);
      if (opcionSeguirComprando == null) {
        repeat = true;  // el usuario desea seguir cargando Productos al arrayCanasta
        repeat2 = true;  // sino no entra en preguntarCantidad 
      }
      else {
        repeat = false;  // el usuario desea terminar la compra con Productos actuales en el arrayCanasta    
      }
    }
  }

  // Bloque que se encarga de tomar los datos del comprador y crear un objeto Persona
  nombresComprador = preguntarNombres();
  apellidosComprador = preguntarApellidos();
  direccionComprador = preguntarDireccion();
  emailComprador = preguntarEmail();
  ivaComprador = preguntarCondicionIva();

  const personaComprador = new Persona(nombresComprador, apellidosComprador, direccionComprador, emailComprador, ivaComprador);
  ///////////////////////////////////////////////////////////////////////////////////

  //precioFinal = calcularPrecioFinal(matchProducto, productoQty, ivaComprador);
  confirmaCompra = confirmarCompra(arrayCanasta, personaComprador);

  if (confirmaCompra != null) { // El usuario apretó 'Aceptar' en la pantalla anterior
    // Bloque que al efectuarse la compra, se encarga de extraer del stock las cantidades
    // pedidas por el usuario. Luego setea a 0 las cantidades pedidas dentro de cada objeto
    // Producto
    arrayProducto.forEach(object => {
      object.actualizarStock();
      objecto.pedidoQty = 0;
    })
    /////////////////////////////////////////////////////////////////////////////////////
    graciasCompra();
  } else {
    arrayProducto.forEach(object => {
      objecto.pedidoQty = 0;
    })
    compraCancelada();
  }
  return -1;
}

const mensajeOpcionNoValida = (mensaje, genero = "o") => {
  /* Mensaje de opcion no valida con opciones de visualización
  */

  if (genero == "o") {
    alert(`Error por ingreso de ${mensaje} no válido. Clickee 'Aceptar' para continuar.`);
  }
  else {
    alert(`Error por ingreso de ${mensaje} no válida. Clickee 'Aceptar' para continuar.`);
  }
}

// Main /////////////////////////////////////////////////////////////////////////////////
console.log("Inicio\nACLARACIÓN: la consola sólo es a modo de debug, los mensajes de usuario serán \
  proporcionados por alert y prompt.");

const arrayProducto = [
  new Producto("Tornillo".toUpperCase(), precTornillo, cantTornillo),
  new Producto("Tuerca".toUpperCase(), precTuerca, cantTuerca),
  new Producto("Clavo".toUpperCase(), precClavo, cantClavo),
  new Producto("Arandela".toUpperCase(), precArandela, cantArandela)
];

for (const item of arrayProducto) {
  console.log(item)
};

while (opcion != 0) {
  opcion = prompt(mostrarMenuPrincipal());
  console.log(opcion)
  if (opcion == null) {
    opcion = 0;
  } else {
    opcion = parseInt(opcion);
  }

  switch (opcion) {
    case 0:
      alert("Saliendo... Gracias por su visita.");
      break;
    case 1:
      opcion = mostrarTablaStock(arrayProducto);
      if (opcion == 1) {
        opcion = menuPrincipalPedido(arrayProducto);
      } else {
        opcion = -1;
      }
      break;
    case 2:
      opcion = menuPrincipalPedido(arrayProducto);
      console.log(`opcion ${opcion}`);
      break;
    default:
      mensajeOpcionNoValida("opción", "a");
      break;
  }
}

console.log("Fin");
///////////////////////////////////////////////////////////////////////////////////