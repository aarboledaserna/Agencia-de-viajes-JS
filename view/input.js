 // Función para guardar el array con objetos en localStorage
 function guardarEnLocalStorage(array) {
    localStorage.setItem('datosFormulario', JSON.stringify(array));
}

// Función para cargar datos desde localStorage
function cargarDesdeLocalStorage() {
    const datosGuardados = localStorage.getItem('datosFormulario');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
}

// Función para verificar y borrar el array si tiene 10 o más objetos
function verificarYBorrarSiNecesario(array) {
    if (array.length >= 5) {
        // Borrar el array del localStorage
        localStorage.removeItem('datosFormulario');
        // Opcionalmente, reiniciar el array local
        array.length = 0; 
        // Borrar el contenido del elemento
        resultadoDiv.textContent = '';
    }
}

// Obtener el array de objetos desde localStorage o inicializar vacío
let arrayDatos = cargarDesdeLocalStorage();

// Manejar el clic en el botón "Agregar"
document.getElementById('agregarDatos').addEventListener('click', function() {
    // Obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;

    // Crear un nuevo objeto
    let nuevoObjeto = {
        nombre: nombre,
        telefono: telefono,
        email: email
    };

    // Agregar el nuevo objeto al array
    arrayDatos.push(nuevoObjeto);

    // Verificar si el array debe ser borrado
    verificarYBorrarSiNecesario(arrayDatos);

    // Guardar el array actualizado en localStorage
    guardarEnLocalStorage(arrayDatos);

    // Mostrar en consola (opcional)
    console.log(arrayDatos);

  

});

let resultadoDiv    

// Manejar el clic en el botón "Mostrar Datos"
document.getElementById('EnviarFrm').addEventListener('click', function() {
    // Recuperar y mostrar los datos desde localStorage
    let datosRecuperados = cargarDesdeLocalStorage();
    resultadoDiv = document.getElementById('contadorPersonas');

    for (let i = 0; i < datosRecuperados.length; i++) {
        resultadoDiv.textContent += JSON.stringify(datosRecuperados[i].nombre) + 
        ' - ' + JSON.stringify(datosRecuperados[i].telefono) + ' - ' +
         JSON.stringify(datosRecuperados[i].email) + '\n';


    }

    
    console.log (datosRecuperados) 
    
});