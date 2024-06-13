const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const winston = require('winston');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de winston
const logger = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log' })
  ]
});


// Middleware para servir archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas para servir archivos HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'asignaMaterias.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'controlHorarios.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'softaUtilizar.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'logout.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/registrateAqui', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'registrateAqui.html'));
});

app.get('/mat_class', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mat_class.html'));
});

app.get('/reservas_desktop', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'reservas_desktop.html'));
});


// Ruta para manejar el registro
app.post('/submit_registration', (req, res) => {
  const { name, email, password, role } = req.body;
  
  // Aquí debes añadir la lógica para guardar los datos en la base de datos
  
  // Responder con éxito si el registro fue exitoso
  res.status(200).json({ success: true, name: name });
});

// Manejar errores 404
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

// Middleware para capturar errores
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

