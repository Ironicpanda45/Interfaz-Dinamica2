const formulario_producto_nuevo = document.querySelector("#formulario_producto");
let Productos = [];
let src_imagen_producto = "./resources/img/1077596-200.png";

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
}

function AgregarProducto(event){
    let lectorformulario = new FormData(formulario_producto_nuevo);
    const datos = Object.fromEntries(lectorformulario.entries());
    if(datos.nombre !="" && datos.descripcion !="" && datos.precio!=null){
    Productos.push(new Producto(Productos.length+1, src_imagen_producto,datos.nombre, datos.descripcion, datos.precio));
    Productos.forEach(producto => {
        producto.Obtenerdatos();
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