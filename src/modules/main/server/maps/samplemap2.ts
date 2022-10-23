import { RpgMap, MapData } from '@rpgjs/server'
import { Npc } from '../events/naStolu'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'simplemap2',
    file: require('./tmx/simplemap2.tmx'),
    name: 'dream2',
    events: []
})
export class SampleMap2 extends RpgMap {}