<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <TextInput
        name="name"
        type="text"
        label="Full Name"
        placeholder="Your Name"
        success-message="Nice to meet you!"
      />
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
      <TextInput
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Type it again"
        success-message="Glad you remembered it!"
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
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      confirmPassword: Yup.string()

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
