/*Métodos vs Propiedades*/

let texto ="Hola Mundo";
console.log(texto.toUpperCase());

/*
endswith -- método para poder saber si un texto termina con alguna letra o numero (retorna true o false)
indexOf -- método para obtener la posición de la primera ocurrencia de una letra o número
lastIndexOf --métidi para obtener la posición de la última ocurrencia de una letra o número
slice -- Sirve para obtener un texto o cortar un texto
replace -- Sirve para remplazar la primera ocurrencia de una letra por otra letra
includes -- Sirve para comprobar si el texto contiene a otro texto (letra o palabra) retorna true o false
toUpperCase() -- Sirve para convertir un texto a Mayusculas
toLowerCase() -- Sirve para convertir un texto a Minusculas
*/
console.log(texto.endsWith("o"));
console.log("Posición de la primera ocurrencia: "+texto.indexOf("o"));
console.log("Posición de la última ocurrencia: "+texto.lastIndexOf("o"));
console.log(texto.slice(0,3));
console.log(texto.replace("a","b"));
console.log(texto.includes("Mundo"));