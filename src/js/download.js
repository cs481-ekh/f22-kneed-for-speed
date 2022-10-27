function downloadImage() {
    var canvas = document.getElementById("map");
    image = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
}
