/*FUNCIÓN PARA HABILITAR E INHABILITAR BOTÓN SUBMIT*/
var check = document.getElementById('checkterms');
var boton = document.getElementById('botonsubmit');
boton.disabled = true;

check.addEventListener("change", validarcheck);


function validarcheck(){

	var checkchecked = check.checked;
	
	if(checkchecked){
		
		boton.disabled = false;

	}else{
		
		boton.disabled = true;
	}

}

/*CONTADOR DE TEXTAREA*/
const textarea = document.getElementById('textarea');
const contador = document.getElementById('contador');

textarea.addEventListener('input', function(e){

	const target = e.target; 
	const maxlenght = target.getAttribute('maxlenght');
	const longitud = target.value.length;

	contador.innerHTML = `${longitud}/${maxlenght}`;

	if(longitud > maxlenght){
		contador.setAttribute("style", "color: red;");
	}else if(longitud < maxlenght){
		contador.setAttribute("style", "color: black;");
	}

})


/*FUNCIÓN PARA HACER MAYÚSCULA LAS PRIMERAS LETRAS*/
function letramayuscula(){
	var inombre = document.getElementById('inp-nombre');
	var iapellido = document.getElementById('inp-apellido');
	let letrap_nombre = inombre.value;
	let letrap_apellido = iapellido.value;
	

	inombre.value = letrap_nombre[0].toUpperCase() + letrap_nombre.slice(1);
	iapellido.value = letrap_apellido[0].toUpperCase() + letrap_apellido.slice(1);

}

/*FUNCIÓN PARA COMPARAR CONFIRMACIÓN DE EMAIL*/
function compararemail(){

	var email1 = document.getElementById('inp-email1').value;
	var email2 = document.getElementById('inp-email2').value;
	var mensaje = document.getElementById('mensajecomparacion');

    if(email1 != ''){
        if(email2 === email1){

            mensaje.innerHTML = '¡Existe coincidencia!';
            mensaje.setAttribute("style", "color: green;");
        }else{

            mensaje.innerHTML = '¡Los correos NO coinciden!';
            mensaje.setAttribute("style", "color: red;");
        }
    }
}

/*FUNCIONES PARA HACER APARECER Y DESAPARECER MODAL*/

let ventana_modal = document.getElementById('modal');

function vermodal(){

	ventana_modal.classList.remove('d-none');
}

function cerrarmodal(){

	ventana_modal.classList.add('d-none');
}

/*FUNCIÓN PARA BORRAR TODO*/

function borrartodo(){
	ventana_modal.classList.add('d-none');
	let nombre = document.getElementById('inp-nombre');
	let apellido = document.getElementById('inp-apellido');
	let correo1 = document.getElementById('inp-email1');
	let correo2 = document.getElementById('inp-email2');
	let comentario = document.getElementById('textarea');
	let mensajecoincidencia = document.getElementById('mensajecomparacion');
    let contador = document.getElementById('contador');
    let check = document.getElementById('checkterms');
	
	nombre.value = '';
	apellido.value = '';
	correo1.value = '';
	correo2.value = '';
	comentario.value = '';
	mensajecoincidencia.innerHTML = '';
    contador.innerHTML = '0/100';
    check.checked = false;
}



/*FUNCIÓN PARA CREAR COOKIES*/
function crearcookie(){

	let nombre = document.getElementById('inp-nombre').value;
	let apellido = document.getElementById('inp-apellido').value;
	let email1 = document.getElementById('inp-email1').value;
	let email2 = document.getElementById('inp-email2').value;
	let comentario = document.getElementById('textarea').value;
	let mensaje2 = document.getElementById('mensaje2');

	if(email2 === email1){
		mensaje2.innerHTML = '';
		sessionStorage.setItem('nombre', nombre);
		sessionStorage.setItem('apellido', apellido);
		sessionStorage.setItem('email1', email1);
		sessionStorage.setItem('email2', email2);
		sessionStorage.setItem('comentario', comentario);
	}else{
		mensaje2.setAttribute('style', 'color: red;');
		mensaje2.innerHTML = 'Revisa la información suministrada';
	}
}