import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Ruta raíz de cortesía para el navegador
app.get('/', (req, res) => {
  res.json({ message: 'API Express con Autenticación JWT activa 🚀' });
});

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

export default app;