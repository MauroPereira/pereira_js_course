# Pereira JS Course

## Datos del alumno
* Nombre: Pereira, Mauro Alejandro
* Comisión: 34130
* Curso: Javascript
* E-mail: mauro.a.pereira@gmail.com

## Sobre el proyecto
Algoritmo que se encarga a través de un menú interactivo de realizar una o más compras de determinados productos de ferreteria, con una serie de datos adicionales más que influyen en el precio del pedido final.

## Preentrega 01 Pereira
### Versiones
* v1.0 E-shop con cuatro items, el cual al hacer un pedido descuenta del stock existente. Todos los mensajes por alert y prompt. TODO: poder volver al estado anterior con el botón 'Cancelar'.

## Preentrega 02 Pereira
### Se debe entregar
* Estructura HTML del proyecto.
* Variables de JS necesarias.
* Funciones esenciales del proceso a simular.
* Objetos de JS.
* Arrays.
* Métodos de búsqueda y filtrado sobre el Array.

### Para tener en cuenta
* La estructura hace referencia a el html y css, correspondientes al armado de la página general, pero que el JS que se evalúa, aún no está interactuando con ella.
### Versiones
* v2.0 Con el botón 'Cancelar' se puede volver hacia atrás en varios alert y prompt, excepto cuando se carga los datos del comprador. Se crean cuatro objetos Producto en un array. Si el comprador quiere un Producto se agrega a un array arrayCanasta previamente vacío. Se utiliza find() y forEach(). Si se desea agregar a la canasta un Producto que ya existe, la canasta se actualiza. El stock sólo decrementa cuando el usuario (el comprador) acepta la compra. 
  * TODO: 
    * crear un usuario admin que permita agregar más Productos al array o modificar su stock inicial.

## Preenetrega 03 Pereira
### Se debe entregar
* Implementación con uso de JSON y Storage.
* Modificación del DOM y detección de eventos de usuario.
### Objetivos generales
* Codificar funciones de procesos esenciales y notificación de resultados por HTML, añadiendo interacción al simulador.
* Ampliar y refinar el flujo de trabajo del script en términos de captura de eventos, procesamiento del simulador y notificación de resultados en forma de salidas por HTML, modificando el DOM.
### Objetivos específicos
* Definir eventos a manejar y su función de respuesta.
* Modificar el DOM, ya sea para definir elementos al cargar la página o para realizar salidas de un procesamiento.
* Almacenar datos (clave-valor) en el Storage y recuperarlos
### Versiones
* v3.0 Se sigue con la idea de un e-shop de ferreteria. A través del boton "Agregar al carrito" se agregan de a uno Productos. Dichos Productos si se repiten se actualiza la cantidad pedida. Luego se pueden ingresar los datos de la compra y al final de la pagina muestra un mensaje de que se realizó el pedido exitosamente. La primera vez que se abre la página crea  4 productos y los guarda en LocalStorage, las siguientes veces lee del LocalStorage.
  * TODO:
    * Actualizar la página para que descuente del Stock (lo hace internamente, no se ve en el HTML). 
    * boton Eliminar Producto o Vaciar todo el Carrito. 
    * boton Login tanto para Clientes como para Admin a fin de agregar más Productos o modificar cantidad de Stock.

* v3.1 Se cambiaron los carteles de 'Error de cantidad pedida no disponible' y de 'Gracias por su compra' por Sweet Alert 2. Se mejoró el flujo de trabajo.
* v3.2 Mejoras:
    * Agregada NO_CONSOLE_LOG para deshabilitar todos los console.log().
    * Validación del formulario.
    * No carga el carrito si la unidades disponibles son 0.
    * Agregada la opción de incluir iva.
    * Incluye html y js de logueo de admin (usuario: admin, contraseña: admin).
    * Incluye html y js de Agregar Producto.
    * Agregado mensaje de Producto agregado exitosamente.
    * Tanto objetos Personas como Productos son cargados una sola vez en el LocalStorage y luego son leídos de este.
