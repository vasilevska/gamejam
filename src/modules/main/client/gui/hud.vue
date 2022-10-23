<template>
    <div class="health-bar">
        <div class="bar">
            <p>Oxygen: {{ Math.round(hp) }} / {{maxHp}}</p>
            <div class="inner-bar" :style="{ width }"></div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'my-hud',
    inject: ['rpgCurrentPlayer'],
    data() {
        return {
            hp: 100,
            maxHp: 100
        }
    },
    mounted() {
        this.obsCurrentPlayer = this.rpgCurrentPlayer
            .subscribe(({ object }) => {
                this.hp = object.hp
            })
    },
    computed: {
        width() {
            return ((this.hp / 100) * 100) + '%'
        }
        
    },
    unmounted() {
        this.obsCurrentPlayer.unsubscribe()
    }
}
</script>

<style>
.health-bar {
    width: 200px;
    margin-top: 10px;
    margin-left: 10px;
}

.health-bar p {
    margin: 5px;
    color: white;
    font-size: 21px;
    font-weight: bold;
}

.bar {
    border: 2px solid black;
    border-radius: 5px;
    position: relative;
}

.inner-bar {
  background: rgb(86, 188, 232);
  height: 10px;
  position: relative;
  transition: width .5s linear;
}
</style>

