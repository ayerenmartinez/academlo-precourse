// Ejercicios propuestos:

// Encontrar el tamaño de la última palabra en un texto.
let texto ="Anthony Davis Yeren Martinez";
let tamanioTexto = texto.length;
let ultimaPosicionEspacioEnBlanco = texto.lastIndexOf(" ");
console.log("Longitud del texto: "+tamanioTexto);
console.log("Última posición del Espacio en Blanco: "+ultimaPosicionEspacioEnBlanco);
let ultimaPalabra = texto.slice(ultimaPosicionEspacioEnBlanco+1,tamanioTexto);
console.log("Última Palabra: "+ultimaPalabra);
let tamanioUltimaPalabra =ultimaPalabra.length;
console.log("El Tamaño de la Última palabra es: "+tamanioUltimaPalabra);
// Encontrar el tamaño de la segunda palabra en un texto.
let frase ="Hola anthony estas bien";
let frase2;
let tamanioFrase = frase.length;
let posEB;
let posEB2;
let segundaPalabra;
posEB = frase.indexOf(" ");
console.log(tamanioFrase);
frase2 = frase.slice(posEB+1,tamanioFrase);
console.log(frase2);
posEB2=frase2.indexOf(" ");
segundaPalabra = frase2.slice(0,posEB2);
console.log("La Segunda palabra es: "+segundaPalabra);
console.log("El tamaño de la Segunda palabra es: "+posEB2);
