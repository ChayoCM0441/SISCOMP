const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    profilePhoto: String // Campo para almacenar la ruta de la imagen de perfil
});

module.exports = mongoose.model('User', userSchema);
