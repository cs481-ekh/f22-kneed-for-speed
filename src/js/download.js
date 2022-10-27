function downloadImage() {
    var canvas = document.getElementById("map");
    image = canvas.toDataURL("image/jpeg");
    var link = document.createElement('a');
    link.download = "my-image.jpeg";
    link.href = image;
    link.click();
}
