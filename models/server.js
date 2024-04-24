import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import {router} from '../routes/user.routes.js'
import { conectarDb } from '../database/config.js';

let port = process.env.PORT;
const app = express();

export default class Server {

    constructor(){
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.userPath = '/api/user';

        this.conectarDb();
        this.middlewares();
        this.routes();

        // Llama a la función listen() dentro del constructor
        this.listen();
    }

    async conectarDb(){
        await conectarDb();
    }

    middlewares(){
         this.app.use( cors() );
         this.app.use( express.json() );
         this.app.use( express.static('public') );
    }

    routes(){
        this.app.use('/api/users', router);
    }

    // Define la función listen() dentro de la clase Server
    listen(){
        this.app.listen(this.port, () => {
            console.log(`The server is running on port ${port}`);
        });
    }



}





// Listening the port

// app.listen(port, () => {
//     console.log(`The server is running on port ${port}`);
// });
    

