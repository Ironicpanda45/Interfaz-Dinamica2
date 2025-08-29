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
    imagen.src = "../resources/img/greninja.png";
    imagen.classList.add("imagen-nueva");
    elementos.appendChild(imagen);
    }
}