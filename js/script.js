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
    const imagen = new Image();
    const texto = document.createElement("h2");
    imagen.src = "../resources/img/greninja.png";
    texto.textContent = imagen.src.substring(imagen.src.lastIndexOf("/")+1);
    imagen.classList.add("imagen-nueva");
    elementos.appendChild(imagen);
    elementos.appendChild(texto);
    }
}