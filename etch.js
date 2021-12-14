const defaultSize = 16;
const defaultColor = '#333333';

let currentSize = defaultSize;
let currentColor = defaultColor;

const grid = document.getElementById('grid')
const clearBtn = document.getElementById('clear');
const gridBox = document.getElementsByClassName('gridBox');
const rbgBtn = document.getElementById('RGB');
const defaultBtn = document.getElementById('default');
const colorPicker = document.getElementById('colorPicker')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const eraserBtn = document.getElementById('eraserBtn')
let isRgbOn = false;


sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

function changeSize(value) {
    currentSize = value;
    updateSizeValue(value);
    reloadGrid();
}

function updateSizeValue(value) {
    sizeValue.innerText = `${value} x ${value}`
}

function reloadGrid(value) {
    clearGrid()
    setupGrid(value)
}

function setupGrid(boxCount) {
    //create box grid template
    grid.style.gridTemplateColumns = `repeat(${boxCount}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${boxCount}, 1fr)`

    //create div boxes inside container div
    for (let i = 0; i < boxCount * boxCount; i++) {
        const makeDiv = document.createElement('div');
        makeDiv.className = 'gridBox';
        makeDiv.addEventListener('mouseover', changeColor);
        grid.append(makeDiv);
    };
};

setupGrid(currentSize);

//reset the grid and BTN styles when clear btn clicked
clearBtn.onclick = function () {
    clearGrid();
};

function clearGrid() {
    grid.innerText = '';
    setupGrid(currentSize);
    defaultBtn.classList.remove('active');
    rbgBtn.classList.remove('active');
    eraserBtn.classList.remove('active');
    colorPicker.style.boxShadow = 'none';
};

//button style when active and RGB mode switch
defaultBtn.onclick = function () {
    isRgbOn = false;
    currentColor = defaultColor;
    defaultBtn.classList.add('active');
    rbgBtn.classList.remove('active');
    eraserBtn.classList.remove('active');
    colorPicker.style.boxShadow = 'none';
}

rbgBtn.onclick = function () {
    isRgbOn = true;
    defaultBtn.classList.remove('active');
    rbgBtn.classList.add('active');
    eraserBtn.classList.remove('active');
    colorPicker.style.boxShadow = 'none';
}

eraserBtn.onclick = function () {
    isRgbOn = false;
    defaultBtn.classList.remove('active');
    rbgBtn.classList.remove('active');
    eraserBtn.classList.add('active');
    colorPicker.style.boxShadow = 'none';
    currentColor = 'whitesmoke';
}

colorPicker.onclick = function () {
    defaultBtn.classList.remove('active');
    rbgBtn.classList.remove('active');
    eraserBtn.classList.remove('active');
    colorPicker.style.boxShadow = "0px 0px 10px var(--primary-dark), 0px 0px 15px rgb(58, 58, 58)";
    colorPicker.style.borderRadius = "50%";
}
//color picker button value changer
colorPicker.onchange = (e) => setCurrentColor(e.target.value)
function setCurrentColor(newColor) {
    currentColor = newColor;
    isRgbOn = false;
}

//change the color of a square on hover
function changeColor(e) {
    if (isRgbOn === false) {
        this.style.backgroundColor = currentColor;
    } else {
        let color = '';
        while (color.length < 7) {
            color += (Math.random()).toString(16).substr(-6).substr(-1)
            currentColor = '#' + color;
            this.style.backgroundColor = currentColor;
        }
    }
};

