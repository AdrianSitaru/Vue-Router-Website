<template>
  <div class="contact-page">
    <h1>Contact : </h1>
    <form class="contact-form">
      <BaseImput
          placeholder="Name"
          inputType="text"
          label="Name"
      />
      <BaseImput
          placeholder="Email"
          inputType="email"
          label="Email"
      />
        <BaseImput
            inputType="text"
            label="Message"
            placeholder="your message"
        />
    </form>
  </div>
</template>
<script>
import BaseImput from "@/components/BaseImput.vue";

export default {
  name: "Contact-component",
  components: {BaseImput}
}
</script>
<style lang="scss">
.contact-page {
  @media only screen and (min-width: 0) {
    text-align: center;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>