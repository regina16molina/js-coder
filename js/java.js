// Declaro variables
var nombreProducto;
var precio;
var cantidad;
var total;

const productos = ["taza flores rosas", "taza flores azules", "taza lovely", "taza frutilla"];

alert("Bienvenido a su carrito de compra");

let carrito = [];

let seleccion = prompt("Hola! ¿Desea comprar algún producto? (si/no)");

while (seleccion !== "si" && seleccion !== "no") {
    alert("Por favor ingresa 'si' o 'no'");
    seleccion = prompt("Hola! ¿Desea comprar algún producto? (si/no)");
}
// Pido que ingrese producto
if (seleccion === "si") {
    nombreProducto = prompt("Ingrese el nombre del producto");

    while (seleccion !== "no") {
        var producto = nombreProducto;
        var precio = 0;

        if (
            producto === "taza flores rosas" ||
            producto === "taza flores azules" ||
            producto === "porta cepillo de dientes" ||
            producto === "taza lovely" ||
            producto === "taza frutillas"
        ) {
            // Asigno a productos
            switch (producto) {
                case "taza flores rosas":
                    precio = 1050;
                    break;

                case "taza flores azules":
                    precio = 1050;
                    break;

                case "porta cepillo de dientes":
                    precio = 1000;
                    break;

                case "taza lovely":
                    precio = 1200;
                    break;

                case "taza frutillas":
                    precio = 1300;
                    break;
            }

            // Agrego productos al carrito
            let unidades = parseInt(prompt("¿Cuántas unidades desea agregar?"));
            carrito.push({ producto: producto, precio: precio, unidades: unidades });
        }

        seleccion = prompt("¿Desea agregar otro producto? (si/no)");
        while (seleccion !== "si" && seleccion !== "no") {
            alert("Por favor ingresa 'si' o 'no'");
            seleccion = prompt("¿Desea agregar otro producto? (si/no)");
        }
        if (seleccion === "si") {
            nombreProducto = prompt("Ingrese el nombre del producto");
        }
    }
}

// Calculo total de compra

if (carrito.length > 0) {
    let totalCompra = 0;

    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        let total = item.precio * item.unidades;
        totalCompra += total;
    }

    // Muestro total de compra
    alert("Resumen de la compra:\n");

    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        let total = item.precio * item.unidades;
        alert(
            "Producto: " +
            item.producto +
            "\nPrecio unitario: $" +
            item.precio +
            "\nUnidades: " +
            item.unidades +
            "\nTotal: $" +
            total
        );
    }

    alert("Total de la compra: $" + totalCompra);
} else {
    alert("No se han agregado productos al carrito.");
}

alert("¡Gracias por su compra!");