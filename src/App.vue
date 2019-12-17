<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  position: absolute;
  margin-top: 0;
  margin-bottom: 0;
  box-sizing: border-box;
  width: 100%;
}
</style>
