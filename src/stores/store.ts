type STATE = {
  Phaser: any,
  Game: any,
  components: any[],
  configs: {
    canvasElementId: string,
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
    canvasElementId: 'game-canvas',
    width: 360,
    height: 500,
    difficulty: 'easy'
  },
  started: false,     //  Game Started
  finished: true,
  destroyed: false
};

import actions from "./actions";
import getters from "./getters";

import { defineStore } from "pinia";

const getStore = defineStore({
  id: "game",
  state: () => (state),
  getters,
  actions
});

export default getStore();