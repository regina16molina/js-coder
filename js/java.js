// // Declaro variables
// var nombreProducto;
// var precio;
// var cantidad;
// var total;

// const productos = ["taza flores rosas", "taza flores azules", "taza lovely", "taza frutilla"];

// alert("Bienvenido a su carrito de compra");

// let carrito = [];

// let seleccion = prompt("Hola! ¿Desea comprar algún producto? (si/no)");

// while (seleccion !== "si" && seleccion !== "no") {
//     alert("Por favor ingresa 'si' o 'no'");
//     seleccion = prompt("Hola! ¿Desea comprar algún producto? (si/no)");
// }
// // Pido que ingrese producto
// if (seleccion === "si") {
//     nombreProducto = prompt("Ingrese el nombre del producto");

//     while (seleccion !== "no") {
//         var producto = nombreProducto;
//         var precio = 0;

//         if (
//             producto === "taza flores rosas" ||
//             producto === "taza flores azules" ||
//             producto === "porta cepillo de dientes" ||
//             producto === "taza lovely" ||
//             producto === "taza frutillas" ||
//             producto === "jabonera" ||
//             producto === "paleta 4 colores" ||
//             producto === "paleta 10 colores" ||
//             producto === "porta pañuelos" ||
//             producto === "juego de tazas y tetera" ||
//             producto === "taza good day" ||
//             producto === "taza naranja" ||
//             producto === "taza oso" ||
//             producto === "cenicero corazon" ||
//             producto === "taza espejada" ||
//             producto === "cenicero patitos"
//         ) {
//             // Asigno a productos
//             switch (producto) {
//                 case "taza flores rosas":
//                     precio = 1050;
//                     break;

//                 case "taza flores azules":
//                     precio = 1050;
//                     break;

//                 case "porta cepillo de dientes":
//                     precio = 1000;
//                     break;

//                 case "taza lovely":
//                     precio = 1200;
//                     break;

//                 case "taza frutillas":
//                     precio = 1300;
//                     break;

//                 case "jabonera":
//                     precio = 1800;
//                     break;

//                 case "paleta 4 colores":
//                     precio = 1300;
//                     break;

//                 case "paleta 10 colores":
//                     precio = 2000;
//                     break;

//                 case "porta pañuelos":
//                     precio = 2200;
//                     break;

//                 case "juego de tazas y tetera":
//                     precio = 3800;
//                     break;

//                 case "taza good day":
//                     precio = 2100;
//                     break;

//                 case "taza naranja":
//                     precio = 1300;
//                     break;

//                 case "taza oso":
//                     precio = 1900;
//                     break;

//                 case "cenicero corazon":
//                     precio = 2300;
//                     break;

//                 case "taza espejada":
//                     precio = 2600;
//                     break;

//                 case "cenicero patitos":
//                     precio = 2900;
//             }

//             // Agrego productos al carrito
//             let unidades = parseInt(prompt("¿Cuántas unidades desea agregar?"));
//             carrito.push({ producto: producto, precio: precio, unidades: unidades });
//         }

//         seleccion = prompt("¿Desea agregar otro producto? (si/no)");
//         while (seleccion !== "si" && seleccion !== "no") {
//             alert("Por favor ingresa 'si' o 'no'");
//             seleccion = prompt("¿Desea agregar otro producto? (si/no)");
//         }
//         if (seleccion === "si") {
//             nombreProducto = prompt("Ingrese el nombre del producto");
//         }
//     }
// }

// // Calculo total de compra

// if (carrito.length > 0) {
//     let totalCompra = 0;

//     for (let i = 0; i < carrito.length; i++) {
//         let item = carrito[i];
//         let total = item.precio * item.unidades;
//         totalCompra += total;
//     }

//     // Muestro total de compra
//     alert("Resumen de la compra:\n");

//     for (let i = 0; i < carrito.length; i++) {
//         let item = carrito[i];
//         let total = item.precio * item.unidades;
//         alert(
//             "Producto: " +
//             item.producto +
//             "\nPrecio unitario: $" +
//             item.precio +
//             "\nUnidades: " +
//             item.unidades +
//             "\nTotal: $" +
//             total
//         );
//     }

//     alert("Total de la compra: $" + totalCompra);
// } else {
//     alert("No se han agregado productos al carrito.");
// }

// alert("¡Gracias por su compra!");

// variable para almacenar productos
var itemsCarrito = [];

function añadirItem(nombreItem, precioItem) {
    // funcion para añadir producto a carrito
    itemsCarrito.push({ name: nombreItem, price: precioItem });
    agregarAModal();
}

function agregarAModal() {
    // Funcion para agregarlo a modal
    var cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";

    var total = 0; //Variable para almacenar total

    itemsCarrito.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.textContent = item.name + " - $" + item.price; //Muestra nombre y precio del producto
        cartItemsElement.appendChild(listItem);

        total += item.price; //Suma precio del producto
    });

    // Añado precio total al modal
    var totalElement = document.createElement("li");
    totalElement.textContent = "Total: $" + total;
    cartItemsElement.appendChild(totalElement);
}

document.getElementById("cart-icon").addEventListener("click", function () {
    var modal = document.getElementById("cart-modal");
    modal.style.display = "block"; //muestra modal
});

document.getElementsByClassName("close")[0].addEventListener("click", function () {
    // Evento click en cualquier parte de la pantalla
    var modal = document.getElementById("cart-modal");
    modal.style.display = "none"; //Si se realiza el evento, oculta el modal
});

window.addEventListener("click", function (event) {
    var modal = document.getElementById("cart-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

var addToCartButtons = document.getElementsByClassName("add-to-cart");
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function (event) {
        var productName = event.target.getAttribute("data-product");
        var productPrice = parseInt(event.target.getAttribute("data-price"));
        añadirItem(productName, productPrice);
    });
}