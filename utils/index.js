const SIZE = 4;
const INITIAL_NUMBERS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

const getTileCoordinates = (tileIndex) => {
    return {
        row: Math.floor(tileIndex / SIZE),
        col: tileIndex % SIZE
    }
}

export const shuffleNumbers = (numbers = INITIAL_NUMBERS) => {
    const numbersCopy = [...numbers];
    let counter = numbersCopy.length;
    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);
        counter--;
        swap(numbersCopy, counter, index);
    }
    return numbersCopy;
}

export const isVictory = (grid) => {
    return grid.join('')===INITIAL_NUMBERS.join('');
}

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);  
}

export const getNeighbourInfo = (curTileIndex, emptyIndex) => {
    const curTileIndexCoords = getTileCoordinates(curTileIndex);
    const emptyTileCoords = getTileCoordinates(emptyIndex);
    const onSameRow = curTileIndexCoords.row === emptyTileCoords.row;
    const onSameCol = curTileIndexCoords.col === emptyTileCoords.col;
    const rowDiff = curTileIndexCoords.row - emptyTileCoords.row;
    const colDiff = curTileIndexCoords.col - emptyTileCoords.col;
    return {
        isNeighbour: onSameRow && Math.abs(colDiff)===1 || onSameCol && Math.abs(rowDiff)===1,
        distance: {
            rows: rowDiff,
            columns: colDiff,
        }
    }
}