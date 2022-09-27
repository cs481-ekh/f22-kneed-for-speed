var canvas = document.getElementById("map");
var parent = document.getElementById("grid-item-5");
canvas.width = (parent.offsetWidth*.996); //multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight*.996);

//canvas will resize itself when window is resized
window.onresize = function(){
    canvas.width = (parent.offsetWidth*.996);
    canvas.height = (parent.offsetHeight*.996);
    drawSquare();
}

function drawSquare() {
    var ctx = canvas.getContext("2d");

    //define the color of the square
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";

    // Draw a square using the fillRect()
    ctx.fillRect(canvas.width * 0.2, canvas.height * 0.1, 50, 50);

    // Actually draws the square
    ctx.stroke();
}

// Calls function to draw square on canvas
drawSquare();

