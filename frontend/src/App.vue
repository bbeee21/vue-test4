<template>
  <nav>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <div class="list-items">
      <ul class="list-inline h4">
        <li class="list-inline-item"><router-link class="path-link" to="/signup">Sign</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
