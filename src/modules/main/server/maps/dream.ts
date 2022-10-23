import { RpgMap, MapData } from '@rpgjs/server'
import { Dream1 } from '../events/dream1'
import { Dream2 } from '../events/dream2'
import { Dream3 } from '../events/dream3'
import { Npc } from '../events/naStolu'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'dreammap',
    file: require('./tmx/dream.tmx'),
    name: 'dream',
    events: [
        Dream1,
        Dream2,
        Dream3
    ]
})
export class DreamMap extends RpgMap {}