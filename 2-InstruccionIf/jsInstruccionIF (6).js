function mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById('edad').value;

edad = parseInt(edad);

if (!isNaN(edad))


    if (edad >= 18) 


    {alert ("Es adulto")}

    else if (edad >= 13)

    {alert ("Es adolescente")}

    else { alert("Es niño")}

}//FIN DE LA FUNCIÓN