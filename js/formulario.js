const formulario_producto_nuevo = document.querySelector("#formulario_producto");
let Productos = [];
let src_imagen_producto = "./resources/img/1077596-200.png";

const elementos2 = document.querySelector("#elementos2");

class Producto{
    constructor(id, imagen, nombre, descripcion, precio){
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    Obtenerdatos(){
        console.log(this.id);
        console.log(this.imagen);
        console.log(this.nombre);
        console.log(this.descripcion)
        console.log(this.precio)
    }
    MostrarProductos(){
    const tarjetacontenedor = document.createElement("div");
    tarjetacontenedor.classList.add("tarjetacontenedor");
    elementos2.appendChild(tarjetacontenedor);

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

function AgregarProducto(event){
    let lectorformulario = new FormData(formulario_producto_nuevo);
    const datos = Object.fromEntries(lectorformulario.entries());
    if(datos.nombre !="" && datos.descripcion !="" && datos.precio!=null){
    Productos.push(new Producto(Productos.length+1, src_imagen_producto,datos.nombre, datos.descripcion, datos.precio));
    elementos2.innerHTML = "";
    Productos.forEach(producto => {
        producto.Obtenerdatos();
        producto.MostrarProductos();
    });
        }
    //const json = JSON.stringify(datos);
    //console.log(json);
}
function ObtenerImagen(event){
    const file = event.target.files[0];
    if (file.file === " image/jpeg" || file.type === "image/png"){
        const lector = new FileReader();
        lector.onload = (event) => {
            src_imagen_producto = event.target.result
            document.querySelector("#imagen-file").src = src_imagen_producto;
        }
        lector.readAsDataURL(file);
    }
}