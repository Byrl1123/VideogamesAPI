import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import {router} from '../routes/user.routes.js'
import { conectarDb } from '../database/config.js';

export default class Server{
    constructor(){
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.userPath = '/api/user';

        //Se escucha al puerto configurado
        this.listen();
        //Se cargan los middlewares, las rutas y la conexión a la base de datos
        this.middlewares();
        this.routes();
        this.conectarDb();
    }

    async conectarDb(){
        await conectarDb();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/api/users', router);
    }

    // Define la función listen() dentro de la clase Server
    listen(){
        this.app.listen(this.port, () => {
            console.log(`The server is running on port ${this.port}`);
        });
    }
}