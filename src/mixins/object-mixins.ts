import store from '@/stores/store'
import { defineComponent } from 'vue';

type dataType = {
  preloaded: boolean,
  created: boolean,
  updating: boolean,
  rendering: boolean,
  destroyed: boolean
}

const mixins:any = [
  defineComponent({
    data(): dataType {
      return {
        preloaded: false,
        created: false,
        updating: false,
        rendering: false,
        destroyed: false
      }
    },
    computed: {
      isVisible() {
        return true
      }
    },
    mounted() {
      store.components.push(this)

      if (!this.preloaded && store.Phaser.isRunning) {
        const scene = store.Phaser.scene.scenes[0]
        this.preload(scene)
        this.create(scene)
      }
    },
    beforeUnmount() {
      if (store.Phaser && !this.destroyed) this.destroy(store.Phaser)

      store.components = store.components.filter((object) => object != this)
    },
    methods: {
      preload(scene: any) {
        this.preloaded = true
      },
      create(scene: any) {
        this.created = true
      },
      update() {
        this.updating = true
      },
      render() {
        this.rendering = true
      },
      destroy(Phaser: any) {
        this.destroyed = true
      }
    }
  })
]

export default mixins;