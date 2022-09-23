//1.- Averiguar si el correo de un usuario dentro de un arreglo pertenece a Acamdelo


const emails =["erick@academlo.com","daniel@gmail.com"];
let firstElement = emails[0];
let secondElemento = emails[1];
console.log(firstElement.endsWith("@academlo.com"));
console.log(secondElemento.endsWith("@academlo.com"));
/*OTRA FORMA*/
console.log(emails[0].endsWith("@academlo.com"));
console.log(emails[1].endsWith("@academlo.com"));

//2.- Encuentra el tamaño de la primera palabra de un string
let texto = ["Hoy es Lunes","Tengo que descansar"];
console.log(texto[0].length); //tamaño de la primera frase
console.log(texto[0].indexOf(" "));//tamaño de la primera palabra de la primera frase
console.log(texto[1].indexOf(" "));//tamaño de la primera palabra de la segunda frase