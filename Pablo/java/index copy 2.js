function Avenger( nombre, nombreReal, poder)
{
    this.nombre = nombre;
    this.nombreReal = nombreReal;
    this.salud = 100;
    this.poder = poder;

    this.status = function(){}

    console.log( this.nombre + " " + " Salud; " + this.salud + " Energia" + this.poder)
}

this.curar = function( amigo ){
    if( this.poder > 40) {
        amigo.salud += 20;
        this.poder -= 40;
    }
}

this.atacar = function( malo ){

    malo.salud -= 50;

}
this.status = function(){
    if(this.salud > 0) {
        console.log( this.nombre + "Salud: " + this.salud + "Energia: " + this.poder)
    }
    else{
        this.salud = 0;
        console.log("Estoy Muero");
    }
}



var Ironman = new Avenger("Ironman", "Tony", 1000);
var Capitan = new Avenger("Capitan Amèrica", "Steve", 500);
var Thanos = new Avenger("Thanos", "juan", 1500);



Ironman.status();
Capitan.status();
Thanos.status();

//Ironman.atacar(Thanos);



