var nombre;
var cantidad;
var descuento;

alert("Bienvenido a la calculadora de descuentos");
nombre = prompt("Ingrese su nombre:");

// Solicitar cantidad
do {
    cantidad = parseInt(prompt("Ingrese la cantidad:"));
} while (cantidad <= 0) {
    cantidad = parseInt(prompt("Cantidad inválida. Ingrese otro número"));
}

// Solicitar descuento
do {
    descuento = parseInt(prompt("Ingrese el descuento (%):"));
} while (descuento <= 0 || descuento > cantidad) {
    descuento = parseInt(prompt("Descuento invalido. Ingrese otro número"));
}

// Calcular el descuento
var precioTotal = cantidad;
var descuentoAplicado = (precioTotal * descuento) / 100;
var precioConDescuento = precioTotal - descuentoAplicado;

// Mostrar el resultado
alert("Nombre: " + nombre + "\n" + "Cantidad: " + cantidad + "\n" + "Descuento: " + descuento + "%" + "\n" + "Precio con descuento: " + precioConDescuento);
