import express from 'express';
import userFavoriteGames from '../controllers/userFavoriteGames.js';

const router = express.Router();

router.post('/', userFavoriteGames.addFavoriteGame);
router.get('/:gameId', userFavoriteGames.getFavoriteGame);
// Otras rutas para actualizar y eliminar el juego favorito

export default router;
