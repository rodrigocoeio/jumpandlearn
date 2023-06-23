<template>
    <div class="Obstacle">

    </div>
</template>

<script>
import objectMixins from "@/mixins/object-mixins";
import store from "$/store";

export default {
    mixins: objectMixins,

    methods: {
        preload(PhaserGame) {
            PhaserGame.load.image('rock', 'images/obstacles/rock.png');
        },

        create(PhaserGame) {
            PhaserGame.obstacles = PhaserGame.physics.add.group();

            PhaserGame.physics.add.collider(PhaserGame.obstacles, PhaserGame.platforms);
            PhaserGame.physics.add.collider(PhaserGame.obstacles, PhaserGame.bird);

            this.obstacle = PhaserGame.obstacles.create(this.configs.width, 280, 'rock');
            this.obstacle.setCollideWorldBounds(true);
        },
        update(PhaserGame) {
            this.obstacle.setVelocityX(-50);
        }
    }
}
</script>