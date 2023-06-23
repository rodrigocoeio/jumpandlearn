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
    preload(PhaserGame) {},

    create(PhaserGame) {},

    update(PhaserGame) {},

    render(PhaserGame) {},

    destroy() {
      if (store.Phaser && !store.destroyed) {
        store.Phaser.destroy(true)
        store.Phaser = false
        store.destroyed = true
      }
    }
  }
})

export default GameMixins
