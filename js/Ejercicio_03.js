//objetos
const nombre= "Tablet"
const precio = 300
const disponible = true

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(precio.nombre)
console.log(disponible.nombre)

//destructing

const {nombre2, precio2, disponible2} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//objeto literal enchament

const autenticado = true
const usuario = "edwin"
const nuevoObjeto ={
    autenticado : autenticado, 
    usuario:usuario

}
console.table(nuevoObjeto)

