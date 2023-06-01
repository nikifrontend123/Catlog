import { createStore } from "vuex";

export default createStore({
  state: {
    lists: [
      {
        id: 1,
        img: "images/c1.jpg",
        tag: "#23269",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 2,
        img: "images/c2.jpg",
        tag: "#23252",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 3,
        img: "images/c3.jpg",
        tag: "#232234",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 4,
        img: "images/c4.jpg",
        tag: "#232123",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 5,
        img: "images/c5.jpg",
        tag: "#232565",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 6,
        img: "images/c6.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 7,
        img: "images/c1.jpg",
        tag: "#232565",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 8,
        img: "images/c2.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
      {
        id: 9,
        img: "images/c3.jpg",
        tag: "#69646",
        name: "1/1 Top",
        sp: "85",
        panna: "59 Inch | 1.4986 Mtr",
        fc: "115 Grm",
        stag: "23269, 23269, Massa Rib, 1/1 top"
      },
    ],
    activeCatelog: {},
  },
  getters: {
    getLists(state) {
      return state.lists;
    },
    getCatelog(state) {
      return state.activeCatelog;
    },
  },
  mutations: {
    selectCatelog(state, catelog) {
      state.activeCatelog = catelog;
    },
    hideCatelog(state) {
      state.activeCatelog = {};
    },
  },
  actions: {
    selectCatelog({ commit }, catelog) {
      commit("selectCatelog", catelog);
    },
    hideCatelog({ commit }) {
      commit("hideCatelog");
    },
  },
  modules: {},
});
