//Lo que intento realizar en "Calculadora", en Excel lo hago con la siguiente fórmula.
//primero defino el área de trabajo de 2 columnas con 3 filas.
//Precio   -   1000
//10%      -    100
//20%      '    200
//La formula que va en la celda donde está el 100 es: =SI(D4="";"";D4*E3/100)
//Luego se arrastra la misma para la celda de 200.

/*
function captura (){
    var precio=document.getElementById("precio").value;//Capture la variable de nombre Precio; lo que el usuario digite en el cuadro de texto de nombre precio.
    var descuento=document.getElementById("descuento").value;
    var totaldescuento=document.getElementById("totaldescuento").value;
    var totalacobrar=document.getElementById("totalacobrar").value;

function calcularporcentaje (precio, descuento){
    return descuento*10000/precio;//preguntar sobre 100%

function obtener (descuento, precio){
    return descuento - precio; //función no obtiene resultado
    }
    }
    
console.log(calcularporcentaje(precio, descuento));
console.log(precio)
console.log (descuento)
console.log (totaldescuento)
console.log (totalacobrar)
}
*/

var precio, descuento, totaldescuento, totalacobrar

precio=parseFloat(prompt ("Indique el precio"));
descuento=parseFloat(prompt("Indique % de descuento"));

totaldescuento = precio*descuento/100
totalacobrar = precio-totaldescuento;

alert ("El descuento es de: " + totaldescuento);
alert ("El total a cobrar es de: " + totalacobrar);
document.write("El descuento es de: " + totaldescuento);
document.write("<br><br>El total a cobrar es de: " + totalacobrar);


