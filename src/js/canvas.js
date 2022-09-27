var canvas = document.getElementById("map");
var parent = document.getElementById("grid-item-5");
canvas.width = (parent.offsetWidth*.996); //multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight*.996);

// Canvas will resize itself when window is resized
window.onresize = function(){
    canvas.width = (parent.offsetWidth*.996);
    canvas.height = (parent.offsetHeight*.996);
    drawSquare();
    drawCircle();
    drawTriangle();
}

function drawSquare() {
    var ctx = canvas.getContext("2d");

    // Define the color of the square
    //define the color of the square
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";

    // Draw a square using the fillRect()
    ctx.fillRect(canvas.width * 0.2, canvas.height * 0.1, 50, 50);

    // Actually draws the square
    ctx.stroke();
}

function drawCircle() {
    var ctx = canvas.getContext("2d");

    // Define the color of the circle
    //define the color of the circle
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";

    // Draw a circle using arc
    ctx.arc(canvas.width * 0.1, canvas.height * 0.14, 25, 0, 2 * Math.PI, false);

    // Actually have circle show up on canvas
    ctx.fill();
}

function drawTriangle() {
    var ctx = canvas.getContext("2d");

    // Define the color of the triangle
    ctx.fillStyle = "blue";

    // Drawing the triangle
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.15, canvas.height * 0.2);
    ctx.lineTo(canvas.width * 0.15, canvas.height * 0.3);
    ctx.lineTo(canvas.width * 0.25, canvas.height * 0.3);
    ctx.closePath();

    // Actually getting the triangle to show on canvas
    ctx.fill();

    ctx.fill();

    // Actually draws the circle on canvas
    canvas.stroke();
}

// Calls function to draw square on canvas
drawSquare();
// Calls function to draw circle on canvas
drawCircle();
// Calls function to draw triangle on canvas
drawTriangle();

