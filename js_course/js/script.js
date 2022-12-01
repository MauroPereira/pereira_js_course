// Variables

// Funciones

// Declaraciones de funciones
function saludarConNombreApellido(nombre = "desconocido", apellido = "desconocido") {
  console.log("Buen dia " + nombre + ", de apellido " + apellido);
}

let nombre = prompt("Ingrese un nombre"); // si no se ingresa nada toma un valor ""
let apellido = prompt("Ingrese un nombre");

// Invocaciones
saludarConNombreApellido();
saludarConNombreApellido(nombre, apellido);
