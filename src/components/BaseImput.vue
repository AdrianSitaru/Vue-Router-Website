<template>
  <label class="contact-input">
    {{ label }}
    <input
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', {name, value: $event.target.value})"
    >
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: String,
    name: String,
    placeholder: String,
    value: String,
  },
};
</script>

<style lang="scss">
.contact-input {
  @media only screen and (min-width: 0) {
    padding: 20px;

    input {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 30%;
      height: 30px;
      border: 1px solid #a3a3a3;
      border-radius: 5px;
    }
  }
}

</style>