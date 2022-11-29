let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

if (nombre == ("" || null) || apellido == ("" || null)) {
  console.log("Algún campo o todos están incompleto")
}
else {
  console.log("Bienvenido/a " + nombre + " " + apellido)

}
console.log(12 == (3 * 4))