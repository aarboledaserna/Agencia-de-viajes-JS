import {capturarDatos} from '../model/ModeloUsuarios.js';



//para poner nombre de destino dentro del input cuando le damos click
document.getElementById('carta').addEventListener('click',function(){

    let nombre = this.getAttribute('data-nombre');
    document.getElementById('dest').value = nombre;
})

document.getElementById('san').addEventListener('click',function(){

    let nombre = this.getAttribute('data-nombre');
    document.getElementById('dest').value = nombre;
})

document.getElementById('marta').addEventListener('click',function(){

    let nombre = this.getAttribute('data-nombre');
    document.getElementById('dest').value = nombre;
})

document.getElementById('confirmarReserva').onclick = accionesOnClick;

document.getElementById('limpiarFormulario').onclick = accionesOnClick;


document.getElementById('calcular').onclick = calculoCotizacion;

document.getElementById('mensaje').onclick = mostrarMensaje;

document.getElementById('mensajePlanes').onclick = mostrarMensajePlanes;

document.getElementById('mostrar').onclick = accionesOnClick1;
document.getElementById('mostrar').onclick = accionesOnClick1;

document.getElementById('opcion').onclick = calculoCotizacion;

document.getElementById('confirmarReserva').onclick = accionesOnClick2;



function mostrarFrm() {
    document.getElementById("mostrar1").style.display = "block";
  }

function clearSpecificInputs() {
    // Selecciona inputs por su id
    document.getElementById('dest').value = '';
    document.getElementById('cant').value = '';
    document.getElementById('nomreser').value = '';
    // document.getElementById('plan').value = '';
    // document.getElementById('usu').value = '';
}

function ocultarFormulario() {
    // Selecciona el div con el id "miDiv"
    let div = document.getElementById('miDiv');
    
    // Establece el estilo display a 'none' para ocultar el div
    div.style.display = 'none';
}

function mostrarMensaje(){
    alert("Deseas iniciar tu recorrido virtual por nuestro sitio web");
}

function calculoCotizacion(){
    let destino = document.getElementById('dest').value;
    let cantPersonas = document.getElementById('cant').value;
    let nombrereserva = document.getElementById('nomreser').value;
    let opcionSeleccionada = document.getElementById("opcion").value;

    let precio;

    switch(opcionSeleccionada){
        case 'opcion1':
            precio = 0;
            break;
        case 'opcion2':
            precio = 1500000;
            break;
        case 'opcion3':
            precio = 2500000;
            break;
        case 'opcion4':
            precio = 4500000;
            break;
    }

    let total= precio*cantPersonas;
    console.log(total);

    
    console.log('hola')
    mostrarContenido(total,cantPersonas)
}

//mostrar en el sidebar el resultado de la cotización

function mostrarContenido(total,cantPersonas) {
   
    contenido.style.display = "block";
    let resultadoLabel = document.getElementById('resultadoLabel');
    let resultadoLabel1 = document.getElementById('resultadoLabel1');
    resultadoLabel.textContent = `Valor de su cotización es: ${total}`;
    resultadoLabel1.textContent = `Cantidad de personas es: ${cantPersonas}`;
  } 

  function accionesOnClick() {
    capturarDatos();
    clearSpecificInputs();
}


function accionesOnClick1() {
    mostrarFrm();
    ocultarRegistro();
}

function accionesOnClick2() {
    formularioRegistro();
    msgCotizacion();
   
}

function mostrarMensajePlanes(){
    alert("Plan Básico: 1.500.000  - Plan familiar: 2.500.000 - Plan full: 4.500.000");
}

function formularioRegistro(){
    document.getElementById("mostrar1").style.display = "none";
    document.getElementById("frmRegistro").style.display = "block";
    
}

function ocultarRegistro (){
    document.getElementById("frmRegistro").style.display = "none";
}

function msgCotizacion(){
    alert("Su cotización ha sido mostrada con exito en la parte lateral izquierda de la pantalla");
}