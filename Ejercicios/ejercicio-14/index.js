let boton = document.getElementById("miBoton")
console.log(boton);

boton.addEventListener("click", function() {
  alert("Click en el Boton");
});

$(document).ready(()=>{
  $("#miBoton").on("click", function(){
    console.log("Hola estoy utilizando jQuery")
  })
});
