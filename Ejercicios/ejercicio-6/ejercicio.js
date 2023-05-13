// Creando mi Lista de compras
let compras = ["Azucar", "Papel Sanitario", "Jabon de Manos", "Té de Limon", "Cafe", "Pan Blanco"];
console.log(compras);

////////////////////////////////////////////////////////////////////////////////////
// Agregando a mi Lista el "Aceite de Girasol"
compras.push("Aceite de Girasol");
console.log(compras);

////////////////////////////////////////////////////////////////////////////////////
// Eliminando de mi Lista el "Aceite de Girasol"
compras.pop();
console.log(compras)

////////////////////////////////////////////////////////////////////////////////////
// Mis peliculas favoritas 

let peliculas = [
  {titulo: "Super Mario Bros", director: "Aaron Horvath", fecha: "2023"},
  {titulo: "The Tomorrow War", director: "Christopher McKay", fecha: "2021"},
  {titulo: "Hasta el último hombre", director: "Mel Gibson", fecha: "2005"}
];

////////////////////////////////////////////////////////////////////////////////////
// Obteniendo peliculas Recientes
const peliculasRecientes = peliculas.filter(obj => obj.fecha > 2010);
console.log(peliculasRecientes);

////////////////////////////////////////////////////////////////////////////////////
// Obteniendo Directores de las peliculas
function directoresPeliculas({director}) {
  return director
};

const directores = peliculas.map(directoresPeliculas);
console.log(directores);

////////////////////////////////////////////////////////////////////////////////////
// Obteniedo Titulos de peliculas
function titulosPeliculas({titulo}){
  return titulo
};

const titulos = peliculas.map(titulosPeliculas);
console.log(titulos);

////////////////////////////////////////////////////////////////////////////////////
// Usando Concat

const directoresTitulos = directores.concat(titulos);
console.log(directoresTitulos);

////////////////////////////////////////////////////////////////////////////////////
// Usando Factor de propagación.
const propagacion = [...directores, ...titulos];
console.log(propagacion);