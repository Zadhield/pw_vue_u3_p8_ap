import axios from "axios";

// Consultar estudiante por ID
const consultarEstudiante = async (id) => {
  const url = `http://localhost:8081/api/matricula/v1/estudiantes/${id}`;
  const respuesta = await axios.get(url).then((r) => r.data);
  return respuesta;
};

export const consultarEstudianteFachada = async (id) => {
  return await consultarEstudiante(id);
};

// Consultar TODOS los estudiantes
const consultarTodos = async () => {
  const url = `http://localhost:8081/api/matricula/v1/estudiantes`;
  const respuesta = await axios.get(url).then((r) => r.data);
  return respuesta;
};

export const consultarTodosEstudiantesFachada = async () => {
  return await consultarTodos();
};
