<template>
  <section>
    <div class="container">
      <h1>Contact :</h1>
      <form>
        <div class="form-group">
          <BaseImput
              placeholder="Name"
              inputType="text"
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

export default {
  name: "Contact-component",
  components: {BaseImput}
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