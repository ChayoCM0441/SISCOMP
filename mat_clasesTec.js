document.addEventListener("DOMContentLoaded", function() {
    console.log("Documento cargado y DOM completamente construido.");

    // Obtener referencias a los elementos del formulario
    const equipoSelect = document.getElementById("numero-equipo");
    const softwareSelect = document.getElementById("software");
    const materialesSelect = document.getElementById("materiales");
    const reservaForm = document.getElementById("reservation-form");

    // Agregar opciones de software
    const softwareOptions = [
        { value: "", label: "Ninguno" },
        { value: "MATLAB", label: "MATLAB" },
        { value: "AutoCAD", label: "AutoCAD" },
        { value: "SolidWorks", label: "SolidWorks" },
        { value: "CATIA", label: "CATIA" },
        { value: "ANSYS", label: "ANSYS" },
        { value: "Revit", label: "Revit" },
        { value: "LabVIEW", label: "LabVIEW" },
        { value: "Python", label: "Python (para programación)" },
        { value: "VisualStudio", label: "Visual Studio" },
        { value: "Mathematica", label: "Mathematica" }
    ];

    softwareOptions.forEach(option => {
        const softwareOption = document.createElement("option");
        softwareOption.value = option.value;
        softwareOption.textContent = option.label;
        softwareSelect.appendChild(softwareOption);
    });

    console.log("Opciones de software agregadas:", softwareSelect.options);

    // Agregar opciones de materiales
    const materialesOptions = [
        { value: "", label: "Ninguno" },
        { value: "Cables de red", label: "Cables de red (Ethernet)" },
        { value: "Computadoras de escritorio", label: "Computadoras de escritorio" },
        { value: "Monitores", label: "Monitores" },
        { value: "Teclados y ratones", label: "Teclados y ratones" },
        { value: "Impresoras", label: "Impresoras" },
        { value: "Dispositivos de almacenamiento", label: "Dispositivos de almacenamiento (USB, discos duros externos)" },
        { value: "Componentes electrónicos", label: "Componentes electrónicos (resistencias, capacitores, placas de circuito impreso)" },
        { value: "Herramientas de reparación", label: "Herramientas de reparación y mantenimiento de computadoras" },
        { value: "Software de seguridad informática", label: "Software de seguridad informática (antivirus, firewall)" },
        { value: "Mobiliario de laboratorio", label: "Mobiliario de laboratorio (mesas, sillas, estantes)" }
    ];

    materialesOptions.forEach(option => {
        const materialesOption = document.createElement("option");
        materialesOption.value = option.value;
        materialesOption.textContent = option.label;
        materialesSelect.appendChild(materialesOption);
    });

    console.log("Opciones de materiales agregadas:", materialesSelect.options);

    // Agregar un evento de envío al formulario
    reservaForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Obtener los valores seleccionados por el usuario
        const equipo = equipoSelect.value;
        const fechaInicio = document.getElementById("fecha-inicio").value;
        const fechaFin = document.getElementById("fecha-fin").value;
        const software = softwareSelect.value;
        const materiales = materialesSelect.value;
        const comentarios = document.getElementById("comentarios").value;

        // Validar que se haya seleccionado un número de equipo
        if (equipo === "") {
            alert("Por favor, seleccione un número de equipo.");
            return; // Salir de la función sin enviar el formulario
        }

        // Mostrar un mensaje de confirmación con los datos ingresados por el usuario
        const confirmMessage = `Reserva confirmada:
Equipo: ${equipo}
Fecha y hora de inicio: ${fechaInicio}
Fecha y hora de fin: ${fechaFin}
Software: ${software}
Materiales: ${materiales}
Comentarios: ${comentarios}`;

        alert(confirmMessage);

        // Guardar los datos en el almacenamiento local
        const reservationData = {
            equipo: equipo,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            software: software,
            materiales: materiales,
            comentarios: comentarios
        };

        // Obtener las reservas almacenadas previamente
        let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
        reservations.push(reservationData);
        localStorage.setItem("reservations", JSON.stringify(reservations));

        // Mostrar mensaje de confirmación en un elemento HTML
        const confirmationMessage = document.getElementById("confirmation-message");
        confirmationMessage.textContent = confirmMessage;

        // Redirigir a la página de reservas después de 3 segundos
        setTimeout(function() {
            window.location.href = "reservas_desktop.html";
        }, 3000); // 3000 milisegundos = 3 segundos
    });
});
