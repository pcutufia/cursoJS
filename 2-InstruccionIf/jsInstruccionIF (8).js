function mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById('edad').value);
var estado = document.getElementById('estadoCivil').value;

if( edad < 18 && estado != "Soltero")

else if( edad > 17 && estado = "Soltero")

{alert ("Es soltero y no es menor")};


else {void(0)};

}//FIN DE LA FUNCIÓN