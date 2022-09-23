// Si sabemos cuántas letras tiene un texto (gracias a la propiedad length) y asignamos un número a cada letra
// ¿Cómo podriamos saber que indice/posicion corresponde a la Primera letra.
// Siempre será el indice 0
// ¿Cómo podriamos saber que indice/posicion corresponde a la Última letra.
// El indice que corresponde a la última letra es igual al número total de letras -1.
// ¿Cómo podriamos saber que indice/posicion corresponde a la Penúltima letra.
// El indice que corresponde a la penúltima letra es igual al número total de letras -2.
//Hola = 4
//1234
let mensaje ="Hola";
let tamanioMensaje=mensaje.length;
console.log("Tamaño: "+tamanioMensaje);
console.log("Primera Letra: "+mensaje[0]);
console.log("Última Letra: "+mensaje[tamanioMensaje-1]);
console.log("Penúltima Letra: "+mensaje[tamanioMensaje-2]);
//Coche =5
//12345
//Daniel =6
//123456
