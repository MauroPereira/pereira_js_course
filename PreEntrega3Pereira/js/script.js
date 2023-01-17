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
let arrayProducto;
//const arrayCanasta = [];  // array donde se colocan los objetos que el usuario desea comprar

// Declaraciones DOM
let columnasCartas = document.querySelector(".stock-row");
let columnaCarritoDeCompras = document.querySelector(".container-carrito-de-compras");

// Declaración de clases
class Producto {
  /* Clase Producto */
  constructor(obj) {
    idProducto++;
    this.id = idProducto;
    this.nombre = obj.nombre;
    this.precio = obj.precio;
    this.stock = obj.stock;
    this.imagen = obj.imagen;
    this.pedidoCantidad = 0;
  }
  /* Métodos */
  actualizarStock() {
    this.stock = this.stock - this.pedidoCantidad;
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
    stringBuffer = stringBuffer + `${index.nombre}   ${index.pedidoCantidad} uni  $ ${index.pedidoCantidad * index.precio}\n`
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
    "* 2 - Realizar pedido" + "\n" +
    "* 3 - Loguearse" + "\n\n" +
    "* Clickee 'Cancelar' para salir."
  )
}

const menuTomarProducto = (arrayProducto, id) => {
  /* Se encarga de retornar el id de un producto
  */

  let matchProducto = -1;

  matchProducto = arrayProducto.find(objeto => objeto.id === id);
  console.log(matchProducto);

  return matchProducto;

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

const chequearEspacioVacio = (mensaje) => {
  /* Se encarga de chequear que no se ingrese 
  un espacio en blanco, independientemente del
  mensaje mostrado
  */

  let condicion = true;

  while (condicion == true) {
    valor = prompt(mensaje);
    console.log(valor);
    if (valor == "") {
      condicion = true;
      alert("Error: no se ha ingresado ningún valor. Clickee en 'Aceptar' para continuar.");
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

  const stringEncabezado = "######## Confirmar compra ########\n";

  const stringPie = `A nombre de: ${personaComprador.apellido}, ${personaComprador.nombre}\nDirección de entrega: ${personaComprador.direccion}. E-mail: ${personaComprador.email}\n\nOpciones:\n* Clickee 'Aceptar' para confirmar la compra. \n* Clickee 'Cancelar' para cancelar la compra.\nNo ingrese ningún valor en el cuadro de texto.`;

  let stringBuffer = stringEncabezado;
  let precioTotal = 0.0;

  console.log(personaComprador.condicionIva);

  // Crea un string de todo el stock
  for (const index of arrayCanasta) {
    stringBuffer = stringBuffer + `${index.pedidoCantidad} uni de ${index.nombre}  | Pre. uni: $ ${index.precio} | Subtotal: $ ${index.precio * index.pedidoCantidad}\n`
    precioTotal = precioTotal + index.pedidoCantidad * index.precio;
  };

  if (personaComprador.condicionIva == 2) {
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

const calcularPrecioFinal = (matchProducto, productoCantidad, ivaComprador) => {
  /* Algoritmo que se encarga de calcular el precio final, que puede ser
  con o sin el IVA del 21%
  */

  let precioFinal = productoCantidad * matchProducto.precio;

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

const menuPrincipalPedido = (arrayProducto, id) => {
  /* Se encarga del proceso de tomar el pedido */
  let repeat = true;
  let repeat2 = true;
  let matchProducto = -1;
  let productoCantidad;
  let nombresComprador;
  let apellidosComprador;
  let emailComprador;
  let ivaComprador;
  let confirmaCompra;

  while (repeat == true) {
    repeat = false;

    // matchProducto = menuTomarProducto(arrayProducto, id); // BORRAR FUNCIÓN
    matchProducto = arrayProducto.find(objeto => objeto.id === id);
    console.log("matchProducto:");
    console.log(matchProducto);

    if (matchProducto == -1) {
      return -1;
    }

    while (repeat2 == true) {
      //productoCantidad = preguntarCantidad(matchProducto); // BORRAR FUNCIÓN
      productoCantidad = 1;
      // if (productoCantidad == -1) {
      //   repeat = true;  // para que vuelva al estado anterior
      //   break;
      // }
      // Tengase en cuenta que si el usuario vuelve a pedir el mismo producto, debe descontarse
      // del stock de Producto la cantidad pedida anterior, debido a eso se realiza la resta.
      // Hasta que el usuario no confirme la compra, no se va a descontar la cantidad pedida del
      // stock. En caso de se trate de una base de datos y varios usuarios esten realizando pedidos
      // al mismo tiempo, esto puede llegar a generar un error de stock.
      repeat2 = chequearStock(matchProducto.stock - matchProducto.pedidoCantidad, productoCantidad);
    }

    if (repeat != true) { // por si se quiere volver al estado anterior desde preguntarCantidad()

      // Bloque que se encarga de chequear que si existen Productos repetidos, de actualizarlos
      let matchProducto2 = arrayCanasta.find(objeto => objeto.nombre === matchProducto.nombre);
      if (matchProducto2 == undefined) {
        matchProducto.pedidoCantidad = productoCantidad;  // carga la cantidad pedida en el objeto Producto
        arrayCanasta.push(matchProducto); // se agrega un objeto Producto al arrayCanasta
      }
      else {
        /* En este caso al existir ya el Producto y estar "referenciado" a una posición en el arrayCanasta
        sólo con actualizar la cantidad pedida de producto se logra modificar el valor en el arrayCanasta
        */
        matchProducto.pedidoCantidad = matchProducto.pedidoCantidad + productoCantidad;
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

  return -1;

  // Bloque que se encarga de tomar los datos del comprador y crear un objeto Persona
  nombresComprador = "Comprador";
  apellidosComprador = "Comprador";
  direccionComprador = "Comprador";
  emailComprador = "Comprador";
  ivaComprador = 2;
  console.log(`ivaComprador: ${ivaComprador}`);

  const personaComprador = new Persona(nombresComprador, apellidosComprador, direccionComprador, emailComprador, ivaComprador);
  ///////////////////////////////////////////////////////////////////////////////////

  confirmaCompra = confirmarCompra(arrayCanasta, personaComprador);
  console.log("post confirmaCompra:");
  console.log(arrayCanasta);

  if (confirmaCompra != null) { // El usuario apretó 'Aceptar' en la pantalla anterior
    // Bloque que al efectuarse la compra, se encarga de extraer del stock las cantidades
    // pedidas por el usuario. Luego setea a 0 las cantidades pedidas dentro de cada objeto
    // Producto
    arrayCanasta.forEach(object => {
      console.log(object);
      object.actualizarStock();
      object.pedidoCantidad = 0;
    })
    /////////////////////////////////////////////////////////////////////////////////////
    graciasCompra();
  } else {
    arrayCanasta.forEach(object => {
      object.pedidoCantidad = 0;
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

const menuPrincipalLog = (arrayAdmin, arrayProducto) => {
  /* Pantalla de logueo */
  const stringEncabezado = `######## Login ########\n`;
  const stringPie = `Ingrese su nick y clickee en 'Aceptar'. Cancelar para volver al menú principal.\n\n`;
  const stringPie2 = `Ingrese su contraseña y clickee en 'Aceptar'. Cancelar para volver al menú principal.\n\n`;
  let matchAdmin;

  let stringBuffer = stringEncabezado + stringPie;
  while (true) {
    let nick = prompt(stringBuffer);
    if (nick == undefined) {
      return -1;
    }
    nick = nick.toLowerCase();
    matchAdmin = arrayAdmin.find(objeto => objeto.nick === nick.toLowerCase());
    if (matchAdmin == undefined) {
      alert(`Nick no encontrado. Clickee 'Aceptar' para continuar`);
    } else {
      break;
    }
  }
  console.log(`Nick ${matchAdmin.nick} encontrado.`);

  stringBuffer = stringEncabezado + stringPie2;
  while (true) {
    let password = prompt(stringBuffer);
    console.log(password);

    if (password == undefined) {
      return -1;
    }
    if (matchAdmin.password != password) {
      alert(`Password inválido. Clickee 'Aceptar' para continuar`);
    } else {
      break;
    }
  }
  console.log(`Password ${matchAdmin.password} encontrado.`);

  return menuPrincipalAgregarProducto(arrayProducto);
}

const pantallaAgregarProducto = (arrayProducto) => {
  /* Pantalla donde se agregan productos
  */

  const stringEncabezado = `######## Agregar producto ########\n`;
  const stringPie = `Ingrese el nombre del producto y clickee en 'Aceptar'. Cancelar para volver al menú principal.\n\n`;
  const stringPie2 = `Ingrese el precio del producto y clickee en 'Aceptar'. Cancelar para volver al menú principal.\n\n`;
  const stringPie3 = `Ingrese el stock del producto y clickee en 'Aceptar'. Cancelar para volver al menú principal.\n\n`;
  let stringBuffer = stringEncabezado + stringPie;
  let nombreProductoNuevo;
  let precioProductoNuevo;
  let stockProductoNuevo;

  nombreProductoNuevo = chequearEspacioVacio(stringBuffer);
  if (nombreProductoNuevo == undefined || nombreProductoNuevo == null) {
    return -1;
  }

  stringBuffer = stringEncabezado + stringPie2;
  precioProductoNuevo = chequearEspacioVacio(stringBuffer);
  if (precioProductoNuevo == undefined || precioProductoNuevo == null) {
    return -1;
  }

  stringBuffer = stringEncabezado + stringPie3;
  stockProductoNuevo = chequearEspacioVacio(stringBuffer);
  if (stockProductoNuevo == undefined || stockProductoNuevo == null) {
    return -1;
  }

  // ///////////////////
  // stringEncabezado = "######## Nuevo Stock ########\nItems      Precio por unidad   Cantidad en stock\n";
  // const stringPie = "Opciones: \n" +
  //   "* Para realizar un pedido ingrese 1 en el cuadro y luego clickee 'Aceptar':\n" +
  //   "* Clickee 'Cancelar' para volver atrás.";

  // return funcionMensajeAlert(stringEncabezado, arrayProducto, stringPie);
  // /////////////


  return -1;
}

function crearHtml(array) {
  /* Se encarga de crear las card de los diferentes Productos */
  let html;

  array.forEach((el) => {
    const { id, nombre, precio, stock, imagen } = el; // destructuring 
    html = `
      <div class="col p-2">
        <div class="card" style="width: 13rem;">
            <img src="${imagen}" class="card-img-top card-img" alt="Imagen de ${nombre}">
            <div class="card-body">
              <h6 class="card-title">${nombre}</h6>
              <p class="card-text card-precio">$${precio} por unidad</p>
              <p class="card-text card-unidad">${stock} unidades disponibles</p>
              <a href="#" id="${id}" class="btn btn-primary btn-agregar-carrito">Agregar al carrito</a>
            </div>
        </div>
      </div>
    `;

    columnasCartas.innerHTML += html;
  });
}

function crearHtmlCanasta(array) {
  /* Se encarga de crear las card de los diferentes Productos */
  let html;

  cartasCarritoDeCompras = document.querySelectorAll(".card-carrito");
  console.log(cartasCarritoDeCompras);
  if (cartasCarritoDeCompras.length != 0) {
    for (const obj of cartasCarritoDeCompras)
      obj.remove();
  }

  array.forEach((el) => {
    const { id, nombre, precio, pedidoCantidad, imagen } = el; // destructuring 
    html = `
        <div class="card card-carrito" style="width: 500px;">
          <div class="row no-gutters">
            <div class="col-sm-5">
              <img class="card-img" src="${imagen}" alt="Imagen de ${nombre}">
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">Cantidad pedida: ${pedidoCantidad}</p>
                <p class="card-text">Precio por unidad: $${precio}</p>
                <a href="#" id="${id}" class="btn btn-primary btn-eliminar-del-carrito">Eliminar producto</a>
              </div>
            </div>
          </div>
        </div>
    `;

    columnaCarritoDeCompras.innerHTML += html;
  });
}

// Main /////////////////////////////////////////////////////////////////////////////////
console.log("Inicio\nACLARACIÓN: la consola sólo es a modo de debug, los mensajes de usuario serán \
proporcionados por alert y prompt.");

// LocalStorage Productos
// IMPORTANTE: no se guardan los métodos de un objeto
if (localStorage.getItem("arrayProducto")) {
  arrayProductoAlmacenado = JSON.parse(localStorage.getItem("arrayProductoAlmacenado"));

  for (const obj of arrayProductoAlmacenado)
    arrayProducto.push(new Producto(obj));

  console.log("INFO: Recuperado de localStorage");
} else {
  arrayProducto = [
    new Producto({ nombre: "Tornillo".toUpperCase(), precio: precTornillo, stock: cantTornillo, imagen: "./imagenes/tornillo.webp" }),
    new Producto({ nombre: "Tuerca".toUpperCase(), precio: precTuerca, stock: cantTuerca, imagen: "./imagenes/tuerca.jpeg" }),
    new Producto({ nombre: "Clavo".toUpperCase(), precio: precClavo, stock: cantClavo, imagen: "./imagenes/clavo.webp" }),
    new Producto({ nombre: "Arandela".toUpperCase(), precio: precArandela, stock: cantArandela, imagen: "./imagenes/arandela.jpeg" })
  ];

  // Se guarda en localStorage
  // NOTA: no importa que guarde un arreglo de objetos, no guarda los métodos de dichos objetos
  localStorage.setItem("arrayProductoAlmacenado", JSON.stringify(arrayProducto));
  console.log("INFO: Guardado en localStorage");
}
console.log("INFO de arrayProducto:")
console.log(arrayProducto);

// SesionStorage Canasta
const arrayCanasta = [];  // array donde se colocan los objetos que el usuario desea comprar


// Carga de DOM
crearHtml(arrayProducto);
console.log("INFO: Cargado el DOM");
let elBtnAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");  // IMPORTANTE: la toma de nodos se debe hacer después de crear los elementos

console.log("INFO:");
console.log(elBtnAgregarCarrito);

// Listeners
elBtnAgregarCarrito.forEach(object => {
  console.log(object);
  object.addEventListener("click", e => {
    console.log(`ID del Producto ckickeado: ${e.target.id}`);
    opcion = menuPrincipalPedido(arrayProducto, parseInt(e.target.id));
    console.log("INFO: arrayCanasta");
    console.log(arrayCanasta);

    crearHtmlCanasta(arrayCanasta);
  });
});




// while (opcion != 0) {
//   opcion = prompt(mostrarMenuPrincipal());
//   console.log(opcion)
//   if (opcion == null) {
//     opcion = 0;
//   } else {
//     opcion = parseInt(opcion);
//   }

//   switch (opcion) {
//     case 0:
//       alert("Saliendo... Gracias por su visita.");
//       break;
//     case 1:
//       opcion = mostrarTablaStock(arrayProducto);
//       if (opcion == 1) {
//         opcion = menuPrincipalPedido(arrayProducto);
//       } else {
//         opcion = -1;
//       }
//       break;
//     case 2:
//       opcion = menuPrincipalPedido(arrayProducto);
//       console.log(`opcion ${opcion}`);
//       break;
//     case 3:
//       opcion = menuPrincipalLog(arrayAdmin, arrayProducto);
//       console.log(`opcion ${opcion}`);
//       break;
//     default:
//       mensajeOpcionNoValida("opción", "a");
//       break;
//   }
// }

// console.log("Fin");
///////////////////////////////////////////////////////////////////////////////////
