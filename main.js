var gamebox = document.querySelector('#gamebox');
var reset = document.querySelector('#reset');
var gridWidth = document.querySelector('#gridWidth');
function random255() {
    return Math.floor(Math.random() * Math.floor(255));
}


function writeGrid(width = 200){
    var numOfPixels = width*width;
    let divGrid = "";
    let divPixel = "<div class = 'pixel'> </div>";

    for (let i = 0; i<numOfPixels; i++) {
        divGrid = divGrid + divPixel;
    }

    gamebox.innerHTML = divGrid;
    gamebox.style.gridTemplateColumns = `repeat(${width},5px)`;

    var pixels = document.querySelectorAll('.pixel');

    pixels.forEach(function(e) {
        e.style.backgroundColor = "white";
        })

    pixels.forEach(function(e) {
        e.addEventListener('mouseover', function(){
            if (this.style.backgroundColor = "white") {
                this.style.backgroundColor = `rgb(${random255()},${random255()},${random255()})`;
            }
            
        })
    })
}

writeGrid();

gridWidth.addEventListener('change', function(){
    writeGrid(Number(gridWidth.value));
})

reset.addEventListener('click', function(){
    writeGrid(Number(gridWidth.value));
})

