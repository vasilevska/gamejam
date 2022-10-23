import { RpgMap, MapData } from '@rpgjs/server'
import { Npc } from '../events/naStolu'
import { Prelaz1 } from '../events/prelaz'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'kupolamap',
    file: require('./tmx/kupola2.tmx'),
    name: 'kupola1',
    events: [
        Prelaz1
    ]
})
export class KupolaMap extends RpgMap {}