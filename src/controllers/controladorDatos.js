import { gastos } from "./simuladorBD.js";

console.log(gastos)

//Yo como cliente quisiera poder ver los gastos mayores a 10000

//Funciones para filtrar datos en los arreglos
let filtroMonto = gastos.filter(gasto => gasto.monto > 10000);
console.log(filtroMonto);

//Ver gastos menores a 5000 pesos
let filtro5000 = gastos.filter(gasto => gasto.monto > 5000);
console.log(filtro5000);

//Ver los gastos de transporte
let filtroTransporte = gastos.filter(transaccion => transaccion.categoria == "transporte");
console.log(filtroTransporte);

//Ver los gastos de alimentacion
let filtroAlimentacion = gastos.filter(transaccion => transaccion.categoria == "comida");
console.log(filtroAlimentacion);

//Ver los gastos de entretenimiento
let filtroEntrenimiento = gastos.filter(transaccion => transaccion.categoria == "entretenimiento");
console.log(filtroEntrenimiento);

let fila = document.getElementById("fila");
