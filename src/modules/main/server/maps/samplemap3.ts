import { RpgMap, MapData } from '@rpgjs/server'
import { Npc } from '../events/naStolu'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'simplemap3',
    file: require('./tmx/simplemap3.tmx'),
    name: 'dream3',
    events: []
})
export class SampleMap3 extends RpgMap {}