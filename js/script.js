const elementos = document.querySelector("#elementos");
const cantidad = document.querySelector("#cantidad");

function crearimagen(event) {
    /*
    const imagen = '<img class="imagen-nueva" src="resources/img/greninja.png">'
    elementos.innerHTML = imagen;
    */
    elementos.innerHTML = "";
   for(i = 0; i < cantidad.value; i++){
    /*const imagen = document.createElement("img");
    imagen.src = "../resources/img/greninja.png";
    imagen.classList.add("imagen-nueva");
    elementos.appendChild(imagen);
    */
    const tarjetacontenedor = document.createElement("div");
    tarjetacontenedor.classList.add("tarjetacontenedor");
    elementos.appendChild(tarjetacontenedor);

    const imagen = document.createElement("img");
    tarjetacontenedor.appendChild(imagen);
    imagen.classList.add("imagen-nueva");
    imagen.src = "../resources/img/greninja.png";

    const texto = document.createElement("h2");
    tarjetacontenedor.appendChild(texto);
    texto.textContent = imagen.src.substring(imagen.src.lastIndexOf("/")+1);

    const parrafo = document.createElement("p");
    tarjetacontenedor.appendChild(parrafo);
    parrafo.textContent = "Esto es un texto de ejemplo"

    const boton = document.createElement("button");
    tarjetacontenedor.appendChild(boton);
    boton.textContent = " Mostrar mas..."
    }
}