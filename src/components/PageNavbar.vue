<template>
  <nav class="page_navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/workspace">Workspace</router-link>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    // msg: String
  },
})
export default class PageNavbar extends Vue {
  // msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/global.scss";

.page_navigation {
  background-color: $nav_color;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: $font_color;
    font-size: 20px;
    padding: 10px;

    &.router-link-exact-active {
      opacity: 70%;
    }
  }
}
</style>
