import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    bookStore: [],
  },
  getters: {
    getBookStore: (state) => state.bookStore,
  },
  mutations: {
    setAllBooks: (state, payload) => (state.bookStore = payload),
  },
  actions: {
    getAllBooks: ({ commit }) => {
      try {
        axios.get(`http://localhost:1337/api/books?populate=*`).then((res) => {
          commit("setAllBooks", res.data.data);
        });
      } catch (e) {
        console.log("error", e);
      }
    },
  },
  modules: {},
});
