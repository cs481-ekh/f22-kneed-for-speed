var canvas = document.getElementById("map");
var parent = document.getElementById("canvas-container");
canvas.width = (parent.offsetWidth*.996); //multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight*.996);

// Canvas will resize itself when window is resized
window.onresize = function(){
    canvas.width = (parent.offsetWidth*.996);
    canvas.height = (parent.offsetHeight*.996);
    drawKnee();
}

function drawKnee() {
    var ctx = canvas.getContext("2d");
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // Define what color the outline of our circle/knee is going to be
    ctx.strokeStyle = "black"

    // Begin path
    ctx.beginPath();
    // Creates the size of the circle/knee we're going to draw
    ctx.arc(0, 0, 100, 0, 2 * Math.PI, false);
    // Draw the outline of the circle/knee
    ctx.stroke();
    // Close path
    ctx.closePath();

    // Hardcoding some elements in circle
    drawElement();
}

function drawElement() {
    var ctx = canvas.getContext("2d");
    // var ctx = canvas.getContext("2d");
    // ctx.translate(canvas.width / 2, canvas.height / 2);

    // ctx.fillStyle = "blue";

    // ctx.beginPath();
    // ctx.moveTo(-35.948081, 44.580554);
    // ctx.lineTo(-35.948081, 44.580554);
    // ctx.lineTo(-36.626789, 42.016439);
    // ctx.lineTo(-37.337202, 42.335068);
    // ctx.closePath();

    // ctx.fill();
    ctx.strokeStyle = "black"

    // Begin path
    ctx.beginPath();
    // Creates the size of the circle/knee we're going to draw
    ctx.arc(0, 0, 10, 0, 2 * Math.PI, false);
    // Draw the outline of the circle/knee
    ctx.stroke();
    // Close path
    ctx.closePath();
}

// Calls function to draw the knee
drawKnee();

