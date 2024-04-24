import User from '../models/user.js';


export const validateEmail = async(email = "") => {
    const existUser = await User.findOne({ email });

    if(existUser) {
        return res.status(400).json({message: "El correo ya está registrado"});
    };



}