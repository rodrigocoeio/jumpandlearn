const state = {
  Phaser: {},    // Phaser Instance
  Game: false,      // Game Component
  components: [],
  configs: {        // Game Configs
    width: 360,
    height: 500,
    difficulty: 'easy',
    players: 0,
    menu: true,
    sound: true,
    voice: true,
    music: true
  },
  started: false,     //  Game Started
  finished: true,
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