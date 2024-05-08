import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const atlas = process.env.ATLAS_URI;

export const conectarDb = async () => {
    try {
        await mongoose.connect(atlas);
        console.log(`Conexión a la base de datos establecida correctamente`);
    } catch (error) {
        console.error(`Error al conectar a la base de datos: ${error}`);
    }
};

const historialBusquedaSchema = new mongoose.Schema({
    nombre: String,
    fecha: { type: Date, default: Date.now }
  });
  
  // Crear el modelo para el historial de búsqueda
  const HistorialBusqueda = mongoose.model('HistorialBusqueda', historialBusquedaSchema);
  
  // Función para crear un nuevo registro en el historial de búsqueda
  export const crearHistorialBusqueda = async (busqueda) => {
    try {
      await HistorialBusqueda.create(busqueda);
      console.log('Búsqueda guardada en el historial.');
    } catch (error) {
      console.error('Error al guardar la búsqueda en el historial:', error);
      throw error;
    }
  };