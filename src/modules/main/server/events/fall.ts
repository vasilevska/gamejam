import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'fall', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class Fall extends RpgEvent {
    onInit() {
        //this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {
        player.changeMap('dreammap')
    }
} 