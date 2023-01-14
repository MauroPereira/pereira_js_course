// Contenedor dentro del HTML
let contenedor = document.querySelector(".contenedor");
function crearHtml(array){
	let html;
	array.forEach((el) => {
		const{nombre, precio, im}=el;
		html = `<div class="card">
				<img src=".img/${img}" alt="">
				<hr>
				<h3>${nombre}<h3>
				<p>$${precio}</p>
				</div>`;
		contenedor.innerHTML += html;
	});
}

crearHtml(productos);

// Ver 1:55:12
