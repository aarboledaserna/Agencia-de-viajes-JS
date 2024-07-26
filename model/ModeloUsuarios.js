let DatosCotizacion;
let arrayDatosCotizacion;
let hola;

let DatosFrm;
let arrayDatosFrm;

// Función para capturar los datos del formulario

export function capturarDatos() {
  // Obtener el valor del input
  let destino = document.querySelector("#dest").value;
  let cantPersonas = document.querySelector("#cant").value;
  let nombrereserva = document.querySelector("#nomreser").value;
  let opcionSeleccionada = document.getElementById("opcion").value;

  let DatosCotizacion = {
    destino,
    cantPersonas,
    nombrereserva,
  };

  console.log(DatosCotizacion);
  let arrayDatosCotizacion = [];
  arrayDatosCotizacion.unshift(DatosCotizacion);

  console.log(arrayDatosCotizacion);
}






  // Mostrar los datos en el label del formulario

//   let contadorPersonas = document.getElementById("contadorPersonas");
//   contadorPersonas.textContent = `Nombres de las personas:\n${nombres}`;
//   console.log(arrayDatosFrm[0].nombre);





