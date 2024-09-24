//Tipos de datos
// 1.Underfined
let cliente;
console.log('El cliente és: ${cliente}"');
console.log('El cliente tipo de dato de la variable de cliente es: ${typeof(cliente)}');

cliente="Edwin"
console.log('El cliente es: ${(cliente)}');
cliente = "123";

console.log('El cliente es:${(cliente)}');
console.log('El tipo de dato de la variable cliente es:${typeof(cliente)}');

// 2.Boolean
console.warn("---Tipo de dato: Boolean (Boleano - True/False)");
let esPremium= "no lo se";
console.log('¿Es el cliente Premium?:${Premium}');
console.log('El cliente és: ${cliente}"');
console.log('El  tipo de dato de la variable de Premium es: ${typeof(Premium)}');

Premium=true;
console.log ('El tipo de la variable Premium es: $(typeof(Premium))');
if (Premium)
console.log("El cliente pago por usar el servicio ");
else 
 console.log("El cliente pago por usar el servicio");
console.log('¿Es el cliente Premium?:${Premium}');
console.log("cambiando el valor de premium a false");
Premium = false;
if (Premium)
    console.log("El cliente pago porr usar el servicio");
else{
    console.log("El cliente no pago por usar el servicio");
}

//3. NUMBER
var cantidad
const costo_producto=10.50
let saldo_cuenta=-2500.40
let monto_trasaccion;

console.warn("-tipo de dato NUMBER (Numeros positivos , neghativos,decimaeles,flotantes");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta :${costo_producto}`)
cantidad=8;
console.log(`as elegido comprar :${cantidad} de productos.`)
console.log(`El importe total de la compra es ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`tu nuevo saldo es de ${saldo_cuenta}`);
//El cliente realiza uin abono de 1500
monto_trasaccion=1500;
console.log (`tu abono de ${monto_trasaccion} a sido asignada tu nuevbo saldo es de :${(saldo_cuenta+monto_trasaccion)}`);


const alumno="Juan"
let producto = "Monitor 20 pulgadas"

const numero = "30"
const numero2 = 30

console.log (typeof numero)
console.log (typeof numero2)


const numeroGrande = BigInt (9182981948)
console.log (typeof numeroGrande)

const numeero = 10
const numero4 = 20
//console.log (numero = Number (numeroGrande))

const numero6 ="30"
const numero5 = 30
console.log (typeof String  (numero))
console.log (typeof Number(numero2))

const primerSymbol =Symbol (30)
const segundoSymbol = Symbol (30)
console.log (primerSymbol === segundoSymbol)
console.log (primerSymbol.valueOf())

const descuento =null
console.log(typeof descuento)



