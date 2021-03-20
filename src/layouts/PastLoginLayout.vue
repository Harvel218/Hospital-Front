<template>
  <div class="Layout"></div>
  <slot />
</template>

<script>


export default {
  components: {},
  // ...
  name: "PastLoginLayout",
};
</script>

<style scoped lang="scss">
.Layout {
  background-color: blue;
  min-height: 20px;
  height: 100%;
  width: 200px;
}
</style>
