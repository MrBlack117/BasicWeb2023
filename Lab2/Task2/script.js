window.onload = function () {
    let cell = document.getElementById('cell-25')
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getRandomColor();
    })
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = getSelectedColor();
    })
    cell.addEventListener('dblclick', () =>{
        const cells = document.querySelectorAll('td')
        cells.forEach(function (cell){
            if(cell.id !== 'cell-25'){
                cell.style.backgroundColor = getRandomColor()
            }
        })
    })

}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getSelectedColor() {
    const color = document.querySelector('.color-picker');
    return color.value
}