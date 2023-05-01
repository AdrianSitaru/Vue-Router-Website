<template>
  <div class="about-container">
    <h1>{{ name }}</h1>
    <ul>
      <li class="list-style" v-for="item in items" :key="item.id">{{ item.description }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "About-component",
  data() {
    return {
      name: 'About Our Company',
      items: [
        {
          id: 4343,
          description: 'With a team of software development experts and vast experience working with clients from diverse industries, we are dedicated to providing the best solutions for your business needs.'
        },
        {
          id: 433,
          description: 'In addition, we are always up-to-date with the latest technologies and trends in software development, to ensure that we offer the most innovative and efficient solutions for our clients.'
        },
        {
          id: 4443,
          description: 'We focus on creating customized software solutions that fit exactly to our clients needs, through a rigorous and iterative software development process. From conception to implementation and maintenance, we provide complete software development services that allow you to focus on your business.'
        },
        {
          id: 4344,

          description: 'Our company is a software development company that focuses on building customized solutions for our clients.'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
.about-container {
  @media only screen and (min-width: 0) {
    text-align: center;
    padding: 15px;

    ul {
      width: 100%;
    }
  }
}
</style>