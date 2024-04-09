const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});

function saveUsers(usuario) {
  const usuarios = getUsers();
  usuarios.push(usuario);
  fs.writeFileSync('users.json', JSON.stringify(usuarios, null, 2));
}

function getUsers() {
  try {
    const data = fs.readFileSync('users.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

app.post('/submit_registration', (req, res) => {
	const { name, email, password, role } = req.body;
	saveUsers({ name, email, password, role });
	res.send('Usuario registrado correctamente.');
  });

app.get('/users', (req, res) => {
  const usuarios = obtenerUsuarios();
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
