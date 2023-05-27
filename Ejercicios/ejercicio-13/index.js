// Mi nombre
let nombre = "Lester Alain"
console.log(nombre)

//Mi apellido
let apellido = "Alvarado Morales"
console.log(apellido)

// Mi nombre completo
let estudiante = nombre.concat(" ", apellido)
console.log(estudiante)

// Mi nombre en Mayusculas
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

// Mi nombre en minusculas
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

// Cantidad de lestras en mi nombre
let numeroLetras = estudiante.length
console.log(numeroLetras)

// Primera Lestra de mi nombre
let primeraLetra = nombre.charAt(0)
console.log(primeraLetra)

//Ultima letra de mi apellido
let ultimaLetra = apellido.slice(-1)
console.log(ultimaLetra)

//Eliminar los Espacios en el Texto
let sinEspacio = estudiante.replace(/\s+/g, "")
console.log(sinEspacio)

// Variable booleano
let booleano = estudiante.includes(nombre)
console.log(booleano)