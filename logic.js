generateCells(16)

const myStylesheet = document.styleSheets[0];

let cellRule;

for (let i = 0; i < myStylesheet.cssRules.length; i++) {
    if (myStylesheet.cssRules[i].selectorText === '.cell') {
        cellRule = myStylesheet.cssRules[i];
    } else if (myStylesheet.cssRules[i].selectorText === '.div-container') {
        divContainerRule = myStylesheet.cssRules[i];
    }
}

const divContainerWidth = parseFloat(divContainerRule.style.width)

let button = document.querySelector('button');
button.addEventListener('mousedown', event => {
    promptGrid()
});

function generateCells(gridSize) {
    let sizeBySize = (gridSize * gridSize)
    let e = document.querySelector('.div-container');
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

function eraseCells() {
    let divContainer = document.querySelector('.div-container');
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }
}

function promptGrid() {
    let gridSize = Number(window.prompt('Type a number beween 8 through 100, please.',''));
    if (gridSize >= 8 && gridSize <= 100) {
        alterCellDimension(gridSize);
        eraseCells();
        generateCells(gridSize);
    } else if (gridSize != 0) {
        alterCellDimension(16)
        eraseCells();
        generateCells(16);
    } else if (gridSize = 0) {
    }
}

function alterCellDimension(gridSize) {
    let newDivContainerWidth = divContainerWidth/gridSize
    cellRule.style.setProperty('width', newDivContainerWidth + 'px')
    cellRule.style.setProperty('height', newDivContainerWidth + 'px')
}
