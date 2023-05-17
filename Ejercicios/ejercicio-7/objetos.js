const datosPersonales = {
  nombres: "Lester Alain",
  apellidos: "Alvarado Morales",
  edad: 25,
  altura: 1.70,
  eresDesarrollador: true
};

let verEdad = datosPersonales.edad;
console.log(verEdad)


let lista = {...datosPersonales}
console.log(lista);

const amigos = [
  {nombres: "Blanca del Rosarios",
  apellidos: "Maas Guevara",
  edad: 29,
  altura: 1.60,
  eresDesarrollador: false},
  {nombres: "Edin Uriel",
  apellidos: "Caal Lem",
  edad: 19,
  altura: 1.76,
  eresDesarrollador: false}
]
console.log(amigos);

amigos.sort((a, b) => a.edad - b.edad)

console.log(amigos)