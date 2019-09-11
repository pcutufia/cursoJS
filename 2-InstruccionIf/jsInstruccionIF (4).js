function mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById('edad').value;

edad = parseInt(edad);

/*if (edad >= 13 && edad <= 17)

{alert ("Es adolescente") }


//probando por negativo. El ISNAN establece que todo lo que no sea un número//
*/
if( !(edad < 13 || edad > 17 || isNaN(edad)))

{alert ("Es adolescente");}

}//FIN DE LA FUNCIÓN