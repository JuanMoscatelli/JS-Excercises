/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/
//var myColors = ['rosa','verde','gris','negro','azul'];
/*
var myColors = ['rosa','verde','gris','negro','azul'], indexMyColors, color, firstLetter;
for (indexMyColors = 0; indexMyColors < 5; indexMyColors++){
    color = myColors[indexMyColors];
    firstLetter = color.slice(0,1);
    color = color.replace(firstLetter,firstLetter.toUpperCase());
    alert(color);
}
*/
/*
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
*/
/*var sentence = []
for (indexMyColors = 0; indexMyColors <5; indexMyColors++){
    sentence.push(myColors[indexMyColors]);
}
alert(sentence);
*/
/*Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/
var empty = []
for (index=0;index<10; index++){
    empty.push(index)
}
console.log(empty)