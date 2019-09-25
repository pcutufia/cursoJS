
window.addEventListener('load', inicializarManejadores );

//cuando se carga la pagigan (load) llamam a la funciòn inicializar manejadores
function inicializarManejadores(){

    const boton = document.getElementById('btnCalcular');
    boton.addEventListener('click', calcularSupeficie);

}

function calcularSupeficie() {
    let radio = document.getElementById('txtRadio').value;
    let superficie = Math.PI * Math.pow( radio, 2);
    document.getElementById('txtSuperficie').value = superficie
}

function saludar(){
    alert("Hola");
}


// sincronico es secuencial. Asincronico va dando directivas y contnua. No espera respuestas
//para continuar





/*
// lenght: largo de un string. Se puede ejecutar direatamente desde la consola

let x = "Escritorio";

console.log( x.length);

console.log("algo".length);


//trim le saca los espacios delanteros y traseros
console.log("     algo    ".trim);


//.toLowerCase lo pasa a minusculas
// let cadena="ferrocaril"
//    cadena.indexOf('e')) me va a decir en que caracter esta la e de la variable definida (ferrocaril)
// cadena.includes('e') devuelve un boleano. SI esta o no 
//startsWith empieza con
//

// pasaje por valor, se mantiene el definido para cada variable
// cuando es por referencia si va cambiando porque el pasamos la direccion de moemoria del elemento y no una
// copia como pasa cuando es pasaje por valor.


/* function modificarX (x) {
    x = x * 2:

    console.log (" aca dentro x vale " + x)

} aca termino la funciòn

letx = 20

console.log (antes de la funcion x vale " + x")

modificar (x)

console.log ("desde pues de la funcion x vale " + x)


-- cuando se usan los corchetes es un objeto. Si se usan parèntesis, son arrays (es lo mismo que una funciòn?)



/*    alert("afuera de la funciòn");


function saludar(   ){

    alert("Hola");

}

saludar();

*/

// para llamar a una funciòn, para que se ejecute, se pone la funcipon y luego ()
// variable dentro de los parentesis, se llama parámetro


// es lo mismo hacer
/*

function saludar(  mensaje  ){

    alert(mensaje);

}

saludar("hola como estan");

saludar("chau gente");


asi estamos usando el parametro mensaje

cuando se quiere ver qeu es algo, se tiene que usar console log*/
