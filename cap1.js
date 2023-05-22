//let nombre = prompt("Escribe tu nombre");
//alert("Hola "+nombre+" !");

//Concatenar numeros

numero1 = 45;
numero2=8;

//forzar el string
frase = "" + numero1 + numero2
//document.write(frase);

//Concatenar un string y un numero

num1 = "45";
num2 = 8;
res = num1.concat(num2);

//Usar backticks para concatenar

nombre = "Marisol";
saludo = `Hola ${nombre} `;

document.write(saludo);

//Igualdad

let num4 = 23;
let num5 = 13;
let texto1 = "23";
let texto2 = "texto";

texto1 == num4 //el resultado es TRUE porque el doble igual no diferencia TIPOS DE DATOS
texto1 === num4 //el resutlado es FALSE porque compara que sean ESTRICTAMENTE IGUALES, TIPO y valor
