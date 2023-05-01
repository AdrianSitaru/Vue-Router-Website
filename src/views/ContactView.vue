<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <BaseImput
            name="name"
            placeholder="Name"
            label="Name:"
            @input="handleInput"
        />
      </div>
      <div class="form-group">
        <BaseImput
            name="email"
            placeholder="Email"
            label="Email:"
            @input="handleInput"
        />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="contactForm.message" rows="7"> </textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>
<script>
import BaseImput from "@/components/BaseImput.vue";

export default {
  name: "ContactComponent",
  components: {BaseImput},
  data() {
    return {
      title: 'Contact :',
      contactForm: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log({
        name: this.contactForm.name,
        email: this.contactForm.email,
        message: this.contactForm.message,
      });
    },
    handleInput({name, value}) {
      this.contactForm[name] = value;
    }
  },
};
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