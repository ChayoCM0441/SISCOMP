document.addEventListener("DOMContentLoaded", function() {
    const materiaForm = document.getElementById('materia-form');
    const materiaList = document.getElementById('materia-list');
    const materiaListIndex = document.getElementById('materia-list-index');

    materiaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addMateria();
    });

    function addMateria() {
        // Obtener los valores del formulario
        const materia = document.getElementById('materia').value;
        const horas = document.getElementById('horas').value;
        const turno = document.getElementById('turno').value;
        const aula = document.getElementById('aula').value;
        const edificio = document.getElementById('edificio').value;
        const clave = document.getElementById('clave').value;

        const nuevaMateria = { materia, horas, turno, aula, edificio, clave };

        // Guardar la materia en localStorage
        saveMateriaToLocalStorage(nuevaMateria);

        // Crear una nueva fila de tabla
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${materia}</td>
            <td>${horas}</td>
            <td>${turno}</td>
            <td>${aula}</td>
            <td>${edificio}</td>
            <td>${clave}</td>
        `;

        // Agregar la nueva fila a la tabla
        if (materiaList.querySelector('table') === null) {
            // Crear la tabla si no existe
            const table = document.createElement('table');
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Horas</th>
                        <th>Turno</th>
                        <th>Aula</th>
                        <th>Edificio</th>
                        <th>Clave Única</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;
            materiaList.appendChild(table);
        }

        // Agregar la nueva fila al cuerpo de la tabla
        materiaList.querySelector('tbody').appendChild(row);

        // Limpiar el formulario
        materiaForm.reset();
    }

    function saveMateriaToLocalStorage(materia) {
        let materias = JSON.parse(localStorage.getItem('materias')) || [];
        materias.push(materia);
        localStorage.setItem('materias', JSON.stringify(materias));
    }

    function loadMateriasFromLocalStorage() {
        let materias = JSON.parse(localStorage.getItem('materias')) || [];

        if (materias.length > 0) {
            const table = document.createElement('table');
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Horas</th>
                        <th>Turno</th>
                        <th>Aula</th>
                        <th>Edificio</th>
                        <th>Clave Única</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;
            materias.forEach(materia => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${materia.materia}</td>
                    <td>${materia.horas}</td>
                    <td>${materia.turno}</td>
                    <td>${materia.aula}</td>
                    <td>${materia.edificio}</td>
                    <td>${materia.clave}</td>
                `;
                table.querySelector('tbody').appendChild(row);
            });

            if (materiaListIndex) {
                materiaListIndex.appendChild(table);
            }
            if (materiaList) {
                materiaList.appendChild(table);
            }
        }
    }

    // Cargar materias al cargar la página
    loadMateriasFromLocalStorage();
});
