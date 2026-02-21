//let:Define variales
//const
//

//let le dice al inerprete que esto es una variable, cambia
let nombre ="Pablo Ampuero"

let saludo = "hola"
// esto es una variable constante, no cambia
const pi = 3.141516




//este console.log 
// manda al navegador lo que le pasemos
console.log(nombre)



//esto es texto
let texto = "esto es un string";

//tipo de dato number
let numeros = 123456789;

//tipo de dato booleano
//respresenta si es verdadero o falso
let verdadero = true;
let falso = false;

let esMayor = true;

//concatenación
//une textos o variables en un solo string

let nombre1 = "Pablo";
let nombre2 = "Facundo";
let edad = 27

console.log("hola me llamo"+ " " + nombre1 + " " + nombre2 + " " + "tengo" + " " + edad + " " + "años" + " " + "y me gustaría poder aprender programación para dedicarme a Full stack");


//operadores matematicos
//son todo lo que sea operaciones básicas y mas
let a = 1
let b = 2

//suma
console.log(a + b);
//resta
console.log(a - b);
//multuplicación
console.log(a * b);
//división
console.log(a / b);
//modulo
console.log(a % b);


let h1 = document.getElementById("h1");



h1.addEventListener("mouseover", function(){
    h1.style.color = "blue"
});



