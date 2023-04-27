<template>
  <section>
    <div class="container">
      <h1>Contact :</h1>
      <form @submit.prevent="submitForm" ref="contactForm">
        <div class="form-group">
          <BaseImput
              placeholder="Name"
              inputType="name"
              label="Name"
          />
        </div>
        <div class="form-group">
          <BaseImput
              placeholder="Email"
              inputType="email"
              label="Email"
          />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" rows="7"> </textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
</template>
<script>
import BaseImput from "@/components/BaseImput.vue";
import axios from "axios";

export default {
  name: "Contact-component",
  components: {BaseImput},

  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
    methods: {
      submitForm() {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('message', this.message);

        axios.post('/internship/email', formData)
            .then(response => {
              console.log(response);
              this.$refs.contactForm.reset();
            })
            .catch(error => {
              console.log(error);
            });
      }
    }
}
</script>
<style lang="scss">
.container {
  @media only screen and (min-width: 0) {
    text-align: center;
    padding: 30px;
    .form-group {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 7px;
    }

    label {
      padding: 10px;
    }

    #message {
      width: 30%;
      margin: 0 auto;
    }

    button {
      width: 30%;
      height: 40px;
      border: 1px solid #1FC69E;
      background-color: #1FC69E;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      margin-top: 30px;
      cursor: pointer;
    }
  }
}
</style>