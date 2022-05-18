const myStylesheet = document.styleSheets[0];

for (let i = 0; i < myStylesheet.cssRules.length; i++) {
    if (myStylesheet.cssRules[i].selectorText === '.grid') {
        gridRule = myStylesheet.cssRules[i];
    } else if (myStylesheet.cssRules[i].selectorText === '.paint')
        paintRule = myStylesheet.cssRules[i];
}

let sizeButton = document.querySelector('#grid-button');
sizeButton.addEventListener('click', event => {
    promptGrid()
}); 

let colorButton = document.querySelector('#color');
colorButton.addEventListener('click', event => {
    setRandomColor()
}); 


generateCells(16)

function generateCells(gridSize) {
    let sizeBySize = (gridSize * gridSize)
    let e = document.querySelector('.grid');
    gridRule.style.setProperty('grid-template-rows', `repeat(${gridSize}, 1fr)`);
    gridRule.style.setProperty('grid-template-columns', `repeat(${gridSize}, 1fr)`);
    console.log(gridRule)
    for (let i = 0; i < sizeBySize; i++) {
        let cell = document.createElement('div');
        cell.className = `cell ${i+1}`; 
        e.appendChild(cell);
    }
    paintCell();
}

function paintCell() {
    document.querySelectorAll('.cell').forEach((selectCell) => {
    selectCell.addEventListener('mousemove', function() {
    selectCell.classList.add('paint');
    });
});
}

function setRandomColor() {
    document.querySelectorAll('.cell').forEach((selectCell) => {
    selectCell.addEventListener('mouseover', function() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.setProperty('background-color', '#' + randomColor);
    });  
});
}

function eraseCells() {
    let gridContainer = document.querySelector('.grid');
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function promptGrid() {
    let gridSize = Number(window.prompt('Type a number beween 8 through 100, please.',''));
    if (gridSize >= 8 && gridSize <= 100) {
        eraseCells();
        generateCells(gridSize);
    } else if (gridSize != 0) {
        eraseCells();
        generateCells(16);
    } else if (gridSize = 0) {
    }
}


