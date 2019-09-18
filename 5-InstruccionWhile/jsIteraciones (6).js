function mostrar()
{

	/*var n1;
	var n2;
	var n3;
	var n4;
	var n5;
	*/

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero;

	for( var i=0; i < s; i++){

		numero = parseInt( prompt("Ingrese un nùmero:  "));

		acumulador = acumulador + numero;
// esto de la linea de arriba es lo mismo que poner acumuladro += numero;
	} 

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

/*-----------------------
var seguir;

do{
alert("hola como va?");

seguir = prompt("quiere que");

}while( seguir == 's';)

------------------------
//tengo que definir la variable con el valor S porque si no no entra al while la primera vez

var seguir = 's';

while (seguir == 's')
{alert ("hola como le va?");

seguir = prompt("quiere que lo salude de nuevo?");

}*/

}//FIN DE LA FUNCIÓN