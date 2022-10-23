import { RpgPlayer, RpgPlayerHooks, Control, Move, RpgClassMap, RpgMap } from '@rpgjs/server'

var inter;
export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.setGraphic('female132')
        player.setHitbox(16, 16)
        player.changeMap('dreammap')
        player.hp = 100
        player.param.MAXHP = 100;
               
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }   
    },
    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        await player.showText('Welcome to the start of RPGJS. Short presentation of the structure:')
        player.setVariable('AFTER_INTRO', true)
        console.log("setInter");
        player.gui('my-hud').open()
        clearInterval(inter);
        inter = setInterval(function(){
            if(player.hp > 0) player.hp-=1;
            if(player.hp==0) {
                player.changeMap('kupolamap')
                player.recovery({hp:0.135})
            }
        }, 2000);
        
        
        
        
    }
}