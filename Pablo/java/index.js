let listaPersonas = []

function Persona(nombre, apellido, edad, maneja, nada, bicicleta, pais){

    this.nombre = nombre;

}

window.addEventListener('load' , function(){
    //document.getElementById('frmPersona');
    //var frm = document.getElementsByTagName('form')[0];
    var frm = document.form[0];

    frm.addEventListener('submit', manejarSubmit);

});

function manejarSubmit(e){

    e.preventDefault();

    alert("Capturé el evento Submit")

    // crear aca una persona
    var nuevaPersona = new Persona()
}