
/*Strings
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
var tenWords;
tenWords = 'animalistic';
console.log(tenWords.toUpperCase());

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var newWord;
newWord = tenWords.substring(0,5);
console.log(newWord);


/*
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
var last3Words;
last3Words= tenWords.substring(8,11);
console.log(last3Words);


/*
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
var wordOne,a,b;
a = tenWords.toUpperCase();
b = tenWords.toLowerCase();
wordOne = a.substring(0,1) + b.substring(1,11);
console.log(wordOne);
 


/*
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
var c, d;
c = "Big Cat";
d = c.indexOf(" ");
console.log(d);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/