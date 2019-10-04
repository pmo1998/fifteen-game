<template>
    <div class="grid">
      <tile v-for="(number, index) in numbers"
        :key="index"
        :content="number"
        :isEmpty="index===emptyIndex"
        :index="index"
        @onTileClick="onTileClick"></tile>
    </div>
</template>

<script>
import Tile from '../tile/tile'
import * as utils from '~/utils/index'

const GRID_SIZE = 16;
const EMPTY_VALUE = 0;

export default {
  name: 'grid',
  components: {
    'tile': Tile
  },
  data() {
    return this.getData();
  },
  methods: {
    onTileClick(index) {
        const info = utils.getNeighbourInfo(index, this.emptyIndex);
        if(info.isNeighbour) {
            this.updateGrid(index);
      }
    },
    updateGrid(newEmptyIndex) {
        const tmp = this.numbers[newEmptyIndex];
        this.numbers[this.emptyIndex] = tmp;
        this.numbers[newEmptyIndex] = EMPTY_VALUE;
        this.emptyIndex=newEmptyIndex;
        this.$emit('updateMoves');
        if(utils.isVictory(this.numbers)) {
          this.$emit('setVictory');
        }
    },
    getData() {
      const shuffledNumbers=utils.shuffleNumbers();
      const emptyIndex = shuffledNumbers.findIndex((value) => value===EMPTY_VALUE);
      return {
        numbers: shuffledNumbers,
        emptyIndex: emptyIndex
      }
    }
  }
}
</script>

<style scoped>
.grid {
  width: 368px;
  height: 368px;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  background-color: white;
  margin-top: 20px;
  box-sizing: border-box;
}
</style>