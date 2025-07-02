<template>
  <div class="container">
    <h2>Consultar Todos los Estudiantes</h2>

    <button @click="consultarTodos" class="btn-consultar">Consultar</button>

    <table v-if="estudiantes.length" class="tabla-estudiantes">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.fechaNacimiento }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      estudiantes: [],
    };
  },
  methods: {
    async consultarTodos() {
      // Cambia esta URL a la correcta para obtener todos los estudiantes
      const url = "http://localhost:8081/api/matricula/v1/estudiantes";
      const response = await axios.get(url);
      this.estudiantes = response.data;
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  font-family: Arial, sans-serif;
}

.btn-consultar {
  background: #045fe8;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 25px;
  width: 100%;
  transition: background-color 0.3s ease;
}

.btn-consultar:hover {
  background: #034ac2;
}

.tabla-estudiantes {
  width: 100%;
  border-collapse: collapse;
  background-color: #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
}

.tabla-estudiantes th,
.tabla-estudiantes td {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.tabla-estudiantes th {
  background-color: #045fe8;
  color: white;
  font-weight: 600;
}

.tabla-estudiantes tr:hover {
  background-color: #f1f1f1;
}

.tabla-estudiantes td {
  color: #333;
}
</style>
