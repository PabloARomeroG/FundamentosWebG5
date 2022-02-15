/*Se requiere modificar el texto asociado al elemento <p> que posea un “id” 
con el nombre “textoSaludo” a “Hola, este párrafo fue modificado”.  */
var parrafo = document.getElementById("textoSaludo");
console.log(parrafo.innerHTML); /*innerHTML es lo que contiene la variable parrafo (el texto que despliega)*/
parrafo.innerHTML = “Hola, este párrafo fue modificado”;
/*Igualmente, modificar los valores del elemento <input> con “id” igual a “entradaUno”, 
por el “value” igual a “Clic Aqui”, el id por “clicUno” y el tipo “type” por “button”.*/
var input1 = document.getElementById(“entradaUno”);
input1.value = "Clic Aqui"; /*value cambia el valor que contiene la variable input1*/
input1.id = "clicUno"; /*el id por “clicUno”*/
input1.type = "button"; /*el tipo “type” por “button”.*/


/*Además, agregar el atributo “style” con la propiedad “color: red; background-color: green”.*/
input1.style.color = "red";
input1.style.backgroundColor = "green";