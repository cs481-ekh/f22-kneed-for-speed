var canvas = document.getElementById("map");
var parent = document.getElementById("canvas-container");
canvas.width = (parent.offsetWidth*.996); //multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight*.996);

//canvas will resize itself when window is resized
window.onresize = function(){
    canvas.width = (parent.offsetWidth*.996);
    canvas.height = (parent.offsetHeight*.996);
}