<template>
  <div id="app">
    <nav>
      <h1>Strapi Book App</h1>
    </nav>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 80vw;
  margin: auto;
}
body {
  background-color: #d3dfea;
  color: #fff;
}
h1 {
  color: #2c3e50;
  text-align: left;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 25px;
}
nav {
  padding: 5px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
