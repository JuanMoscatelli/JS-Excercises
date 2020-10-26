/*Funciones
Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

function suma(num1,num2){
    if (validacion(num1,num2)){
    return Math.round(num1 + num2)
    } 
    else {alert('numeros no son validos')}
}
/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/
function validacion(num1,num2){
    if (isNaN(num1) || isNaN(num2)){
        return false
    }
    if(num1 !== Number.isInteger()){
        return false
    }
    if(num2 !== Number.isInteger()){
        return false
    }
    else {return true}
}
console.log(suma(4,'4'));


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