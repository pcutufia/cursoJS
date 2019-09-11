function mostrar()
{

var edad;
edad = document.getElementById('edad').value;

/* Para saber el tipo de dato string / number o lo que sea 

triple === es el mismo tipos de dato inclusive*/

edad = parseInt(edad)

console.log(typeof edad) 

if(edad === 15)

{alert ("Niña Bonita") }

else (alert ("Este pop up no debería salir!!"))    


}//FIN DE LA FUNCIÓN