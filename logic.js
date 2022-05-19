const myStylesheet = document.styleSheets[0];

for (let i = 0; i < myStylesheet.cssRules.length; i++) {
    if (myStylesheet.cssRules[i].selectorText === '.grid') {
        gridRule = myStylesheet.cssRules[i];
    } else if (myStylesheet.cssRules[i].selectorText === '.paint') {
        paintRule = myStylesheet.cssRules[i];
    } else if (myStylesheet.cssRules[i].selectorText === '.cell') {
        cellRule = myStylesheet.cssRules[i];
    }
}

console.log(cellRule)

let sizeButton = document.querySelector('#grid-button');
sizeButton.addEventListener('click', event => {
    promptGrid()
}); 

let colorButton = document.querySelector('#color');
colorButton.addEventListener('click', event => {
    setRandomColor()
}); 

let opacityButton = document.querySelector('#opacity');
opacityButton.addEventListener('click', event => {
    paintOpacity()
});

generateCells(16)

function generateCells(gridSize) {
    let sizeBySize = (gridSize * gridSize)
    let e = document.querySelector('.grid');
    gridRule.style.setProperty('grid-template-rows', `repeat(${gridSize}, 1fr)`);
    gridRule.style.setProperty('grid-template-columns', `repeat(${gridSize}, 1fr)`);
    for (let i = 0; i < sizeBySize; i++) {
        let cell = document.createElement('div');
        cell.className = `cell ${i+1}`; 
        e.appendChild(cell);
    }
    paintCell();
}

function paintCell() {
    document.querySelectorAll('.cell').forEach((selectCell) => {
    selectCell.addEventListener('mouseover', function() {
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

function paintOpacity() {
    document.querySelectorAll('.cell').forEach((selectCell) => {
    selectCell.addEventListener('mouseenter', function() {
    selectCell.style.setProperty('background-color', 'bisque')
    let opacityP = parseFloat(cellRule.style.opacity);
    if (opacityP >= 0) {
    this.style.setProperty('opacity', `${opacityP -= 0.1}`);
    }
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


