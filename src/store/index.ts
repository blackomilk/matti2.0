import { createStore } from 'vuex'

export default createStore({
  state: {
    scrolled: 0
  },
  mutations: {
    setScrolled(state,scrolled) {
      state.scrolled = scrolled
    }
  },
  actions: {
  },
  modules: {
  }
})
