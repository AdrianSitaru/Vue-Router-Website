<template>
  <label class="contact-input">
    {{ label}}
    <input
        :type="inputType"
        :placeholder="placeholder"
    >
  </label>
</template>

<script>
export default {
  name: "BaseImput",
  props: {
    label: String,
    inputType: String,
    placeholder: String,
  }
}
</script>

<style lang="scss">
.contact-input {
  @media only screen and (min-width: 0){
    padding: 20px;

    input {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 250px;
      height: 30px;
      border: 1px solid #a3a3a3;
      border-radius: 5px;
    }
  }
}

</style>