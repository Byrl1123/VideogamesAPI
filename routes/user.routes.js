import express from "express";
import { check } from 'express-validator';
import { validateEmail } from "../helpers/DB-validators.js";
import { getVideoGames, getVideoGameById, searchVideoGamesByName, createVideoGame} from "../controllers/userFavGames.js";
import { getAllGenres } from "../controllers/genreController.js";


import { 
    getUserProfile,
    createUserPost,
    readUser,
    getProfileUser,
    deleteProfile
} from "../controllers/user.controllers.js";

export const router = express.Router();

router.get("/videogames", getVideoGames);

router.get("/videogames/:idVideogame", getVideoGameById);

router.get("/videogames/name", searchVideoGamesByName);

router.post("/videogames", createVideoGame);


router.get("/genres", getAllGenres);



// router.get('/', (req, res) => {
//     res.send('Videogames Home page');
// });
// router.get('/', getUserProfile);
// router.post('/', [
//     check('email', 'El email ya existe. Ingrese uno nuevo').isEmail(),
//     check('email').custom(validateEmail),

// ], createUserPost);

export default router;