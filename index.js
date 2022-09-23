let size = 16;
let area = size * size
const container = document.querySelector(".container")
const buttonSize = document.querySelector(".btn-size");
const buttonErase = document.querySelector(".btn-erase")
const colorSelect = document.querySelector('.color-select');

container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;


function createGrid() {
    for (let i = 0; i < area; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-div");
        container.append(cell);
        cell.addEventListener("mouseover", () => {
            switch (colorSelect.value) {
                case 'white':
                    cell.style.backgroundColor = 'white';
                break;
                case 'black':
                    cell.style.backgroundColor = 'black';
                break;
                case 'red':
                    cell.style.backgroundColor = 'red';
                break;
                case 'blue':
                    cell.style.backgroundColor = 'blue';
                break;
                case 'green':
                    cell.style.backgroundColor = 'green';
                break;
                case 'random':
                    cell.style.backgroundColor = `#${randomColor()}`;
                break;
                case 'erase': 
                    cell.style.backgroundColor = ''
            }
        })
    }
}

createGrid();

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16)
}

function eraseGrid() {
    let cell = document.querySelectorAll('.grid-div');

    cell.forEach((el) => {
        el.style.backgroundColor = ''
    })
}



const gridDiv = document.querySelector('.grid-div');

function updateSize(size) {
    newSize = prompt("Which column and grid size would you like?");
    if (newSize > 100) {
        throw 'ERROR'
    }
    area = newSize * newSize;
    container.style.gridTemplateColumns = `repeat(${newSize} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${newSize} , 1fr)`;
    eraseGrid();
    createGrid(area);
    
}
