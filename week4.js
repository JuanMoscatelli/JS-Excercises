/*Arrays
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
*/
var myArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(myArray[5]);
console.log(myArray[11]);



/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
//myArray.sort();
//console.log(myArray.sort());

/*
Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
myArray.unshift("preEnero");
myArray.push("postDiciembre");
console.log(myArray);


/*
Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
myArray.shift();
myArray.pop();
console.log(myArray);


/*
Invertir el orden del array (utilizar reverse)*/
//myArray.reverse();
//console.log(myArray);
/*
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
console.log(myArray.join('-'));

/*
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
*/
console.log(myArray.slice(4,11));