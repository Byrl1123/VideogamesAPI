// seed.js

import { conectarDb } from './database/config.js';
import FavoriteGame from './models/favGame.js';

const seedDatabase = async () => {
    await conectarDb();

    try {
        // Ejemplo de cómo agregar un juego favorito
        const nuevoJuego = new FavoriteGame({
            name: 'Nombre del juego',
            genre: 'Género del juego',
            releaseYear: new Date(),
            platforms: ['Plataforma 1', 'Plataforma 2']
        });

        await nuevoJuego.save();
        console.log('Datos de ejemplo agregados correctamente');
    } catch (error) {
        console.error('Error al agregar datos de ejemplo:', error);
    } finally {
        // Cerrar la conexión después de agregar los datos de ejemplo
        await mongoose.connection.close();
    }
};

// Llamar a la función para agregar datos de ejemplo
seedDatabase();
