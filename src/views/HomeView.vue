<template>
  <div class="home-container">
    <h1>{{ name }}</h1>
    <ul class="list-style">
      <li v-for="item in items" :key="item.id">{{ item.description }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Home-component",
  data() {
    return {
      name: 'Welcome To Our Company',
      items: [
        {
          id: 133,
          description: 'We are a company specialized in custom software development. Over the years, we have worked with numerous clients from various industries and developed software solutions tailored to their specific needs.'
        },
        {
          id: 153,
          description: 'Whether you are a small business in need of a web or mobile app to expand your online presence, or a global corporation in need of a custom ERP solution, we are ready to help.'
        },
        {
          id: 157,
          description: 'From developing mobile and web applications to complex business software solutions, we can provide complete software development services, from conception to implementation and maintenance.'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.home-container {
  @media only screen and (min-width: 0) {
    padding: 15px;
    text-align: center;
    margin: 0 auto;
    width: 80%;
    h1 {
      padding-top: 20px;
      font-size: 30px;
    }

    .home-button {

    }
  }
}
</style>