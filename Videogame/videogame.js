import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import FavoriteGame from "../models/favGame.js";
import { conectarDb } from "../database/config.js";

const baseURL = process.env.API_LINK;
const key = process.env.API_KEY;
const search = process.env.API_SEARCH;

// Función para guardar un juego en la base de datos
export const guardarJuegoEnBaseDeDatos = async (juego) => {
  try {
    const nuevoJuego = new FavoriteGame({
      name: juego.name,
      genre: juego.genre,
      releaseYear: juego.released,
      platforms: juego.platforms
    });
    await nuevoJuego.save();
    console.log('Juego guardado correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al guardar el juego en la base de datos:', error);
  }
};

// Función para filtrar la información de los juegos
export const filtrarInformacion = (juegos) => {
  return juegos.map((juego) => ({
    id: uuidv4(),
    name: juego.name,
    genre: juego.genre,
    releaseYear: juego.released,
    platforms: juego.plataformas,
    rating: juego.rating,
  }));
};

// Función para obtener juegos de la API y guardarlos en la base de datos
export const obtenerYGuardarJuegos = async () => {
  try {
    const response = await axios.get(`${baseURL}${key}`);
    const juegos = response.data.results;
    const juegosFiltrados = filtrarInformacion(juegos).slice(0, 5);
    console.log(juegosFiltrados);
    juegosFiltrados.forEach(guardarJuegoEnBaseDeDatos);
  } catch (error) {
    console.error('Error al obtener y guardar los juegos:', error);
    throw error;
  }
};

// Función para buscar juegos por nombre en la API
export const buscarJuegoPorNombre = async (nombre) => {
  try {
    const response = await axios.get(`${baseURL}${key}${search}${nombre}`);
    const juegos = response.data.results;
    console.log(juegos);
    return juegos;
  } catch (error) {
    console.error('Error al buscar juego por nombre:', error);
    throw error;
  }
};

// Llamada para conectar a la base de datos
await conectarDb();
// Obtener y guardar juegos al inicio de la aplicación
await obtenerYGuardarJuegos();
