// Entrega final

// Carrito
let iconoCarrito = document.querySelector('#iconoCarrito');
let carrito = document.querySelector('.carrito');
let cerrarCarrito = document.querySelector('#cerrarCarrito');

// Abrir carrito
iconoCarrito.onclick = () => {
    carrito.classList.add("activo");
}

// Cerrar carrito
cerrarCarrito.onclick = () => {
    carrito.classList.remove("activo");
}



// Funcionamiento carrito
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// Creando funcion
function ready() {
    // Eliminar producto de carrito
    var botonEliminar = document.getElementsByClassName('eliminarCarrito');
    console.log(botonEliminar);
    for (var i = 0; i < botonEliminar.length; i++) {
        var boton = botonEliminar[i];
        boton.addEventListener('click', eliminarItem);
    }

    // Cambio cantidad
    var cantidadInput = document.getElementsByClassName('cantidadCarrito');
    for (var i = 0; i < cantidadInput.length; i++) {
        var input = cantidadInput[i];
        input.addEventListener('change', cambioCantidad);
    }
    // Aañadir item a carrito
    var agregarCarrito = document.getElementsByClassName('btn');
    for (var i = 0; i < agregarCarrito.length; i++) {
        var btn = agregarCarrito[i];
        btn.addEventListener('click', agregarCarritoBtn);
    }
}

// Eliminar producto de carrito
function eliminarItem(event) {
    var botonClick = event.target;
    botonClick.parentElement.remove();

    // Verificar si el carrito está vacío después de eliminar un producto
    var contentCarrito = document.getElementsByClassName('contenidoCarrito')[0];
    var cartBoxes = contentCarrito.getElementsByClassName('boxCarrito');
    if (cartBoxes.length === 0) {
        document.getElementsByClassName('precioTotal')[0].innerText = '$0';
    } else {
        ActualizarTotal();
    }
}


// Cambio cantidades
function cambioCantidad(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    ActualizarTotal();
}

// Al añadir producto al carrito
function agregarCarritoBtn(event) {
    var btn = event.target;
    var comprarProducto = btn.parentElement;
    var tituloItem = comprarProducto.querySelector('.card-title').innerText;
    var precio = comprarProducto.querySelector('.card-price').innerText;
    var imgProducto = btn.getAttribute('data-img'); // Obtener la URL de la imagen del atributo data-img

    // Verificar si el producto ya está en el carrito
    if (productoEstaEnCarrito(tituloItem)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Este producto ya fue añadido a su carrito!',
        });
    } else {
        añadirProductoCarrito(tituloItem, precio, imgProducto);
        Swal.fire({
            icon: 'success',
            title: '¡Producto añadido!',
            text: 'El producto ha sido añadido a su carrito.',
        });
    }

    // Actualizar la cantidad en el icono del carrito
    actualizarCantidadCarrito();
}


// Función para verificar si el producto ya está en el carrito
function productoEstaEnCarrito(tituloItem) {
    var contentCarrito = document.getElementsByClassName('contenidoCarrito')[0];
    var cartBoxes = contentCarrito.getElementsByClassName('boxCarrito');
    for (var i = 0; i < cartBoxes.length; i++) {
        var cajaCarrito = cartBoxes[i];
        var tituloElemento = cajaCarrito.querySelector('.tituloProducto').innerText;
        if (tituloElemento === tituloItem) {
            return true;
        }
    }
    return false;
}
// Función para actualizar la cantidad en el icono del carrito
function actualizarCantidadCarrito() {
    var contentCarrito = document.getElementsByClassName('contenidoCarrito')[0];
    var cartBoxes = contentCarrito.getElementsByClassName('boxCarrito');
    var cantidadTotal = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cajaCarrito = cartBoxes[i];
        var cantidadElemento = cajaCarrito.getElementsByClassName('cantidadCarrito')[0];
        var cantidad = parseInt(cantidadElemento.value);
        cantidadTotal += cantidad;
    }

    // Actualizar la cantidad en el icono del carrito
    var cartCount = document.getElementById('cart-count');
    cartCount.innerText = cantidadTotal.toString();
}


function añadirProductoCarrito(tituloItem, precio, imgProducto) {
    var shopCarrito = document.createElement('div');
    shopCarrito.classList.add('boxCarrito');

    // Creo elementos para el nuevo producto
    var img = document.createElement('img');
    img.src = imgProducto;
    img.alt = '';

    // Agrega una clase específica a la imagen
    img.classList.add('carritoImagen');

    var detallesCarrito = document.createElement('div');
    detallesCarrito.classList.add('detallesCarrito');

    var tituloProducto = document.createElement('div');
    tituloProducto.classList.add('tituloProducto');
    tituloProducto.innerText = tituloItem;

    var precioCarrito = document.createElement('div');
    precioCarrito.classList.add('precioCarrito');
    precioCarrito.innerText = precio;

    var cantidadCarrito = document.createElement('input');
    cantidadCarrito.type = 'number';
    cantidadCarrito.value = '1';
    cantidadCarrito.classList.add('cantidadCarrito');

    var eliminarCarrito = document.createElement('i');
    eliminarCarrito.classList.add('bi', 'bi-trash3', 'eliminarCarrito');

    // Uso append 
    detallesCarrito.appendChild(tituloProducto);
    detallesCarrito.appendChild(precioCarrito);
    detallesCarrito.appendChild(cantidadCarrito);

    shopCarrito.appendChild(img);
    shopCarrito.appendChild(detallesCarrito);
    shopCarrito.appendChild(eliminarCarrito);

    // Append para agregar el nuevo producto al carrito
    var cartItem = document.getElementsByClassName('contenidoCarrito')[0];
    cartItem.appendChild(shopCarrito);

    // agrego event listeners para el elemento del nuevo producto
    eliminarCarrito.addEventListener('click', eliminarItem);
    cantidadCarrito.addEventListener('change', cambioCantidad);

    ActualizarTotal();
}

var cartBoxContent = `
<img src="img/cenicero-corazon.jpg" alt="" class="imgCarrito">

        <div class="detallesCarrito">
          <div class="tituloProducto">Cenicero corazon</div>
          <div class="precioCarrito">$3000</div>
          <input type="number" value="1" class="cantidadCarrito">
        </div>

        <!-- Eliminar carrito -->
        <i class="bi bi-trash3 eliminarCarrito"></i>`;




// Añadir listener a los botones "Agregar al carrito"
var agregarCarrito = document.getElementsByClassName('agregarCarrito');
for (var i = 0; i < agregarCarrito.length; i++) {
    var btn = agregarCarrito[i];
    btn.addEventListener('click', agregarCarritoBtn);
}
// Actualizar total
function ActualizarTotal() {
    var contentCarrito = document.getElementsByClassName('contenidoCarrito')[0];
    var cartBoxes = contentCarrito.getElementsByClassName('boxCarrito');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cajaCarrito = cartBoxes[i];
        var precioElemento = cajaCarrito.getElementsByClassName('precioCarrito')[0];
        var cantidadElemento = cajaCarrito.getElementsByClassName('cantidadCarrito')[0];
        var precioProducto = parseFloat(precioElemento.innerText.replace("$", ""));
        var cantidad = cantidadElemento.value;
        total = total + (precioProducto * cantidad);

        document.getElementsByClassName('precioTotal')[0].innerText = '$' + total;
    }
}


// Array productos
const productos = [
    {
        id: "tazaFloresRosas",
        titulo: "taza flores rosas",
        imagen: "./img/ceramica-1.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 1050
    },

    {
        id: "tazaFloresAzules",
        titulo: "taza flores azules",
        imagen: "./img/ceramica-2.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 1050
    },

    {
        id: "portaCepillo",
        titulo: "porta cepillo de dientes",
        imagen: "./img/ceramica-3.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 1000
    },

    {
        id: "tazaLovely",
        titulo: "taza Lovely",
        imagen: "./img/ceramica-4.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 1200
    },

    {
        id: "tazaFrutillas",
        titulo: "taza frutillas",
        imagen: "./img/ceramica-5.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 1300
    },

    {
        id: "jabonera",
        titulo: "jabonera",
        imagen: "./img/jabonera.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 1800
    },

    {
        id: "paletaCuatro",
        titulo: "paleta 4 colores",
        imagen: "./img/pintura-2.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 1300
    },

    {
        id: "paletaDiez",
        titulo: "platea 10 colores",
        imagen: "./img/pintura.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 2000
    },

    {
        id: "portaPañuelos",
        titulo: "porta pañuelos",
        imagen: "./img/porta-pañuelos.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 2200
    },

    {
        id: "juegoTazas",
        titulo: "juego de tazas y tetera",
        imagen: "./img/taza-frtuillas.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 3800
    },

    {
        id: "tazaGoodDay",
        titulo: "taza good day",
        imagen: "./img/taza-good-day.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 2100
    },

    {
        id: "tazaNaranja",
        titulo: "taza naranja",
        imagen: "./img/taza-naranja.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 1300
    },

    {
        id: "tazaOso",
        titulo: "taza oso",
        imagen: "./img/taza-oso.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 1900
    },

    {
        id: "ceniceroCorazon",
        titulo: "cenicero corazon",
        imagen: "./img/cenicero-corazon.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 2300
    },

    {
        id: "tazaEspejada",
        titulo: "taza espejada",
        imagen: "./img/taza-espejada.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 2600
    },

    {
        id: "ceniceroPatos",
        titulo: "cenicero patitos",
        imagen: "./img/cenicero-patos.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 2900
    },
];


// DOM
const contenedorProductos = document.querySelector("#contenedorProducto");

function cargarProductos() {

    productos.forEach(producto => {

        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-price">$${producto.precio}</p>
          <button class="btn btn-primary add-to-cart" data-product="${producto.id}" data-price="${producto.precio}" data-img="${producto.imagen}">Añadir al carrito</button>
        </div>
        `;

        // Agrego clase "card" al div
        div.classList.add("card");

        contenedorProductos.append(div);
    })
}

cargarProductos();

// Agrego shadows a las cards
// Obtengo todos los elementos con la clase "card"
const cards = document.querySelectorAll('.card');

// Agrego la clase "card-shadow" a cada elemento
cards.forEach((card) => {
    card.classList.add('card-shadow');
});

// Correciones
