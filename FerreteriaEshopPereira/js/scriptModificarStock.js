// Declaración de constantes
const NO_CONSOLE_LOG = true;

// Declaración de variables
let opcion = -1
let idProducto = -1;
let arrayProducto = [];

// Declaraciones DOM
let cartasStock = document.querySelector(".stock-row");
let formAgregarProducto = document.querySelector("#form-agregar-producto");

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

  sobreescribirId(id) {
    this.id = id;
    idProducto = id;
  }
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

const menuPrincipalPedido = (arrayProducto, id, arrayCarritoCompras) => {
  /* Se encarga del proceso de tomar el pedido */
  let repeat = true;
  let repeat2 = true;
  let matchProducto = -1;
  let productoCantidad;

  while (repeat == true) {
    repeat = false;

    // matchProducto = menuTomarProducto(arrayProducto, id); // BORRAR FUNCIÓN
    matchProducto = arrayProducto.find(objeto => objeto.id === id);
    NO_CONSOLE_LOG ? null : console.log("matchProducto:");
    NO_CONSOLE_LOG ? null : console.log(matchProducto);

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
      if (repeat2 == true) {
        return -1;
      }
    }

    if (repeat != true) { // por si se quiere volver al estado anterior desde preguntarCantidad()

      // Bloque que se encarga de chequear que si existen Productos repetidos, de actualizarlos
      let matchProducto2 = arrayCarritoCompras.find(objeto => objeto.nombre === matchProducto.nombre);
      if (matchProducto2 == undefined) {
        matchProducto.pedidoCantidad = productoCantidad;  // carga la cantidad pedida en el objeto Producto
        arrayCarritoCompras.push(matchProducto); // se agrega un objeto Producto al arrayCarritoCompras
      }
      else {
        /* En este caso al existir ya el Producto y estar "referenciado" a una posición en el arrayCarritoCompras
        sólo con actualizar la cantidad pedida de producto se logra modificar el valor en el arrayCarritoCompras
        */
        matchProducto.pedidoCantidad = matchProducto.pedidoCantidad + productoCantidad;
      }
      //////////////////////////////////////////////////////////////////////////////////////////

      //let opcionSeguirComprando = mostrarCanastaYconsultar(arrayCarritoCompras);
      opcionSeguirComprando = 1;
      if (opcionSeguirComprando == null) {
        repeat = true;  // el usuario desea seguir cargando Productos al arrayCarritoCompras
        repeat2 = true;  // sino no entra en preguntarCantidad 
      }
      else {
        repeat = false;  // el usuario desea terminar la compra con Productos actuales en el arrayCarritoCompras    
      }
    }
  }

  return -1;
}

function crearHtmlStockProductos(array) {
  /* Se encarga de crear las card de forma dinámica del Stock de Productos */

  let html = "";

  cartasStock.innerHTML = html;  // Borra el DOM

  // Carga el dom con la información de array
  array.forEach((el) => {
    const { id, nombre, precio, stock, imagen } = el; // destructuring 
    html = `
      <div class="col p-2 card-productos">
        <div class="card" style="width: 13rem;">
            <img src="${imagen}" class="card-img-top card-img" alt="Imagen de ${nombre}">
            <div class="card-body">
              <h6 class="card-title">${nombre}</h6>
              <p class="card-text card-precio">$${precio} USD por unidad</p>
              <p class="card-text card-unidad">${stock} unidades disponibles</p>
            </div>
        </div>
      </div>
    `;

    cartasStock.innerHTML += html;
  });

  NO_CONSOLE_LOG ? null : console.log("INFO: Cargado el DOM");
  let elBtnAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");  // IMPORTANTE: la toma de nodos se debe hacer después de crear los elementos

  NO_CONSOLE_LOG ? null : console.log("INFO:");
  NO_CONSOLE_LOG ? null : console.log(elBtnAgregarCarrito);
}

const fncAgregarProducto = (e) => {
  /* Se encarga de leer los Datos de Compra
  */

  e.preventDefault();  // validación de compras

  let valNombreProducto = (document.querySelector("#in-nombre-producto").value).toUpperCase();
  let valPrecioUnidad = parseFloat(document.querySelector("#in-precio-unidad").value);
  let valUnidadesDisponibles = parseInt(document.querySelector("#in-unidades-disponibles").value);
  let valLinkImagen = document.querySelector("#in-link-imagen").value;

  arrayProducto.push(new Producto({ nombre: valNombreProducto, precio: valPrecioUnidad, stock: valUnidadesDisponibles, imagen: valLinkImagen }));

  Swal.fire({
    title: `Producto ${valNombreProducto} agregado correctamente.`,
    icon: 'success',
    confirmButtonText: 'OK',
    timer: 5000
  });

  // Se actualiza el local storage
  localStorage.setItem("arrayProductoLS", JSON.stringify(arrayProducto));
  NO_CONSOLE_LOG ? null : console.log("INFO: Actualizado el localStorage");
  NO_CONSOLE_LOG ? null : console.log("INFO de arrayProducto:")
  NO_CONSOLE_LOG ? null : console.log(arrayProducto);

  // Se carga nuevamente la sección de Productos
  crearHtmlStockProductos(arrayProducto);
  NO_CONSOLE_LOG ? null : console.log("INFO: Cargado el DOM");
}

const fncAgregarIva = (e) => {
  /* Se encarga de mostrar en pantalla o no el IVA
  */

  if (e.target.checked) {
    lblIncluyeIva.style.display = "inline";
    flagIncluyeIva = true;
  }
  else {
    lblIncluyeIva.style.display = "none";
    flagIncluyeIva = false;
  }

  // Se actualiza la información de precios      
  lblPrecioSubtotal.innerHTML = `Subtotal: $ ${precioSubtotal}`;
  lblIncluyeIva.innerHTML = `Incluye IVA 21%: $ ${precioSubtotal * 0.21}`;
  flagIncluyeIva ? precioTotal = precioSubtotal * 1.21 : precioTotal = precioSubtotal;
  lblPrecioTotal.innerHTML = `Total: $ ${precioTotal} `;
}

// Main /////////////////////////////////////////////////////////////////////////////////
NO_CONSOLE_LOG ? null : console.log("Inicio\nACLARACIÓN: la consola sólo es a modo de debug.");

// LocalStorage Productos
// IMPORTANTE: no se guardan los métodos de un objeto
if (localStorage.getItem("arrayProductoLS")) {
  arrayProductoAlmacenado = JSON.parse(localStorage.getItem("arrayProductoLS"));
  NO_CONSOLE_LOG ? null : console.log(arrayProductoAlmacenado);

  for (const obj of arrayProductoAlmacenado)
    arrayProducto.push(new Producto(obj));

  NO_CONSOLE_LOG ? null : console.log("INFO: Recuperado de localStorage");
}

NO_CONSOLE_LOG ? null : console.log("INFO de arrayProducto:");
NO_CONSOLE_LOG ? null : console.log(arrayProducto);

// Carga de DOM
crearHtmlStockProductos(arrayProducto);

// Listeners de nodos fijos
formAgregarProducto.addEventListener("submit", fncAgregarProducto);
///////////////////////////////////////////////////////////////////////////////////
