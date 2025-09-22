const formulario_producto_nuevo = document.querySelector("#formulario_producto");
let Productos = [];
let src_imagen_producto = "./resources/img/1077596-200.png";
let formularioOculto = true;

const elementos2 = document.querySelector("#elementos2");

class Producto {
    constructor(id, imagen, nombre, descripcion, precio) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    Obtenerdatos() {
        console.log(this.id);
        console.log(this.imagen);
        console.log(this.nombre);
        console.log(this.descripcion)
        console.log(this.precio)
    }
    MostrarProductos() {
        const tarjetacontenedor = document.createElement("div");
        tarjetacontenedor.classList.add("tarjetacontenedor");
        elementos2.prepend(tarjetacontenedor);

        const imagen = document.createElement("img");
        tarjetacontenedor.appendChild(imagen);
        imagen.classList.add("imagen-nueva");
        imagen.src = this.imagen;

        const texto = document.createElement("h2");
        tarjetacontenedor.appendChild(texto);
        texto.textContent = this.nombre;

        const parrafo = document.createElement("p");
        tarjetacontenedor.appendChild(parrafo);
        parrafo.textContent = this.descripcion;

        const boton = document.createElement("button");
        tarjetacontenedor.appendChild(boton);
        boton.textContent = this.precio + "$";
    }
}

function AgregarProducto(event) {
    let lectorformulario = new FormData(formulario_producto_nuevo);
    const datos = Object.fromEntries(lectorformulario.entries());
    
    if (datos.nombre != "" && datos.descripcion != "" && datos.precio != null) {
        const nuevoProducto = new Producto(
            Productos.length + 1,
            src_imagen_producto,
            datos.nombre,
            datos.descripcion,
            datos.precio
        );
        Productos.push(nuevoProducto);
        nuevoProducto.MostrarProductos();

        const tarjetasViejas = document.querySelectorAll(".tarjetacontenedor:not(:first-child)");
        
        tarjetasViejas.forEach(tarjeta => {
            tarjeta.classList.remove("tarjeta-nueva");
            tarjeta.classList.remove("animacion-tarjeta");
            setTimeout(() => {
                tarjeta.classList.add("animacion-tarjeta");
            }, 10);
        });
        const nuevaTarjeta = elementos2.querySelector('.tarjetacontenedor');
        nuevaTarjeta.classList.add("tarjeta-nueva");
    }
}
function ObtenerImagen(event) {
    const file = event.target.files[0];
    if (file.file === " image/jpeg" || file.type === "image/png") {
        const lector = new FileReader();
        lector.onload = (event) => {
            src_imagen_producto = event.target.result
            document.querySelector("#imagen-file").src = src_imagen_producto;
        }
        lector.readAsDataURL(file);
    }
}
function ocultarformulario(event) {
    const formulario_producto = document.querySelector(".contenedor_formulario_nuevo")
    const buttonagg = document.querySelector("#buttonagg")
    if (!formularioOculto) {
        formulario_producto.style.display = "none";
        formularioOculto = true;
        buttonagg.innerHTML = "Mostrar formulario";
    }
    else {
        formulario_producto.style.display = "block";
        formularioOculto = false;
        buttonagg.innerHTML = "Ocultar formulario";
    }
}