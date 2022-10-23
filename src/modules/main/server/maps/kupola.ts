import { RpgMap, MapData } from '@rpgjs/server'
import { Npc } from '../events/naStolu'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'kupolamap',
    file: require('./tmx/kupola2.tmx'),
    name: 'kupola1',
    events: []
})
export class KupolaMap extends RpgMap {}