<template>
    <div class="grid">
      <div class="tile" v-for="(number, index) in numbers"
          :key="index"
          :style="{backgroundColor: index===emptyIndex ? 'white' : '#678EF0'}"
          @click="onTileClick(index)">
          <span class="tile__content">{{ index===emptyIndex ? '' : number }}</span>
        </div>
    </div>
</template>

<script>
import * as utils from '~/utils/index'

const EMPTY_VALUE = 0;

export default {
  name: 'grid',
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

.tile {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    box-sizing: border-box;
    border-radius: 10%;
    cursor: pointer;
    transition: background-color .1s ease-in-out;
}
.tile__content {
    display: block;
    font-size: 30px;
    font-weight: bold;
}

</style>