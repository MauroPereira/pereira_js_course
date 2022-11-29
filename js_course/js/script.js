let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

if (nombre == "" || apellido == "") {
  console.log("Algún campo está incompleto")
}
else {
  console.log("Bienvenido/a " + nombre + " " + apellido)

}
