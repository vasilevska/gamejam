import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'LikNaStolu', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class Npc extends RpgEvent {
    onInit() {
        this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Hejjjjjj', {
            talkWith: this
        })
    }
} 