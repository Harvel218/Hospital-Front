<template>
  <PreLoginNavbar />
  <slot />
</template>

<script>
import PreLoginNavbar from "@/components/PreLoginNavbar";

export default {
  components: { PreLoginNavbar },
  // ...
  name: "PreLoginLayout",
};
</script>

<style scoped lang="scss">
.Layout {
  background-color: yellow;
  min-height: 20px;
  height: 100%;
  width: 200px;
}
</style>
