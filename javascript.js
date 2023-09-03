//condicionales
let Nombre = prompt(`ingrese su nombre`)
let Apellido = prompt(`ingrese su apellido`)
if ((Nombre == "") && ( Apellido == "")){
    alert("no ingresaste nombre de usuario");
}
else {
alert(`bienvenido a vinland ${Nombre} ${Apellido}`)
}
alert("hay mangas con hasta un 15% de descuento")
let titulo =parseInt(prompt("ingrese el valor del libro"))
if (titulo >= 15000)
{alert(`el precio de su libro obtiene un 15% de descuento`)}
else (titulo <= 15000); {alert("lamentablemente no posee descuento")}

const productos = [
  { nombre: "mangas", precio: 10 },
  { nombre: "comics", precio: 20 },
  { nombre: "figuras", precio: 5 },
];


let total = 0;


for (let i = 0; i < productos.length; i++) {
  
  const cantidad = parseInt(prompt(`¿Cuántos "${productos[i].nombre}" desea comprar?`));
  
  
  if (!isNaN(cantidad) && cantidad >= 0) {
    total += productos[i].precio * cantidad;
  } else {
    alert("La cantidad ingresada no es válida. Debe ser un número mayor o igual a cero.");

    i--;
  }
}

console.log(`El total de la compra es: $${total}`);