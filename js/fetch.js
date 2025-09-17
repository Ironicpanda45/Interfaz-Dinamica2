const url_api = "https://fakestoreapi.com/products";

const elementos2 = document.querySelector("#elementos2");

fetch(url_api)
  .then(respuesta => respuesta.json()).then(datos => {
    console.log(datos)
  });


function peticionAJAX(url) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let datos = JSON.parse(xhr.responseText);
      console.log(datos);
      for (i = 0; i < datos.length; i++) {
        console.log("Titulo: " + datos[i].title + "             Precio: " + datos[i].price);
        
        const tarjetacontenedor = document.createElement("div");
        tarjetacontenedor.classList.add("tarjetacontenedor");
        tarjetacontenedor.style.animationDelay = 0 + "s";
        elementos2.prepend(tarjetacontenedor);

        const imagen = document.createElement("img");
        tarjetacontenedor.appendChild(imagen);
        imagen.classList.add("imagen-nueva");
        imagen.src = datos[i].image;

        const texto = document.createElement("h2");
        tarjetacontenedor.appendChild(texto);
        texto.textContent = datos[i].title;

        const parrafo = document.createElement("p");
        tarjetacontenedor.appendChild(parrafo);
        parrafo.textContent = datos[i].description;

        const boton = document.createElement("button");
        tarjetacontenedor.appendChild(boton);
        boton.textContent = datos[i].price + "$";
      }
    } else {
      console.log("El error es: " + xhr.status);
    }
  }
  xhr.send();
}
peticionAJAX(url_api);