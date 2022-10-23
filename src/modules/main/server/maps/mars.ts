import { RpgMap, MapData } from '@rpgjs/server'
import { Npc } from '../events/naStolu'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'mars1map',
    file: require('./tmx/mars.tmx'),
    name: 'mars1',
    events: []
})
export class MarsMap extends RpgMap {}