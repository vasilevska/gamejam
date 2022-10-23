import { RpgMap, MapData } from '@rpgjs/server'
import { Fall } from '../events/fall'
import { Npc } from '../events/naStolu'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'marsmap',
    file: require('./tmx/mars.tmx'),
    name: 'mars1',
    events: [
        Fall
    ]
})
export class MarsMap extends RpgMap {}