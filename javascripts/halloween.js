/* functions to use inside halloween exercise */

/* una function es un MÓDULO que describe un algoritmo simple */
/* suele tener PARÁMETROS, en este caso imagen */
/* un parámetro es la variable sobre la que actua el módulo */
/* por otra parte, javascript es orientado a objetos */
/* el objeto principal es DOCUMENT, la página */

function mostrar(imagen){
    document.getElementById(imagen).style.visibility="visible";
}

function ocultar(imagen){
    document.getElementById(imagen).style.visibility="hidden";
}

function sonar(sonido){
    document.getElementById(sonido).onplay();
}

function parar(sonido){
    document.getElementById(sonido).pause();
}