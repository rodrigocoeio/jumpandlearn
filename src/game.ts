//import store from "$/store.js";

export default (configs: any, gameComponent: any, objectComponents: any) => {
  const PhaserGame = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'game-canvas', // ID of the element where the canvas will be placed
    width: configs.width,
    height: configs.height,
    backgroundColor: '#000',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload() {
        gameComponent.preload(this)
        for (let i in objectComponents) {
          objectComponents[i].preload(this)
        }
      },
      create() {
        gameComponent.create(this)
        for (let i in objectComponents) {
          objectComponents[i].create(this)
        }
      },
      update() {
        gameComponent.update(this)
        for (let i in objectComponents) {
          objectComponents[i].update(this)
        }
      },
      render() {
        gameComponent.render(this)
        for (let i in objectComponents) {
          objectComponents[i].render(this)
        }
      }
    },
    ...configs
  })

  /* log("phaser game created");

    const canvas = document.querySelectorAll("canvas");
    if(canvas.length>1){
        log("removing doubled canvas");
        canvas[0].remove();
    } */

  return PhaserGame
}
