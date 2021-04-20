import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      language: localStorage.getItem("language"),
      user: localStorage.getItem("username"),
      games: undefined
    }
  },
  mutations: {
    changeLang(state, lang) {
      state.language = lang;
      localStorage.setItem("language", lang);
      this.$app.$i18n.locale = lang
    },
    logIn(state, user) {
      state.user = user;
      localStorage.setItem("username", user);
    },
    logOut(state) {
      state.user = null;
      localStorage.removeItem("username");
    }
  },
  actions: {
  },
  modules: {
  }
})
