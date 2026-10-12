import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado: Token no proporcionado' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'secreto_super_seguro_daw2026');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido o expirado' });
  }
};