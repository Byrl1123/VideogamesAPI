import readline from 'readline';
import { buscarJuegoPorNombre, guardarJuegoEnBaseDeDatos } from '../Videogame/videogame.js';
import chalk from 'chalk';
import { crearHistorialBusqueda } from '../database/config.js';

export const interfaceApp = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log(chalk.yellow('==========================='));
  rl.question(chalk.cyan('Ingrese el nombre del juego que desea buscar: '), async (nombre) => {
    try {
      const juegos = await buscarJuegoPorNombre(nombre);
      console.log(chalk.green('Resultado: '));
      console.log(chalk.white('Nombre:'), juegos[0].name);
      console.log(chalk.white('Género:'), juegos[0].genre);
      console.log(chalk.white('Año de lanzamiento:'), juegos[0].released);
      console.log(chalk.white('Plataformas:'), juegos[0].platforms);

      // Guardar la información en la base de datos
      await guardarJuegoEnBaseDeDatos(juegos[0]);

      // Guardar el historial de búsqueda
      await crearHistorialBusqueda({ nombre: nombre, fecha: new Date() });

    } catch (error) {
      console.error(error);
    } finally {
      rl.close();
    }
  });
};
