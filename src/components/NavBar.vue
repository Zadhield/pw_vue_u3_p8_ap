<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="estudianteConsultar"> Estudiante Consultar</router-link>|
      <router-link to="estudianteIngresar"> Estudiante Ingresar</router-link>
      <router-view />
    </nav>
  </div>
</template>

