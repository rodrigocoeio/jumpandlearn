type STATE = {
  Phaser: any,
  Game: any,
  components: any[],
  configs: {
    width: number,
    height: number,
    difficulty: string
  },
  started: boolean,
  finished: boolean,
  destroyed: boolean
}

const state: STATE = {
  Phaser: null,    // Phaser Instance
  Game: false,      // Game Component
  components: [],
  configs: {        // Game Configs
    width: 360,
    height: 500,
    difficulty: 'easy'
  },
  started: false,     //  Game Started
  finished: true,
  destroyed: false
};

const getters = {

};

const setters = {

};

import { defineStore } from "pinia";

const getStore = defineStore({
  id: "game",
  state: () => (state),
  getters: getters,
  actions: setters,
});

export default getStore();