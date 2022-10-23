import { RpgClient, RpgModule } from '@rpgjs/client'
import { Characters } from './characters/characters'
import {RpgClientEngine } from '@rpgjs/client'
import hud from './gui/hud.vue'

@RpgModule<RpgClient>({ 
    spritesheets: [
        Characters
    ],
    gui: [
       hud
    ]
})
export default class RpgClientModuleEngine {}