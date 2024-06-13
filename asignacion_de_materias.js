document.addEventListener("DOMContentLoaded", function() {
    // Variables globales para almacenar el horario
    let horario = [];

    // Obtener referencias a elementos relevantes
    const materiaForm = document.getElementById("materia-form");
    const materiaList = document.getElementById("materia-list");
    const notification = document.getElementById("notification");
    const confirmButton = document.getElementById("confirm-button");
    const reiniciarButton = document.getElementById("reiniciar-button");

    // Función para agregar una materia al horario
    materiaForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores del formulario
        const materia = document.getElementById("materia").value;
        const horas = document.getElementById("horas").value;
        const turno = document.getElementById("turno").value;
        const aula = document.getElementById("aula").value;
        const edificio = document.getElementById("edificio").value;
        const clave = document.getElementById("clave").value;

        // Agregar la materia al horario
        const nuevaMateria = { materia, horas, turno, aula, edificio, clave };
        horario.push(nuevaMateria);

        // Actualizar la previsualización del horario
        actualizarHorario();

        // Limpiar el formulario después de agregar la materia
        materiaForm.reset();
    });

    // Función para actualizar la previsualización del horario
    function actualizarHorario() {
        // Limpiar la previsualización del horario
        materiaList.innerHTML = "";

        // Crear una tabla para mostrar el horario
        const tablaHorario = document.createElement("table");
        tablaHorario.innerHTML = `
            <tr>
                <th>Materia</th>
                <th>Horas</th>
                <th>Turno</th>
                <th>Aula</th>
                <th>Edificio</th>
                <th>Clave Única</th>
            </tr>
        `;

        // Agregar cada materia al horario
        horario.forEach(materia => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${materia.materia}</td>
                <td>${materia.horas}</td>
                <td>${materia.turno}</td>
                <td>${materia.aula}</td>
                <td>${materia.edificio}</td>
                <td>${materia.clave}</td>
            `;
            tablaHorario.appendChild(fila);
        });

        // Agregar la tabla al contenedor de la previsualización
        materiaList.appendChild(tablaHorario);
    }

    // Función para confirmar el horario
    confirmButton.addEventListener("click", function() {
        // Aquí podrías guardar los datos del horario en el servidor
        notification.style.display = "block";
    });

    // Función para reiniciar el horario
    reiniciarButton.addEventListener("click", function() {
        // Limpiar el horario
        horario = [];
        // Actualizar la previsualización del horario
        actualizarHorario();
        // Ocultar el mensaje de confirmación
        notification.style.display = "none";
    });

    // Obtener los horarios guardados en localStorage
    const horariosGuardados = JSON.parse(localStorage.getItem("horarios")) || [];

    // Mostrar los horarios en una tabla en la página de inicio
    const tablaHorarios = document.getElementById("tabla-horarios");

    horariosGuardados.forEach(horario => {
        const fila = document.createElement("tr");

        const materia = document.createElement("td");
        materia.textContent = horario.materia;

        const horas = document.createElement("td");
        horas.textContent = horario.horas;

        const turno = document.createElement("td");
        turno.textContent = horario.turno;

        const aula = document.createElement("td");
        aula.textContent = horario.aula;

        const edificio = document.createElement("td");
        edificio.textContent = horario.edificio;

        const clave = document.createElement("td");
        clave.textContent = horario.clave;

        const laboratorio = document.createElement("td");
        laboratorio.textContent = horario.laboratorio ? "Sí" : "No";

        fila.appendChild(materia);
        fila.appendChild(horas);
        fila.appendChild(turno);
        fila.appendChild(aula);
        fila.appendChild(edificio);
        fila.appendChild(clave);
        fila.appendChild(laboratorio);

        tablaHorarios.appendChild(fila);
    });

    // Función para confirmar el horario
    document.getElementById("confirm-button").addEventListener("click", function() {
        // Obtener el horario actual del formulario
        const horarioActual = obtenerHorarioActual();

        // Guardar el horario en localStorage
        guardarHorarioEnLocalStorage(horarioActual);

        // Mostrar notificación de confirmación
document.getElementById("notification").style.display = "block";
});
// Función para obtener el horario actual del formulario
function obtenerHorarioActual() {
    const materia = document.getElementById("materia").value;
    const horas = document.getElementById("horas").value;
    const turno = document.getElementById("turno").value;
    const aula = document.getElementById("aula").value;
    const edificio = document.getElementById("edificio").value;
    const clave = document.getElementById("clave").value;
    const laboratorio = document.getElementById("laboratorio").checked;

    return { materia, horas, turno, aula, edificio, clave, laboratorio };
}

// Función para guardar el horario en localStorage
function guardarHorarioEnLocalStorage(horario) {
    // Obtener el horario almacenado en localStorage
    let horariosGuardados = JSON.parse(localStorage.getItem("horarios")) || [];

    // Agregar el nuevo horario al arreglo
    horariosGuardados.push(horario);

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem("horarios", JSON.stringify(horariosGuardados));
}

// Obtén el nombre del usuario de localStorage
const userName = localStorage.getItem('userName');

// Si hay un nombre de usuario, muéstralo
if (userName) {
    document.getElementById('userName').innerText = userName;
}
});