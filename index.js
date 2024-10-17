const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/database/database');
const apiRoutes = require('./src/routes/api');
const cors = require('cors');  // Importar cors
require('dotenv').config();

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware
app.use(cors());  // Habilitar CORS
app.use(bodyParser.json());

// Rutas
app.use('/api', apiRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
