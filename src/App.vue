<template>
  <div id="app">
    <div class="app-wrapper max-height">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    components: {
    },
};

</script>

<style>
body, html {
    height: 100%;
    margin: 0;
    width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.dashboard-master {
  height: 100%;
}
</style>
