import { RpgServer, RpgModule } from '@rpgjs/server'
import world from './maps/tmx/myworld.world'
import { SampleMap } from './maps/samplemap'
import { player } from './player'
import { SampleMap2 } from './maps/samplemap2'
import { SampleMap3 } from './maps/samplemap3'
import { KupolaMap } from './maps/kupola'
import { DreamMap } from './maps/dream'
import { MarsMap } from './maps/mars'

@RpgModule<RpgServer>({ 
    player,
     /**
     * `world` contains two maps. The maps are created automatically. If a map already exists, it will take the existing map (identical ID). Here, it is the case of SampleMap 
    The identifier of a map in a world is the file name. Here, we have the file `simplemap2.tmx`, so the identifier is `simplemap2`
     */
    worldMaps: [
        world
    ],
    /**
     * The fact of putting a map allows to have more possibilities on the manipulation of the map (put events, properties in the class, etc.)
     */
    maps: [
        SampleMap,
        SampleMap2,
        SampleMap3,
        KupolaMap,
        DreamMap,
        MarsMap
    ]
})
export default class RpgServerModuleEngine {}