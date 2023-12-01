// Números:

// Escribe una función que tome dos números como argumentos y devuelva su suma.
function sum (a,b) {
    return a+b;
}
console.log("Sum: " + sum(10,5));

// Escribe una función que tome dos números como argumentos y devuelva su resta.
function extract (a,b) {
    return a-b;
}
console.log("Extract: " + extract(10,5));

// Escribe una función que tome dos números como argumentos y devuelva su producto.
function multiply (a,b) {
    return a*b;
}
console.log("Multiply: " + multiply(10,5));

// Escribe una función que tome dos números como argumentos y devuelva su división.
function devide (a,b) {
    return a/b;
}
console.log("Devide: " + devide(10,5));

// Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function power (a,b) {
    return a**b;
}
console.log("Power: " + power(2,5));
// Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function remainder (a,b) {
    return a%b;
}
console.log("Remainder: " + remainder(10,3));
// Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
function sqrt(a) {
    return Math.sqrt(a);
}
console.log("Square root: " + sqrt(81));
// Escribe una función que tome un número como argumento y devuelva su valor absoluto.
function absoluteValue(a) {
    return Math.abs(a);
}
console.log("Absolute value: "+ absoluteValue(-5));
// Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.
function roundDecimal(a) {
    return Math.round(a);
}
console.log("Round decimal: " + roundDecimal(85.4834542));
// Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
function randomBetween0and1 () {
    return Math.random();
}
console.log("Random between 0 and 1: " + randomBetween0and1());

// Letras:

// Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
function concatenation(a,b) {
    return a + " " + b;
}
console.log("Concatenation: " + concatenation("Galina", "Aleksandrova"));
// Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
function stringLength(a) {
    return a.length;
}
console.log("String length: " + stringLength("Galina"));
// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
function capitalize(a) {
    return a.toUpperCase();
}
console.log("Capitalize letters: " + capitalize("galina"));
// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
function lowercase(a) {
    return a.toLowerCase();
}
console.log("Lowercase letters: " + lowercase("GALINA ALEKSANDROVA"));
// Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function textIndex (a, b) {
    return a[b];
}
console.log("Character at that position: " + textIndex("Galina", 5));
// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
function reverseString(a) {
    const array = a.split("");//convert string to elemnts of the array
    const reversedArray = array.reverse();//reverse an array
    return reversedArray.toString();//create string from elements of the array
}
console.log("Reverse string: " + reverseString("Hello"))
// Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
function countChar (a, char) {

    const arr = a.split("");
    let countChar = 0;

    arr.forEach(element => {
    if (element === char) {
        countChar+=1;
    } })

    return countChar 
}
console.log("counting characters: " + countChar("Galina", "h"));
// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.


// Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.



// Arrays:

// Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
function calcSumOfArr(a) {
    let sum = 0;
    for (let index = 0; index < a.length; index++) {
        sum += a[index];
    }
    return sum;
}
console.log("Sum of the array: " + calcSumOfArr([1,25,6]));
// Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
function average(a) {
    return calcSumOfArr(a)/a.length;
}
console.log("Average of the sum of the array: " + average([2,5,5,4]))
// Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

//callback function
// function compareNumbers(a, b) {
//     return a - b;
// }
// function sortAsc (arr) {
//     return arr.sort(compareNumbers);//behind the scene:
//compareNumbers(100, 250);  
// compareNumbers(250, 5);   
// compareNumbers(5, 1);    
// compareNumbers(1, -10);
// }

//version with the closure
function sortAsc (arr) {
    return arr.sort(function(a,b) {return a-b})
}
console.log("Asc sort: " + sortAsc([100,250,5,1,-10]))

// Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
function filterGreaterThan (arr, n) {
    return 
}
console.log("Greater than number " + filterGreaterThan([1,100,90,500,495,7,9,-70],200))
// Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

// Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
// Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
// Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
// Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
// Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

// Objetos literales:

// Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
// Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
// Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
// Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.
// Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
// Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.
// Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
// Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
// Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.
// Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.

