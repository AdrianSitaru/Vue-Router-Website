<template>
  <header class="main-header">
    <svg width="49" height="49" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M9.83334 39.3333H17.7C18.738 39.3333 19.6262 38.964 20.3648 38.2254C21.1034 37.4869 21.4716 36.5997 21.4694 35.5639V23.4361C21.4694 22.3981 21.1002 21.5099 20.3616 20.7713C19.623 20.0327 18.7358 19.6645 17.7 19.6667H9.83334V39.3333ZM13.6028 35.5639V23.4361H17.7V35.5639H13.6028ZM25.8125 39.3333L33.8431 39.2514V35.5639H27.1236V31.3028H31.3847V27.5333H27.1236V23.4361H33.8431V19.6667H25.8125C25.1023 19.6667 24.5156 19.8983 24.0523 20.3616C23.5891 20.8248 23.3564 21.4126 23.3542 22.125V36.875C23.3542 37.5852 23.5869 38.1719 24.0523 38.6352C24.5178 39.0984 25.1045 39.3311 25.8125 39.3333ZM42.6931 39.2514C43.4032 39.2514 44.0184 39.0187 44.5384 38.5532C45.0585 38.0878 45.3994 37.5011 45.5611 36.7931L50.15 19.6667H46.2167L42.6931 33.1056L39.1694 19.6667H35.2361L39.825 36.7931C39.9889 37.5032 40.3309 38.0911 40.8509 38.5565C41.371 39.0219 41.9851 39.2536 42.6931 39.2514ZM6.55556 59C4.75278 59 3.20895 58.3576 1.92406 57.0727C0.639172 55.7878 -0.00217962 54.245 5.56499e-06 52.4444V6.55556C5.56499e-06 4.75278 0.64245 3.20895 1.92734 1.92406C3.21223 0.639172 4.75497 -0.00217962 6.55556 5.56499e-06H52.4444C54.2472 5.56499e-06 55.7911 0.64245 57.0759 1.92734C58.3608 3.21223 59.0022 4.75497 59 6.55556V52.4444C59 54.2472 58.3576 55.7911 57.0727 57.0759C55.7878 58.3608 54.245 59.0022 52.4444 59H6.55556Z"
          fill="black"/>
    </svg>
    <nav>
      <router-link v-for="page in pages" :key="page.name" :to="page.route">
        {{ page.name }}
      </router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: "MainHeader",
  data() {
    return {}
  },
  computed: {
    pages() {
      return this.$store.state.pages
    }
  }
}
</script>
<style lang="scss">
.main-header {
  @media only screen and (min-width: 0) {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;

    nav {
      width: 100%;
      display: flex;
      justify-content: end;
    }

    a {
      color: black;
      text-decoration: none;
      font-size: 18px;
      padding: 15px;
    }

    svg {
      padding: 5px;
    }

    .router-link-active {
      font-weight: bold;
    }
  }
}
</style>