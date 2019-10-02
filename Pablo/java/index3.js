

var Persona = {

    nombre : "Juan",
    apellido : "Perez",
    edad : 20,
    domicilio : {
        pais: "Argentina",
        localidad : "Avellaneda",
        direccion :{
            calle : "Av Mitre",
            numero: 750
        }
    }
    };

    console.log( Persona.nombre); //accedo al nombre

    console.log( Persona.domicilio.pais);

    console.log( Persona.domicilio.direccion.calle);

    console.log( Persona['domicilio']['direccion']['calle']);

    var x = "edad";

    console.log( Persona[x]);
    
    for( prop in Persona){console.log(prop+  " : "  + Persona[prop])};
    





// Definimos un objeto persona con su contenido

/* var a = 30;

function foo()
{

    var a = 20;

    console.log(a);

}

foo();

*/
// si estan las dos a, muestra la de adentro
