<template>
  <bird></bird>
  <obstacle></obstacle>
</template>

<script>
import gameMixins from "@/mixins/game-mixins.ts";
import Bird from "./Bird.vue";
import Obstacle from "./Obstacle.vue";

export default {
  mixins: gameMixins,

  data() {
    return {
      test: false
    }
  },

  methods: {
    preload(PhaserGame) {
      PhaserGame.load.image('background', 'images/background.png');
      PhaserGame.load.image('ground', 'images/ground.jpg');
    },
    create(PhaserGame) {
      PhaserGame.background = PhaserGame.add.image(this.configs.width / 2, 210, 'background');
      //this.ground = PhaserGame.add.image(this.configs.width / 2, 365, 'ground');

      //  The platforms group contains the ground and the 2 ledges we can jump on
      PhaserGame.platforms = PhaserGame.physics.add.staticGroup();

      //  Here we create the ground.
      //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
      PhaserGame.platforms.create(this.configs.width / 2, 365, 'ground').setScale(1).refreshBody();

      //  Input Events
      PhaserGame.cursors = PhaserGame.input.keyboard.createCursorKeys();
    },
    update(PhaserGame) {

    }
  },

  components: {
    Bird,
    Obstacle
  }
}
</script>