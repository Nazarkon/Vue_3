<template>
  <div id="nav">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
