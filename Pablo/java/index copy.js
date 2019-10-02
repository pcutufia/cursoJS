function Persona(nombre, apellido, edad){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function(){
        console.log("Hola soy " + this.nombre + " " + this.apellido + ", " + x.genero)
    }

}

var x = new Persona("Juan", "Uranga", "33");
var y = new Persona("Lucia", "Garcia", 30);

console.log(x);
console.log(y);

x.genero = "Homosexual"

console.log(x);
console.log(y);

x.saludar(); 

// en js toda funciòn tienen un retorno, por eso es una funciòn