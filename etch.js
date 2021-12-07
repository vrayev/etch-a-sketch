const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

const grid = document.getElementById('grid')

function setupGrid(boxCount) {
    //create box grid template
    grid.style.gridTemplateColumns = `repeat(${boxCount}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${boxCount}, 1fr)`

    //create div boxes inside container div
    for (let i = 0; i < boxCount * boxCount; i++) {
        const makeDiv = document.createElement('div');
        grid.append(makeDiv);
    };
};

setupGrid(currentSize);