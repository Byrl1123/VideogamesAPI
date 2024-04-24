import mongoose from 'mongoose';


export const conectarDb = async() => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        console.log(`Database apparently online`);
    } catch(error) {
        console.error(error, `El error ${error} ha jodido la app. Por favor, chequea tu vaina.`);
    }


};

