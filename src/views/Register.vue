<template>
  <div class="home">
    <h1>Login / Register - To Be Finished</h1>
    <article class="form_wrapper">
      <RegisterForm />
    </article>
  </div>
</template>

<script>
import RegisterForm from "@/components/form/RegisterForm";
export default {
  components: { RegisterForm },
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