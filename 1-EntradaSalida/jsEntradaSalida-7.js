/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
    var num2;
    var suma;
   
    num1 = parseInt( document.getElementById("numeroUno").value);
    num2 = parseInt( document.getElementById("numeroDos").value);
    
    /*num1 = parseInt(num1)
    num2 = parseInt(num2)*/
    suma = num1 + num2;

    alert ("La suma es " + suma)
	
}

function restar()
{   var num1;
    var num2;
    var Resta;

    num1 = parseInt( document.getElementById("numeroUno").value);
    num2 = parseInt( document.getElementById("numeroDos").value);

    Resta = num1 - num2;
    
    alert ("La resta es " + Resta)


}

function multiplicar()
{   var num1;
    var num2;
    var multiplicar;

    num1 = parseInt( document.getElementById("numeroUno").value);
    num2 = parseInt( document.getElementById("numeroDos").value);

    multiplicar = num1 * num2;
    
    alert ("La multiplicación es " + multiplicar)
	
}

function dividir()
{   var num1;
    var num2;
    var dividir;

    num1 = parseInt( document.getElementById("numeroUno").value);
    num2 = parseInt( document.getElementById("numeroDos").value);

    dividir = num1 / num2;
    
    alert ("La división es " + dividir)
	
}

