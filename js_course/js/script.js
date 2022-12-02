// Variables

// Funciones

// Declaraciones de funciones
function saludarConNombreApellido(nombre = "desconocido", apellido = "desconocido") {
  console.log("Buen dia " + nombre + ", de apellido " + apellido);
}

function sumar(num1, num2) {
  console.log(num1 + num2)
}

//let nombre = prompt("Ingrese un nombre"); // si no se ingresa nada toma un valor ""
//let apellido = prompt("Ingrese un nombre");

let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));


// Invocaciones
//saludarConNombreApellido();
//saludarConNombreApellido(nombre, apellido);
sumar(numero1, numero2);




