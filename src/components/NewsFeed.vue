<template>
  <section class="news-container">
    <img :src="data.image" alt="programmer image">
    <h3>{{ data.description }}</h3>
    <p>{{ data.description1 }}</p>
  </section>
</template>
<script>
export default {
  name: "NewsFeed",
  props: ['data'],
}
</script>

<style lang="scss">
.news-container {
  @media only screen and (min-width: 0) {
    margin: 0 auto;
    width: 100%;
    text-align: center;

    img {
      width: 85%;
      height: 50%;
      padding: 15px;
    }

    p {
      padding-top: 20px;
    }
  }
}
</style>