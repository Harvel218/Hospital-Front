<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      
      <TextInput
        name="email"
        type="email"
        label="E-mail"
        placeholder="Your email address"
        success-message="Got it, we won't spam you!"
      />
      <TextInput
        name="password"
        type="password"
        label="Password"
        placeholder="Your password"
        success-message="Nice and secure!"
      />

      <button class="submit-btn" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import TextInput from "./input/TextInput";

export default {
  name: "App",
  components: {
    TextInput,
    Form,
  },
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }

    // Using yup to generate a validation schema
    // https://vee-validate.logaretm.com/v4/guide/validation#validation-schemas-with-yup
    const schema = Yup.object().shape({
      email: Yup.string().trim().email().required(),
      password: Yup.string().trim().min(6).required()

        .required()
        .oneOf([Yup.ref("password")], "Passwords do not match"),
    });

    return {
      onSubmit,
      schema,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/global.scss";
@import "@/scss/form.scss";
</style>
