/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{   var importe;
    var nuevoImporte;
    var Descuento;

    importe = parseInt( document.getElementById( "importe").value);
    
    Descuento = importe * 25 / 100;

    nuevoImporte = importe - Descuento;

    document.getElementById('resultado').value = nuevoImporte;

	
}
