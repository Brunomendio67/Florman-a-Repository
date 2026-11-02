
const enviaFlores = document.getElementById("enviaFlores");

enviaFlores.addEventListener("mouseover", function() {
    enviaFlores.textContent = "Envía Bouquets";
});

enviaFlores.addEventListener("mouseout", function() {
    enviaFlores.textContent = "Envía Flores";
});


const botonesComprar = document.querySelectorAll(".comprar");

botonesComprar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        boton.style.display = "none";

    });

});


const iniciarSesion = document.getElementById("iniciarSesion");

iniciarSesion.addEventListener("click", function() {

    alert("Bienvenido a la tienda de flores");

});