// Contenedor dentro del HTML
let contenedor = document.querySelector(".contenedor");
function crearHtml(array){
	let html;
	array.forEach((el) => {
		html = `<div class="card">
				<img src=".img/${el.img}" alt="">
				<hr>
				<h3>${el.nombre}<h3>
				<p>$${el.precio}</p>
				</div>`;
		contenedor.innerHTML += html;
	});
}

crearHtml(productos);
