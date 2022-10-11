var canvas = document.getElementById("map");
var parent = document.getElementById("canvas-container");
canvas.width = (parent.offsetWidth*.996); //multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight*.996);

// Canvas will resize itself when window is resized
window.onresize = function(){
    canvas.width = (parent.offsetWidth*.996);
    canvas.height = (parent.offsetHeight*.996);
    drawSquare();
}

function drawSquare() {
    var ctx = canvas.getContext("2d");
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // Define the color of the square
    //define the color of the square
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";

    // Draw a square using the fillRect()
    ctx.fillRect(0, 0, 50, 50);
}

// Calls function to draw square on canvas
drawSquare();

