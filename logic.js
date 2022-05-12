generateCells(16)  

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
        eraseCells();
        generateCells(gridSize);
    } else if (gridSize != 0) {
        eraseCells();
        generateCells(16);
    } else if (gridSize = 0) {
    }
}

const stylesheet = document.styleSheets[0].cssRules;

console.log(stylesheet)

