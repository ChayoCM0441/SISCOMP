const mongoose = require('mongoose');

// Define el esquema de reserva
const reservaSchema = new mongoose.Schema({
    dia: { type: String, required: true },
    horaInicio: { type: String, required: true },
    horaFin: { type: String, required: true },
    edificio: { type: String, required: true },
    aula: { type: String },
    laboratorio: { type: String }
});

// Crea y exporta el modelo de reserva basado en el esquema
module.exports = mongoose.model('Reserva', reservaSchema);
