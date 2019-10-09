//let div = document.getElementsByTagName('div');  es lo mismo que abajo.

let div = document.getElementById('miDiv');

let hijos = div.children;

//let primerHijo = div.firstChild

//hijos[0].style.backgroundColor = "red";

let p1 = document.getElementById('p1');

console.log(p1);

let padre = p1.parentNode;


console.log(padre);

//let titulo = document.getElementById('titulo'); es lo mismo que lo de abajo. Entre corchetes la posiciòn dl vector
let titulo = document.getElementsByTagName('h1')[0];

let hermano = titulo.nextElementSibling.nextElementSibling;

let body = document.body;

let ultimoHijo = body.lastElementChild;

console.log(ultimoHijo);

let h2 = ultimoHijo.previousElementSibling;

console.log (h2);

console.log (div.hasChildNodes());

let enlace = document.createElement('a');
let texto = document.createTextNode('Ir a Clarín');
enlace.appendChild(texto);
enlace.setAttribute('href' , 'http://clarin.com');
enlace.setAttribute('target', 'blank')

let divEnlace = document.getElementById('enlace');

divEnlace.appendChild(enlace);

//console.log(hermano);

//console.log(hijos);

//console.log(div[0]);