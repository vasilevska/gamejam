import { RpgMap, MapData } from '@rpgjs/server'
import { Npc } from '../events/naStolu'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'dreammap',
    file: require('./tmx/dream.tmx'),
    name: 'dream',
    events: []
})
export class DreamMap extends RpgMap {}