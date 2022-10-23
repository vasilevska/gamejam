import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'prelaz', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class Prelaz1 extends RpgEvent {
    onInit() {
        //this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {
        player.changeMap('marsmap')
    }
} 