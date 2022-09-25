const car ={
    color:"Azul",
    doors:5,
    price:25000
};
console.log(car);
//Acceder a la propiedad doors
console.log(car.doors);
//Eliminar una Propiedad/Valor
delete car.price;
console.log(car);
//Agregar una propiedad
car.brand="Ford";
car.price=25000;
console.log(car);