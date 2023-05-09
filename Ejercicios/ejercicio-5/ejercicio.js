let altura = "171 cm";
console.log(parseInt(altura));

let alturaMetros = " 1.71 m";
console.log(parseFloat(alturaMetros));


let pesoKilogramos = "80.7185";
console.log(parseFloat(pesoKilogramos).toFixed(2));

let redondeadoArriba = 1.71;
console.log(Math.ceil(redondeadoArriba));

let redondeadoAbajo = 80.7185;
console.log(Math.floor(redondeadoAbajo));


let maximoMas = Number.MAX_VALUE;
let max = maximoMas+1;
let maximo = Number.MAX_VALUE;

console.log(maximo === maximoMas);

console.log(maximoMas);
console.log(maximo);
