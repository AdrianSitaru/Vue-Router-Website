<template>
  <div class="main-app">
    <MainHeader/>
    <router-view/>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import MainHeader from "@/components/MainHeader.vue";

export default defineComponent({
  components: {MainHeader}
})
</script>
<style lang="scss">
#app, * {
  margin: 0;
  padding: 0;
  font-family: 'Titillium Web', sans-serif;
}

.main-app {
  @media only screen and (min-width: 0) {
    background-image: url("../src/assets/background2s.jpg");
    background-size: cover;
    background-position: center center;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .list-style {
    width: 80%;
    text-align: left;
    margin: 0 auto;
    display: block;
    padding-top: 30px;
  }

  li {
    padding: 10px;
    list-style: none;
    font-size: 17px;
  }
}
</style>
