(function () {
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function () {
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length - 1; i++) {
			lista.children[i].addEventListener("click", function () {
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function () {
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eleminarTarea = function () {
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length - 1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());


// PUNTO 2
var registro = [];

document.getElementById("acciones").children[0].addEventListener("click", registrar)


function registrar() {
	var abonos = parseInt(document.getElementById("abonos").value)
	var prestamos = parseInt(document.getElementById("prestamos").value) * -1
	if (!isNaN(abonos)) {
		registro.push(abonos)
		document.getElementById("abonos").value = ""
	}
	if (!isNaN(prestamos)) {
		registro.push(prestamos)
		document.getElementById("prestamos").value = ""
	}
	calculate();
}
calculate = () => {
	var tmp = 0;
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	registro.reduce(reducer);
	registro.forEach((e) => tmp += e)
	document.getElementById("results").children[0].children[0].innerText = tmp
}


/*Construir un formulario de registro con al menos dos campos: username, password.

Y para el input password realizar las siguientes validaciones:
+ Al menos: 10 carácteres
+ max: 20 carácteres
+ contenga: may, min, carácter especial, número.*/

$('.btn_validar_login').click(validar_password)

function validar_password() {
	//comentario bla bla
	var password = $('#password').val();
	// validacion de tamaño
	if (password.length < 10) {
		alert('debe ser mayo a 10')
		return false;
	} else if (password.length > 20) {
		alert('Debe ser menor o igual a 20')
		return false;
	}
	if (validar_clave(password) == true) {
		alert('contraseña fuerte');
		return true;

	} else {
		alert('contraseña no fuerte');
return false;
	}

}
function validar_clave(contrasenna) {
	if (contrasenna.length >= 8) {
		var mayuscula = false;
		var minuscula = false;
		var numero = false;
		var caracter_raro = false;

		for (var i = 0; i < contrasenna.length; i++) {
			if (contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90) {
				mayuscula = true;
			}
			else if (contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122) {
				minuscula = true;
			}
			else if (contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57) {
				numero = true;
			}
			else {
				caracter_raro = true;
			}
		}
		if (mayuscula == true && minuscula == true && caracter_raro == true && numero == true) {
			return true;
		}
	}
	return false;
}

$('.btn-user_validate').click(validar_password);

function validarFormu() {
	var nombre, apellido, correo;
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	correo = document.getElementById("correo").value;
	var arreglo = [];
	arreglo = nombre.trim().split(" ");
	expresion = /\w+@\w+\.+[a-z]/;

	if (nombre == "" || apellido == "" || correo === "") {
		alert('Todos los campos son obligatorios');
		return false;
	} else if (!expresion.test(correo)) {
		alert('El correo no es valido');
		return false;
	} else if (arreglo.length > 2) {
		alert('No debe ir mas de dos nombres');
		return false;
	}
}






function formuIn() {
	var nombre, correo, direccion, edad, ocupacion, telefono;

	nombre = document.getElementById("nombre1").value;
	correo =$('.JS-correo').val();
	direccion = document.getElementById("direccion").value;
	edad = document.getElementById("edad").value;
	ocupacion = document.getElementById("profesion").value;
	telefono = document.getElementById("telefono").value;
	
	var usuario = {

		/* name = angie
			name1=name,		
		*/
		correo: correo,
		nombre1:nombre,
		direccion:direccion,
		edad:edad,
		telfono:telefono,
	}

[]

	console.log(usuario);

	return false;
}
