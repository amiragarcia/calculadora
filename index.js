const numero0 = document.getElementsByClassName("numero")[9];
const numero1 = document.getElementsByClassName("numero")[6];
const numero2 = document.getElementsByClassName("numero")[7];
const numero3 = document.getElementsByClassName("numero")[8];
const numero4 = document.getElementsByClassName("numero")[3];
const numero5 = document.getElementsByClassName("numero")[4];
const numero6 = document.getElementsByClassName("numero")[5];
const numero7 = document.getElementsByClassName("numero")[0];
const numero8 = document.getElementsByClassName("numero")[1];
const numero9 = document.getElementsByClassName("numero")[2];

let operador1 = "";
let operador2 = "";

const suma = document.getElementsByClassName ("operador")[3];
const resta = document.getElementsByClassName ("operador")[2];
const multiplicacion = document.getElementsByClassName ("operador")[1];
const division = document.getElementsByClassName ("operador")[0];
const igual = document.getElementsByClassName ("operador")[4];

const limpiar = document.getElementsByClassName("col-2")[0];
const borrador = document.getElementById("borrador");

const decimal = document.getElementById("punto");

let punto = false;

let sumar = false;
let restar = false;
let multiplicar = false;
let dividir = false;

const display = document.getElementById("valor-anterior");
const resultado = document.getElementById("valor-actual");


numero0.addEventListener("click", function(){
	display.innerText =  display.innerText + '0';
}, false);

numero1.addEventListener("click", function(){
	display.innerText = display.innerText + '1';
}, false);

numero2.addEventListener("click", function(){
	display.innerText = display.innerText + '2';
}, false);

numero3.addEventListener("click", function(){
	display.innerText = display.innerText + '3';
}, false);

numero4.addEventListener("click", function(){
	display.innerText = display.innerText + '4';
}, false);

numero5.addEventListener("click", function(){
	display.innerText = display.innerText + '5';
}, false);

numero6.addEventListener("click", function(){
	display.innerText = display.innerText + '6';
}, false);

numero7.addEventListener("click", function(){
	display.innerText = display.innerText + '7';
}, false);

numero8.addEventListener("click", function(){
	display.innerText = display.innerText + '8';
}, false);

numero9.addEventListener("click", function(){
	display.innerText = display.innerText + '9';
}, false);


suma.addEventListener("click", function(){
	sumar = true;
	operador1 = display.innerText;
	display.innerText = "";
}, false)

resta.addEventListener("click", function(){
	restar = true;
	operador1 = display.innerText;
	display.innerText = "";
}, false);

multiplicacion.addEventListener("click", function(){
	multiplicar = true;
	operador1 = display.innerText;
	display.innerText = "";
}, false);

division.addEventListener("click", function(){
	dividir = true;
	operador1 = display.innerText;
	display.innerText = "";
}, false);

igual.addEventListener("click", function(){
	operador2 = display.innerText;
	operador1 = parseFloat(operador1);
	operador2 = parseFloat(operador2);
	display.innerText = "";
	if (sumar === true) {
		resultado.innerText = operador1 + operador2;
	};
	if (restar === true) {
		resultado.innerText = operador1 - operador2;
	};
	if (multiplicar === true){
		resultado.innerText = operador1 * operador2;
	};
	if (dividir === true){
		resultado.innerText = operador1 / operador2;
	};
}, false);

limpiar.addEventListener("click", function(){
	display.innerText = "";
	resultado.innerText = "";
	operador1 = "";
	operador2 = "";
	punto = false;
}, false);

borrador.addEventListener("click", function(){
	display.innerText = display.innerText.substring(0, display.innerText.length - 1);
	punto = false;
}, false);


decimal.addEventListener("click", function(){
	if(punto === false) {
		display.innerText = display.innerText + ".";
		punto = true
	} 
}, false);