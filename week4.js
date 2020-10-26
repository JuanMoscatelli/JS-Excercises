/*Funciones
Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/
console.log(suma(4,4.2));
function suma(num1,num2){
    if (isNaN(num1) || isNaN(num2)){
        alert('Parametro tiene error');
        return NaN
    }
    if(num1 !== Number.isInteger()){
        alert('Parametro es decimal');
    }
    if(num2 !== Number.isInteger()){
        alert('Parametro es decimal');
    }
    return Math.round(num1 + num2);
    }
/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/





/*Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/
/*var x = 2;
function validate(x){
    if (Number.isInteger(x)){
        return true;
    }
}
*/

/* la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/