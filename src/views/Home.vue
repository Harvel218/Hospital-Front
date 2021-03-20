<template>
  <div class="home">
    <h1>Login / Register - To Be Done</h1>
    <article class="form_wrapper">
      <LoginForm />
    </article>
  </div>
</template>

<script>
import LoginForm from "@/components/form/LoginForm";
export default {
  components: { LoginForm },
  // ...
};
</script>
<style scoped lang="scss">
@import "@/scss/global.scss";

.home {
  width: 100%;

  a {
    font-weight: bold;
    color: $font_color;
    font-size: 20px;
    padding: 10px;

    &.router-link-exact-active {
      opacity: 0.7;
    }
  }
}
</style>