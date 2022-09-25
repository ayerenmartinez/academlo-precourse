// Pop: Elimina el último elemento de un arreglo
// Push: Agrega un elemento al final de un arreglo
// Shift: Elimina el primer elemento de un arreglo
// Unshift: Agrega un elemento al inicio de un arreglo
// Splice: Agrega o elimina un elemento de un arreglo indicandole la posición y el numero de elementos a eliminar
// el método splice también nos permite remplazar elementos
// el método splice tambien nos permite agregar mas de 2 elementos
const emails=["ayerenmartinez@academlo.com","erick@academlo.com","daniel@academlo.com","andrea@academlo.com"];
console.log(emails);
emails.pop(); //Elimando el último elemento del arreglo
console.log(emails);
emails.push("george@academlo.com");
console.log(emails); //Agregando un nuevo elemento al final del arreglo
emails.shift(); //Eliminado el primer elemento del arreglo
console.log(emails);
emails.unshift("july@academlo.com"); //Agregando un nuevo elemento al inicio del arreglo
console.log(emails);
emails.splice(1,1);//Eliminado al tercer elemento de un arreglo de 4 elementos
console.log(emails);
emails.splice(1,0,"jose@academlo.com"); //Agregando un elemento al inicio del arreglo, se pone 0 en el medio para que no elimine algún elemento
console.log(emails);
emails.splice(1,1,"ayeren@academlo.com");//Eliminado el elemento en la posicion 1 y alli mismo remplazarlo por otro elemento
console.log(emails);
emails.splice(0,0,"keyi@academlo.com","ismael@academlo.com");//Agregando dos elementos al arreglo sin eliminar y empezando en la posicion 0
console.log(emails);