export const getAllGenres = async (req, res) => {
    try {
      // Implementa la lógica para obtener todos los géneros
    } catch (error) {
      console.error("Error al obtener todos los géneros:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };