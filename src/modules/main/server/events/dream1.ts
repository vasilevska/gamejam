import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'dream1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class Dream1 extends RpgEvent {
    onInit() {
        //this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {
        player.changeMap('simplemap')
    }
} 