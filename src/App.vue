<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<script>
export default {
  name: "App",
  // ...
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
