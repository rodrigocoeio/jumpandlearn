<template>
    <div class="Bird">

    </div>
</template>

<script>
import objectMixins from "@/mixins/object-mixins";
import store from "$/store";

export default {
    mixins: objectMixins,

    methods: {
        preload(PhaserGame) {
            PhaserGame.load.image('bird', 'images/bird.png');
        },

        create(PhaserGame) {
            PhaserGame.bird = PhaserGame.physics.add.sprite(this.configs.width / 2, 280, 'bird');
            PhaserGame.bird.setBounce(0.2);
            PhaserGame.bird.setCollideWorldBounds(true);

            //  Collide the bird with the platforms
            PhaserGame.physics.add.collider(PhaserGame.bird, PhaserGame.platforms);
        },

        update(PhaserGame) {
            if (PhaserGame.cursors.up.isDown && PhaserGame.bird.body.touching.down) {
                PhaserGame.bird.setVelocityY(-200);
            }
        }
    }
}
</script>