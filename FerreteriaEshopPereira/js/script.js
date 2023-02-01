// Declaración de constantes
const NO_CONSOLE_LOG = true;

// Productos por defecto
const cantTornillo = 10;
const precTornillo = 1.5;
const cantTuerca = 100;
const precTuerca = 2.0;
const cantClavo = 50;
const precClavo = 3.5;
const cantArandela = 10;
const precArandela = 4.52;

// Declaración de variables
let opcion = -1
let idProducto = -1;
let idPersona = -1;
let arrayProducto = [];
const arrayCarritoCompras = [];  // Array donde se guardan los Productos a comprar
let flagIncluyeIva = false;  // flag que indica si se incluye IVA o no
let precioSubtotal = 0;
let precioIncluyeIva = 0;
let precioTotal = 0;
let precioDolar = 0.00;

// Declaraciones DOM
let cartasStock = document.querySelector(".stock-row");
let cartasCarritoCompras = document.querySelector(".container-carrito-de-compras");
let formDatosCompra = document.querySelector("#form-datos-compra");
let chckbxExentoIva = document.querySelector('input[type="checkbox"]');
let lblPrecioSubtotal = document.querySelector("#lbl-precio-subtotal");
let lblIncluyeIva = document.querySelector("#lbl-incluye-iva");
let lblPrecioTotal = document.querySelector("#lbl-precio-total");
let lblPrecioTotalPesos = document.querySelector("#lbl-precio-total-pesos");
let btnComprarCarrito = document.querySelector("#btn-comprar-carrito");
let btnModificarStock = document.querySelector("#btn-modificar-stock");
let bdgCotizacionDolar = document.querySelector("#bdg-cotizacion-dolar");

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

class Persona {
  /* Clase Persona */
  constructor(obj) {
    idPersona++;
    this.id = idPersona;
    this.nombre = obj.nombre;
    this.apellido = obj.apellido;
    this.direccion = obj.direccion;
    this.email = obj.email;
    this.condicionIva = obj.condicionIva;
  }
  /* Métodos */
}

const chequearStock = (stock, cantSolicitada) => {
  /* Algoritmo que chequea si hay stock suficiente, caso contrario lo advierte 
  y devuelve true
  */

  if (stock - cantSolicitada >= 0) {
    return false;
  } else {
    Swal.fire({
      title: `Error!`,
      icon: 'error',
      text: `La cantidad pedida supera las unidades disponibles.`,
      confirmButtonText: 'OK',
    });
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
              <a href="#" id="${id}" class="btn btn-primary btn-agregar-carrito">Agregar al carrito</a>
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

  // Listeners
  elBtnAgregarCarrito.forEach(object => {
    NO_CONSOLE_LOG ? null : console.log(object);
    object.addEventListener("click", e => {
      NO_CONSOLE_LOG ? null : console.log(`ID del Producto ckickeado: ${e.target.id} `);
      opcion = menuPrincipalPedido(arrayProducto, parseInt(e.target.id), arrayCarritoCompras);
      NO_CONSOLE_LOG ? null : console.log("INFO: arrayCarritoCompras");
      NO_CONSOLE_LOG ? null : console.log(arrayCarritoCompras);

      // Se borran los precios
      precioSubtotal = 0;
      precioIncluyeIva = 0;
      precioTotal = 0;
      precioTotalPesos = 0;

      // Se realiza la cuenta
      arrayCarritoCompras.forEach(object => {
        NO_CONSOLE_LOG ? null : console.log(object);
        precioSubtotal += object.pedidoCantidad * object.precio;

      });

      // Se actualiza la información de precios      
      lblPrecioSubtotal.innerHTML = `Subtotal: $${precioSubtotal.toFixed(3)} USD`;
      lblIncluyeIva.innerHTML = `Incluye IVA 21%: $${(precioSubtotal * 0.21).toFixed(3)} USD`;
      flagIncluyeIva ? precioTotal = precioSubtotal * 1.21 : precioTotal = precioSubtotal;
      lblPrecioTotal.innerHTML = `Total: $${precioTotal.toFixed(3)} USD`;
      lblPrecioTotalPesos.innerHTML = `Total: $${(precioTotal * precioDolar).toFixed(2)} ARS`;

      // Se crea el carrito
      crearHtmlCarritoCompras(arrayCarritoCompras);
    });
  });
}

function crearHtmlCarritoCompras(array) {
  /* Se encarga de crear las card de forma dinámica del Carrito de Compras 
  */

  let html;

  cartasCarritoCompras.innerHTML = html;  // Borra el DOM

  cartasCarritoCompras.innerHTML = "";

  array.forEach((el) => {
    const { id, nombre, precio, pedidoCantidad, imagen } = el; // destructuring
    if (pedidoCantidad != 0) {
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
                <p class="card-text">Precio por unidad: $${precio} USD</p>
                <!-- Todavía no implementado -->
                <!-- <a href="#" id="${id}" class="btn btn-primary btn-eliminar-del-carrito">Eliminar producto</a>  -->
              </div>
            </div>
          </div>
        </div>
    `;
    }

    cartasCarritoCompras.innerHTML += html;
  });
}

const fncRealizarCompra = (e) => {
  /* Se encarga de leer los Datos de Compra
  */

  e.preventDefault();  // validación de compras

  let valNombres = document.querySelector("#input-nombres").value;
  let valApellidos = document.querySelector("#input-apellidos").value;
  let valDireccion = document.querySelector("#input-direccion").value;
  let valEmail = document.querySelector("#input-email").value;

  if (arrayCarritoCompras.length === 0) {
    Swal.fire({
      title: `Atención!`,
      icon: 'warning',
      text: `El carrito de compras está vacío.`,
      confirmButtonText: 'OK',
    });
    return;
  }

  Swal.fire({
    title: `Gracias por su compra ${valNombres} ${valApellidos}!`,
    icon: 'success',
    text: `Destino del envio: ${valDireccion}.\nSe le enviará un email a ${valEmail} con toda la información de compra.`,
    confirmButtonText: 'OK',
    timer: 10000
  });

  // Actualiza los Productos del carrito de compras
  arrayCarritoCompras.forEach(object => {
    NO_CONSOLE_LOG ? null : console.log(object);
    object.actualizarStock();
    object.pedidoCantidad = 0;
  });

  // Se actualiza el local storage
  localStorage.setItem("arrayProductoLS", JSON.stringify(arrayProducto));
  NO_CONSOLE_LOG ? null : console.log("INFO: Actualizado el localStorage");
  NO_CONSOLE_LOG ? null : console.log("INFO de arrayProducto:")
  NO_CONSOLE_LOG ? null : console.log(arrayProducto);

  // Vacía el arrayCarritoCompras
  for (var i = 0; i < arrayCarritoCompras.length; i++) {
    arrayCarritoCompras.shift();
  }
  cartasCarritoCompras.innerHTML = "";  // Borra el DOM CarritoCompras

  // Se borran los precios y actualizan el DOM
  precioSubtotal = 0;
  precioIncluyeIva = 0;
  precioTotal = 0;
  lblPrecioSubtotal.innerHTML = `Subtotal: $0.000 USD`;
  lblIncluyeIva.innerHTML = `Incluye IVA 21%: $0.000 USD`;
  lblPrecioTotal.innerHTML = `Total: $0.000 USD`;  // se pone a 0 el DOM PrecioTotal
  lblPrecioTotalPesos.innerHTML = `Total: $0.00 ARS`;

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
  lblPrecioSubtotal.innerHTML = `Subtotal: $${precioSubtotal.toFixed(3)} USD`;
  lblIncluyeIva.innerHTML = `Incluye IVA 21%: $${(precioSubtotal * 0.21).toFixed(3)} USD`;
  flagIncluyeIva ? precioTotal = precioSubtotal * 1.21 : precioTotal = precioSubtotal;
  lblPrecioTotal.innerHTML = `Total: $${precioTotal.toFixed(3)} USD`;
  lblPrecioTotalPesos.innerHTML = `Total: $${(precioTotal * precioDolar).toFixed(2)} ARS`;
}

const pedirCotizacionDolar = () => {
  /* A traves de un fetch (peticiones asíncronas que trabajan con promesas) 
  obtiene la cotización del dolar a traves de una API externa.
  */

  fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((resp) => resp.json())
    .then((data) => {
      NO_CONSOLE_LOG ? null : console.log(data[0].casa.venta);
      precioDolar = parseFloat((data[0].casa.venta).replace(',', '.'));
      renderizarPrecioDolar(data[0].casa.venta.replace(',', '.'));
    })
    .catch((error) => {
      renderizarPrecioDolar(0.00);
    })
}

const renderizarPrecioDolar = (strPrecioDolar) => {
  /* Muestra por DOM en la parte superior la cotización 
  del dolar
  */

  let html;

  bdgCotizacionDolar.innerHTML = html;  // Borra el DOM
  bdgCotizacionDolar.innerHTML = "";
  bdgCotizacionDolar.innerHTML = `Cotización dolar: $${strPrecioDolar} ARS`;
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
} else {
  arrayProducto = [
    new Producto({ nombre: "Tornillo".toUpperCase(), precio: precTornillo, stock: cantTornillo, imagen: "./imagenes/tornillo.webp" }),
    new Producto({ nombre: "Tuerca".toUpperCase(), precio: precTuerca, stock: cantTuerca, imagen: "./imagenes/tuerca.jpeg" }),
    new Producto({ nombre: "Clavo".toUpperCase(), precio: precClavo, stock: cantClavo, imagen: "./imagenes/clavo.webp" }),
    new Producto({ nombre: "Arandela".toUpperCase(), precio: precArandela, stock: cantArandela, imagen: "./imagenes/arandela.jpeg" })
  ];

  // Se guarda en localStorage
  // NOTA: no importa que guarde un arreglo de objetos, no guarda los métodos de dichos objetos
  localStorage.setItem("arrayProductoLS", JSON.stringify(arrayProducto));
  NO_CONSOLE_LOG ? null : console.log("INFO: Guardado en localStorage");
}
NO_CONSOLE_LOG ? null : console.log("INFO de arrayProducto:");
NO_CONSOLE_LOG ? null : console.log(arrayProducto);

// Listeners de nodos fijos
formDatosCompra.addEventListener("submit", fncRealizarCompra);
chckbxExentoIva.addEventListener("change", fncAgregarIva);

// Carga de DOM
crearHtmlStockProductos(arrayProducto);

// Consulta fetch API dolar oficial
pedirCotizacionDolar();
///////////////////////////////////////////////////////////////////////////////////
