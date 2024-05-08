import mongoose from 'mongoose';
import Server from './models/server.js';
import { interfaceApp } from './models/interfaz.js';
import { buscarJuegoPorNombre } from './Videogame/videogame.js';
import dotenv from 'dotenv';
dotenv.config();

// Conectar la base de datos
await mongoose.connect(process.env.ATLAS_URI);

// Crear instancia del servidor
const server = new Server();

// Llamar a la interfaz
interfaceApp();
