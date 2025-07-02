<template>
  <div class="container">
    <h2>Consultar Estudiante por ID</h2>

    <div class="formulario">
      <label for="idEstudiante">ID Estudiante:</label>
      <input
        v-model="idEstudiante"
        id="idEstudiante"
        type="number"
        placeholder="Ingrese ID"
      />
      <button @click="consultar">Consultar</button>
    </div>

    <div v-if="estudiante" class="resultado">
      <form>
        <label for="nombre">Nombre:</label>
        <input id="nombre" type="text" v-model="estudiante.nombre" disabled />

        <label for="apellido">Apellido:</label>
        <input id="apellido" type="text" v-model="estudiante.apellido" disabled />

        <label for="fechaNacimiento">Fecha de nacimiento:</label>
        <input
          id="fechaNacimiento"
          type="text"
          v-model="estudiante.fechaNacimiento"
          disabled
        />
      </form>
    </div>
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "@/clients/Cliente.js";

export default {
  data() {
    return {
      idEstudiante: "",
      estudiante: null,
    };
  },
  methods: {
    async consultar() {
      const resultado = await consultarEstudianteFachada(this.idEstudiante);
      this.estudiante = resultado;
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  max-width: 450px;
  margin: 50px auto;
  padding: 30px;
  font-family: Arial, sans-serif;
}

.formulario {
  margin-bottom: 30px;
}

label {
  display: block;
  margin-bottom: 6px;
  color: #333;
  font-weight: 600;
  text-align: left;
}

input {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: 1px solid #aaa;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f0f8ff;
  color: #333;
}

button {
  background: #045fe8;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background: #034ac2;
}

.resultado form {
  margin-top: 20px;
}
</style>
