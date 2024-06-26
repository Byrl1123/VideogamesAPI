import { validationResult } from "express-validator";
import { response } from "express";


export const validarCampos = async(req, res = response, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty() ){
        return res.status(400).json(errors);
    };
    next();

};