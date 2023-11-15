import store from '@/stores/store'

const GameMixins = []

GameMixins.push({
  data() {
    return store
  },

  mounted() {
    store.initPhaser(this);
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
