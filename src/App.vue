<template>
  <div id="app">
    <el-button @click="visible = true">按钮</el-button>
    <el-dialog v-model="visible" title="hello world">
        <p>Hello Vue ElementUI</p>
    </el-dialog>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            visible: false,
        };
    },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
