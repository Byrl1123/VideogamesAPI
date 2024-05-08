// En tu archivo videoGameController.js

import axios from "axios";
import FavoriteGame from "../models/favGame.js";

export const getVideoGames = async (req, res) => {
  try {
    // Obtener videojuegos de la API
    const apiResponse = await axios.get(`${process.env.API_LINK}${process.env.API_KEY}`);
    const apiVideoGames = apiResponse.data.results;

    // Obtener videojuegos de la base de datos
    const dbVideoGames = await FavoriteGame.find();

    // Combinar y devolver todos los videojuegos
    const allVideoGames = [...apiVideoGames, ...dbVideoGames];
    res.json(allVideoGames);
  } catch (error) {
    console.error("Error al obtener los videojuegos:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getVideoGameById = async (req, res) => {
    try {
      // Implementa la lógica para obtener el detalle del videojuego por su ID
    } catch (error) {
      console.error("Error al obtener el detalle del videojuego:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };

  export const searchVideoGamesByName = async (req, res) => {
    try {
      // Implementa la lógica para buscar videojuegos por nombre
    } catch (error) {
      console.error("Error al buscar videojuegos por nombre:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };


  export const createVideoGame = async (req, res) => {
    try {
      // Implementa la lógica para crear un nuevo videojuego
    } catch (error) {
      console.error("Error al crear un nuevo videojuego:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };