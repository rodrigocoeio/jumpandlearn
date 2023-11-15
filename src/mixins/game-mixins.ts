import store from '@/stores/store'
import Game from '@/game'

const GameMixins = []

GameMixins.push({
  data() {
    return store
  },

  mounted() {
    store.Game = this

    store.Phaser = Game(store.configs, this, store.components)
  },

  beforeUnmount() {
    this.destroy()
  },

  methods: {
    preload(PhaserGame: any) {},

    create(PhaserGame: any) {},

    update(PhaserGame: any) {},

    render(PhaserGame: any) {},

    destroy() {
      if (store.Phaser && !store.destroyed) {
        store.Phaser.destroy(true);
        store.destroyed = true
      }
    }
  }
})

export default GameMixins
