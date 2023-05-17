let fechaHoy = new Date();
console.log(fechaHoy);

let fechaNacimiento = new Date(1997, 06, 09);
console.log(fechaNacimiento);

let comparar = fechaHoy > fechaNacimiento;
console.log(comparar);

let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

let mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

let anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);