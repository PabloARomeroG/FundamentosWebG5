/*Validar el ingreso de datos en un buscador de animales, 
por lo que solo debe aceptar las palabras “perro” y “gato”. 

De lo contrario, no puede permitir la búsqueda, generando un mensaje de error en un alert. 
*/

var buscar = document.getElementById("buscar");

/*Evento para validar el ingreso de datos - click es el nombre del evento*/
buscar.addEventListener('click', function() {
    validarBusqueda();
});

function validarBusqueda() {

    var animal0 = document.getElementById('animal'); /*toma el ÚNICO elemento, ya que el id debe ser ÚNICO*/
    var animal1 = document.getElementsByClassName('animal'); /*toma todos los elementos del conjunto html*/
    var animal2 = document.querySelector(".animal"); /*toma el 1er elemento*/
    /*var animal2 = document.querySelectorAll(".animal");*/
    /*Toma todos los elementos de animal2 a través de la consulta*/

    console.log(animal0.value, animal1[0].value, animal2.value);
    /*[0] porque se toma el primer elemento del conjunto html que da al seleccionar por nombre de clase*/


    if (animal0.value.match(/gato/i)) {
        alert("Contiene la palabra gato 0");
    }

    if (animal1[0].value.match(/gato/i)) {
        alert("Contiene la palabra gato 1");
    }

    if (animal2.value.match(/gato/i)) {
        alert("Contiene la palabra gato 2");
    }

    var correo = document.getElementById("correo").value; /*Validacion del correo*/
    if (correo.match(/@[a-z].com/i)) { /*Se debe ingresar el @, letras de la a a la z y .com, en ese orden*/

        /*if(correo.match(/@hotmail.com|@gmail.com/i)) */ //valida @hotmail.com o @gmail.com
        /*if(correo.match(/@(hotmail|gmail)+.[azA-AZ].com/i))*/ //valida hotmail o gmail concatenado con letras y .com
        if (correo.match(/[^0-9]]/i)) //busca y excluye los números de 0 al 9

            alert("Formato correcto");
    } else {
        alert("Faltó agregar el @ o el .");
    }

    alert("Validar búsqueda");
}