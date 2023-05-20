function devuelveTrue() {
  console.log(true);
  return;
}

devuelveTrue();

setTimeout(function retraso() {
  console.log("Hola soy una promesa");
}, 5000);

function* generadorIndice() {
  let i = 0;
  while (true) {
    yield (i += 2);
  }
}

const indice = generadorIndice();

console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
