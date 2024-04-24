import express from "express";
import { check } from 'express-validator';
import { validateEmail } from "../helpers/DB-validators.js";

import { 
    getUserProfile,
    createUserPost,
    readUser,
    getProfileUser,
    deleteProfile
} from "../controllers/user.controllers.js";

export const router = express.Router();


router.get('/', getUserProfile);
router.post('/', [
    check('email', 'El email ya existe. Ingrese uno nuevo').isEmail(),
    check('email').custom(validateEmail),

], createUserPost);




router.get('/', (req, res) => {
    res.send('Videogames Home page');
});



export default router;