let listaPersonas = [];

//let listaPersonas1 = new Array(); // esto es lo miso que arriba
///array: conjunto de elementos iguales
// corchetes hace referencia a que es un objeto cuadno defino una variable. 
// dentro puede tener varias variables
// con let p1 = new Persona("Juan" , "Gomez" , 30 , masculino, true, false, false) estoy insertando una persona

function Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.maneja = maneja;
    this.nada = nada;
    this.bicicleta = bicicleta;
    this.pais = pais;
    
    Persona.prototype.Saludar = function () {
        console.log("Hola, soy " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años " )
    }
}

window.addEventListener('load' , function(){
    //document.getElementById('frmPersona');
    //var frm = document.getElementsByTagName('form')[0];
    let frm = document.forms [0];

    frm.addEventListener('submit', manejarSubmit);

});

function manejarSubmit(e){

    e.preventDefault();
    var frm = e.target;

    alert("Capturé el evento Submit")

    // crear aca una persona
    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let edad = parseInt(document.getElementById('txtEdad').value);
    let genero;
    if( document.getElementById('rdoMasculino').checked == true){
        genero = "masculino";
    }
    else{
        genero = "femenino"
    }
    let bicicleta = document.getElementById('chkBicicleta').checked;
    let nada = document.getElementById('chkNada').checked;
        let maneja = document.getElementById('chkManeja').checked;
    let pais = document.getElementById('selPais').value;



    let nuevaPersona = new Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais);

    console.log(nuevaPersona)

    listaPersonas.push(nuevaPersona);

    console.log(listaPersonas);

    document.getElementById('txtNombre2').value = nuevaPersona.nombre;
    document.getElementById('txtApellido2').value = nuevaPersona.apellido;
    document.getElementById('txtEdad2').value = nuevaPersona.edad;
    if (nuevaPersona.genero == "masculino"){
        document.getElementById('rdoMasculino2').checked = true;
    }
    else {
        document.getElementById('rdoFemenino2').checked = true;
    }
    document.getElementById('chkNada2').checked = nuevaPersona.nada;
    document.getElementById('chkBicicleta2').checked = nuevaPersona.bicicleta;
    document.getElementById('chkManeja2').checked = nuevaPersona.maneja;

    document.getElementById('selPais2').value = nuevaPersona.pais;
    
    limpiarformulario();
}


function limpiarformulario(){

    document.getElementById('txtNombre').value = "";
    document.getElementById('txtApellido').value = "";
    document.getElementById('txtEdad2').value = "";
    document.getElementById('rdoMasculino').checked = true;
    document.getElementById('rdoFemenino').checked = true;
    document.getElementById('chkNada').checked = false;
    document.getElementById('chkBicicleta').checked = false;
    document.getElementById('chkManeja').checked = false;
    document.getElementById('selPais').value = "ar";

}