const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Conectar à base de dados
connectDB();

// Middleware para leitura de JSON
app.use(express.json());

// Ativar o CORS
app.use(cors());

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});