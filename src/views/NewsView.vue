<template>
  <div class="news-part">
    <h1>News Feed</h1>
    <div class="news-content">
      <NewsFeed :data="item" v-for="(item, index) in items" :key="index"/>
    </div>
  </div>
</template>
<script>
import NewsFeed from "@/components/NewsFeed.vue";

export default {
  name: "News-component",
  components: {NewsFeed},
  data() {
    return {
      name: 'News Feed',
      items: [
        {
          image: require('@/assets/female-developer-at-computer-1024x748-1.jpg'),
          description: '',
          description1: 'At our software development company, we have a team of talented programmers who are capable of creating the most innovative software solutions for our clients. Our image illustrates a programmer in an ' +
              'inspirational and modern environment, using technology to create the best solutions for our clients. Like this programmer, all members of our team are innovators and are always looking for new ways to create software ' +
              'solutions that exceed our clients expectations.',
        },
        {
          image: require('@/assets/istockphoto-1163541604-612x612.jpg'),
          description: '',
          description1: 'At our software development company, we have a team of talented programmers who are dedicated to creating the best software solutions for our clients. Our image illustrates a programmer in the midst ' +
              'of activity, with their eyes fixed on the monitor and headphones on to maximize concentration. Like this programmer, all members of our team are passionate about technology and finding the best solutions for our clients.'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.news-part {
  @media only screen and (min-width: 0) {
    text-align: center;
    .news-content {
      display: flex;
      justify-content: space-evenly;
      padding-top: 30px;
      margin: 0 auto;
      width: 50%;
    }

    h1 {
      padding: 40px;
    }
  }
}
</style>