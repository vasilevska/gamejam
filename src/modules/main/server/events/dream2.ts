import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'dream2', 
    hitbox: {
        width: 64,
        height: 64
    }
})
export class Dream2 extends RpgEvent {
    onInit() {
        //this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {
        player.changeMap('simplemap2')
    }
} 