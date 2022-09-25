// 1.- Averiguar si el correo de un Usuario pertenece a Academlo
const user={
    name:"ayerenmartinez",
    age:25,
    email:"ayerenmartinez@academlo.com",
    description:"Me gusta la programación"
}
const user1={
    name:"julianaguerrero",
    age:29,
    email:"juliana@academlo.com",
    description:"Estoy aprendiendo a programar"
}
console.log(user.email.endsWith("@academlo.com"));
// 2.- Sumar las edades de 2 usuarios
let sum=0;
sum = user.age + user1.age;
console.log("La Suma de las Edades es: "+sum);

// 3.- Encuentre el tamaño de la primera palabra de la descripción de cada usuario
let length1;
length1 = user.description.indexOf(" ");
console.log(length1);
let length2;
length2= user1.description.indexOf(" ");
console.log(length2);