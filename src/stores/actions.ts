import Game from '@/game'
import store from '@/stores/store'

export default {
    initPhaser(GameComponent:any) {
        store.Game = GameComponent
        store.Phaser = Game(store.configs, GameComponent, store.components)
    }
};