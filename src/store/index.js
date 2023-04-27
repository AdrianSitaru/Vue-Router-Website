import { createStore } from 'vuex'

export default createStore({
  state: {
    pages: [
      {name: 'Home', route: '/home'},
      {name: 'About', route: '/about'},
      {name: 'News', route: '/news'},
      {name: 'Contact', route: '/contact'},
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
