

const sumaNotas  = (a,b) => a + b;
const division = x => x / 2;
// const promedio   = x => x /sumaNotas.lenght;
let primerCuatri = Number(prompt("Ingrese la nota del primer cuatrimestre"));
let segundoCuatri = Number(prompt("Ingrese la nota del segundo cuatrimestre"));
let operacion= division(sumaNotas(primerCuatri, segundoCuatri));
console.log(operacion);
