/*
	funcion para validación de entrada de caracteres
	fuente: https://uniwebsidad.com/libros/javascript/capitulo-7/utilidades-basicas-para-formularios
	modificado por E Giovanni Ferreira para el desafio #1 Alura Oracle
*/

function permite(elEvento, permitidos) {
  	// Variables que definen los caracteres permitidos
  	var numeros = "0123456789";
  	
  	//var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  	var caracteres = " abcdefghijklmnñopqrstuvwxyz";
  	var numeros_caracteres = numeros + caracteres;
  	var teclas_especiales = [8, 37, 39, 46];
  	// 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha

	// Seleccionar los caracteres a partir del parámetro de la función
	switch(permitidos) {
		case 'num':
    		permitidos = numeros;
    		break;
    	case 'car':
    		permitidos = caracteres;
    		break;
    	case 'num_car':
    		permitidos = numeros_caracteres;
    		break;
  	}

  	// Obtener la tecla pulsada
  	var evento = elEvento || window.event;
  	var codigoCaracter = evento.charCode || evento.keyCode;
  		//console.log(codigoCaracter); // hace referencia al código ASCII 
  	var caracter = String.fromCharCode(codigoCaracter); //convierte el´código en letra
  		//console.log(caracter); // hace referencia al caracter derivado de codigoCaracter

  	// se agrega mensaje recordando al usuario que solo puede ingresar letras minusculas
  	if(codigoCaracter >=65 && codigoCaracter<=90){
  		alert("Usted esta ingresando letras mayusculas. recuerde por favor solo minusculas")
  	}

  	// se agrega mensaje recordando al usaurio que no puede ingresar numeros
  	if(codigoCaracter >=48 && codigoCaracter<=57){
  		alert("Usted esta ingresando mumeros. recuerde por favor solo letras minusculas")
  	}


	// Comprobar si la tecla pulsada es alguna de las teclas especiales
	// (teclas de borrado y flechas horizontales)
	var tecla_especial = false;
		
	for(var i in teclas_especiales) {
		if(codigoCaracter == teclas_especiales[i]) {
			tecla_especial = true;
    		break;
    	}
  	}

	// Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
  	// o si es una tecla especial
  	return permitidos.indexOf(caracter) != -1 || tecla_especial;
}



/*
	función encriptar()  copia el objeto HTML text area y lo almacena en texto, luego se extrae
	el valor (value) y se almacena el la variable mensaje.  Se recorre elemento por elemento de mensaje
	haciendo comparación a través de switch para hacer el cambio de encriptado con las vocales e irlo 
	almacenando en el arrego mensajeEnc a traves de push().
*/

function encriptar(){
	var texto = document.querySelector(".texto-original");
	var mensaje = texto.value;
	var mensajeEnc = new Array();
	

	for(var i=0; i < mensaje.length; i++){

		var caracter =  mensaje[i];
		
		switch (caracter){
		case "a":
			mensajeEnc.push("ai")
			break;

		case "e":
			mensajeEnc.push("enter");
			break;

		case "i":
			mensajeEnc.push("imes");
			break;

		case "o":
			mensajeEnc.push("ober");
			break;

		case "u":
			mensajeEnc.push("ufat");
			break;

		default:
			mensajeEnc.push(mensaje[i]);
			break;
		}
		

	}

	
	ocultarSegunda();
	mostrarResultado();
	document.querySelector(".textores").value = mensajeEnc.join('');
	document.querySelector(".texto-original").value = "";



}

/*
	funcion ocultarSegunda:  la función se encarga de ocultar el contenido de la sección .segunda
	utilizando los ID de cada uno de sus elementos.

	Esta función es llamada desde encriptar(), para despejar el área donde aparecerá el texto encriptado
	o desencriptado
*/

function ocultarSegunda(){
	document.getElementById("imgpersona").style.display = 'none';
	document.getElementById("stitulo").style.display = 'none';
	document.getElementById("smensaje").style.display = 'none';
}

/*
	funcion mostrarResultado
*/

function mostrarResultado(){
	document.getElementById("resultado-enc").style.display = 'block';
}


/*
	funcion copiar():  se utilizar nuevamente querySelector para seleccionar la clase .texto-original
	y almacenarla como objeto, para luego utilizar select() para seleccionar todo el texto contenido 
	en el textarea
*/

function copiar(){

	var texto = document.querySelector(".textores");
	texto.select();
	document.execCommand('copy');
}


/*
	función desencriptar(){
	

	}


*/
function desencriptar(){

	var texto = document.querySelector(".texto-original");
	var mensajeEnc = texto.value; 
	var mensaje = new Array();
	

	for( var i=0; i < mensajeEnc.length; i++){

		
		switch (mensajeEnc[i]){
		case "a":
			mensaje.push("a");
			i = i + 1;
			break;

		case "e":
			mensaje.push("e");
			i = i + 4;
			break;

		case "i":
			mensaje.push("i");
			i = i + 3;
			break;

		case "o":
			mensaje.push("o");
			i = i + 3;
			break;

		case "u":
			mensaje.push("u");
			i = i + 3;
			break;

		default:
			mensaje.push(mensajeEnc[i]);
			break;
		}

	}

	document.querySelector(".textores").value = mensaje.join('');
	document.querySelector(".texto-original").value = "";

}