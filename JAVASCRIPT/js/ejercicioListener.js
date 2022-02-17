/*Apoyo Lectura - Funciones y ciclos Día 2 (Parte II)*/
/*
var boton = document.getElementById("boton");
var buscador = document.getElementsByName("buscador");
var resultado = document.getElementsByClassName("resultado");

boton.addEventListener('click', function() { resultado[0].innerHTML = "Estás buscando: " + buscador[0].value; });
*/

var evento = document.getElementById("evento");
var numero = document.getElementsByName("numero");
var resultado = document.getElementsByClassName("resultado");

evento.addEventListener('click', function() { resultado[0].innerHTML = "Estás buscando: " + numero[0].value; });