<template>
  <section class="container">
    <div class="menu">
      <timer :isVictory="isVictory"></timer>
      <moves title="Moves" :content="getMovesCounter"></moves>
    </div>
    <grid 
      @updateMoves="updateMoves"
      @setVictory="setVictory"
    ></grid>
    <div v-if="isVictory" class="victory_message">You won!</div>
  </section>
</template>

<script>
import Grid from '../grid/grid'
import Timer from '../timer/timer'
import InfoBlock from '../info-block/info-block'

export default {
  name:'game',
  components: {
    'grid': Grid,
    'timer': Timer,
    'moves': InfoBlock
  },
  data() {
    return {
      movesCounter: 0,
      isVictory: false
    }
  },
  computed: {
    getMovesCounter() {
      return String(this.movesCounter);
    }
  },
  methods: {
    updateMoves() {
      this.movesCounter++;
    },
    setVictory() {
      this.isVictory=true;
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.menu {
  display: flex;
  width: 368px;
  box-sizing: border-box;
}

.victory_message {
  background-color: lightsalmon;
  font-size: 30px;
  font-weight:bold;
  height: 70px;
  border-radius: 10%;
  padding: 15px;
  margin-top: 20px;
}

</style>

