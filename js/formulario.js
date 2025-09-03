const formulario_producto_nuevo = document.querySelector("#formulario_producto");

class Producto{
    constructor(id, nombre, descripcion, precio){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    Obtenerdatos(){
        console.log(this.id);
        console.log(this.nombre);
        console.log(this.descripcion)
        console.log(this.precio)
    }
}

function AgregarProducto(event){
    let lectorformulario = new FormData(formulario_producto_nuevo);
    const datos = Object.fromEntries(lectorformulario.entries());
    const json = JSON.stringify(datos);
    console.log(json);
}