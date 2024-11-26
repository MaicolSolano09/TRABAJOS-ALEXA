class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }

    mostrarProducto() {
        console.log(`Producto: ${this.nombre}, Precio: ${this.precio}, Cantidad en stock: ${this.cantidadEnStock}`);
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock); 
        this.marca = marca;
    }

    mostrarProducto() {
        console.log(`Electrodoméstico: ${this.nombre}, Marca: ${this.marca}, Precio: ${this.precio}, Cantidad en stock: ${this.cantidadEnStock}`);
    }
}

let productos = [
    new Producto("Espejo", 100, 12),
    new Electrodomestico("Nevera", 10000, 8, "Centrales"),
    new Producto("Colchon", 300, 5),
    new Electrodomestico("Microondas", 150, 7, "Samsung"),
    
];

function listarProductosConBajoStock(productos) {
    console.log("Productos con stock menor a 10:");
    productos.forEach(producto => {
        if (producto.cantidadEnStock < 10) {
            producto.mostrarProducto(); 
        }
    });
}

listarProductosConBajoStock(productos);
