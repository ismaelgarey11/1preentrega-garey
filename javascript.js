// Carrito de compras
const carrito = [];
        
// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

// Función para actualizar el contenido del carrito y calcular el total
function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const totalElement = document.getElementById('total');
    let total = 0;

    carritoLista.innerHTML = '';

    carrito.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nombre} - $${item.precio}`;
        carritoLista.appendChild(listItem);
        total += item.precio;
    });

    totalElement.textContent = total;
}

// Función para aplicar un descuento al total
function aplicarDescuento(descuentoPorcentaje) {
    const totalElement = document.getElementById('total');
    let total = parseFloat(totalElement.textContent);
    if (!isNaN(total)) {
        const descuento = (total * descuentoPorcentaje) / 100;
        total -= descuento;
        totalElement.textContent = total.toFixed(2);
    }
}