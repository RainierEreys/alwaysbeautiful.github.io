

const bdd = [
    {
        id: 1,
        nombre: 'Labial',
        precio: 5,
        imagen: 'product1.png'
    },
    {
        id: 2,
        nombre: 'Pintura de uñas',
        precio: 3,
        imagen: 'product2.png'
    },
    {
        id: 3,
        nombre: 'Brillo',
        precio: 2,
        imagen: 'product3.png'
    },
    {
        id: 4,
        nombre: 'Base',
        precio: 7,
        imagen: 'product4.png'
    },
    {
        id: 5,
        nombre: 'Lima de uñas',
        precio: 8,
        imagen: 'product5.png'
    }

];

let carrito = [];
const divisa = 'Bs.';
const productos = document.querySelector('#items');
const cajacarrito = document.querySelector('#carrito');
const total = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    bdd.forEach((info) => {
        // Estructura
        const Carta = document.createElement('div');
        Carta.classList.add('card', 'col-sm-5', 'm-2');
        // Body
        const CartaBody = document.createElement('div');
        CartaBody.classList.add('card-body');
        // Titulo
        const CartaTitle = document.createElement('h5');
        CartaTitle.classList.add('card-title');
        CartaTitle.textContent = info.nombre;
        // Imagen
        const CartaImagen = document.createElement('img');
        CartaImagen.classList.add('img-fluid');
        CartaImagen.setAttribute('src', info.imagen);
        // Precio
        const CartaPrecio = document.createElement('p');
        CartaPrecio.classList.add('card-text');
        CartaPrecio.textContent = `${info.precio}${divisa}`;
        // Boton 
        const CartaBoton = document.createElement('button');
        CartaBoton.classList.add('btn', 'btn-primary');
        CartaBoton.textContent = '+';
        CartaBoton.setAttribute('marcador', info.id);
        CartaBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        CartaBody.appendChild(CartaImagen);
        CartaBody.appendChild(CartaTitle);
        CartaBody.appendChild(CartaPrecio);
        CartaBody.appendChild(CartaBoton);
        Carta.appendChild(CartaBody);
        productos.appendChild(Carta);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    cajacarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = bdd.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const Carta = document.createElement('li');
        Carta.classList.add('list-group-item', 'text-right', 'mx-2');
        Carta.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        Carta.appendChild(miBoton);
        cajacarrito.appendChild(Carta);
    });
    // Renderizamos el precio total en el HTML
    total.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = bdd.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(0);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();



function commentBox() {
    var name = document.getElementById('name').value;
    //var apellido = document.getElementById('apellido').value;
    var comment = document.getElementById('comment').value;
    

    if (name == "" || comment == "") {
        alert("Porfavor introduce la informacion requerida!");
    } else {
        var parent = document.createElement('div1');
        var parent2 = document.createElement('div2');
        var el_name = document.createElement('h5');
        //var el_apellido = document.createElement('h5');
        var el_message = document.createElement('p');
        var el_line = document.createElement('hr');
        var txt_name = document.createTextNode(name);
        //var txt_apellido = document.createTextNode(apellido);
        var txt_message = document.createTextNode(comment);
        el_name.appendChild(txt_name);
        //el_apellido.appendChild(txt_apellido);
        el_message.appendChild(txt_message);
        el_line.style.border = '1px solid #000';
        parent.appendChild(el_name);
        //parent.appendChild(el_apellido);
        parent2.appendChild(el_line);
        parent2.appendChild(el_message);
        parent.setAttribute('class', 'pane');
        parent.classList.add('d-flex');
        document.getElementById('result').appendChild(parent);
        document.getElementById('result').appendChild(parent2);
        document.getElementById('name').value = "";
        //document.getElementById('apellido').value = "";
        document.getElementById('comment').value = "";
    }

}