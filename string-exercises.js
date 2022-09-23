// 1.- Averiguar si el correo de un usuario pertenece a Academlo.
    //ayerenmartinez@academlo.com
    //daniel@gmail.com
    //erick@hotmail.com
let correoUsuario = "ayerenmartinez@academlo.com";
let pertenece =false;

if(correoUsuario.endsWith("@academlo.com")){
    pertenece = true;
}
if(pertenece){
    console.log("El Correo del Usuario pertenece a Academlo");
}else{
    console.log("El Correo del Usuario No pertence a Academlo");
}
// 2.- Encuentra el tamaño de la primera palabra en un string.
let texto ="Anthony Davis Yeren Martinez";
let posicionPrimerEspacioEnBlanco = texto.indexOf(" ");
let primeraPalabra=texto.slice(0,posicionPrimerEspacioEnBlanco);
let tamanioPrimeraPalabra = primeraPalabra.length;
console.log("La Primera Palabra es: "+primeraPalabra);
console.log("El tamaño de la Primera Palabra es: "+tamanioPrimeraPalabra);
//OTRA FORMA
let texto2 ="Anthony Davis Yeren Martinez";
let posicionPrimerEspacioEnBlanco2 = texto.indexOf(" ");
console.log("El tamaño de la Primera palabra es: "+posicionPrimerEspacioEnBlanco);
