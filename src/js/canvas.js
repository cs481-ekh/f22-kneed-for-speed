const canvas = document.getElementById('map')
const parent = document.getElementById('canvas-container')
canvas.width = (parent.offsetWidth * 0.996) // multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight * 0.996)

// Canvas will resize itself when window is resized
window.onresize = function () {
  canvas.width = (parent.offsetWidth * 0.996)
  canvas.height = (parent.offsetHeight * 0.996)
  drawKnee()
  const element = new Node(10, 10)
  console.log(element.xVal)
}

function drawKnee () {
  const ctx = canvas.getContext('2d')
  ctx.translate(canvas.width / 2, canvas.height / 2)

  // Define what color the outline of our circle/knee is going to be
  ctx.strokeStyle = 'black'

  // Begin path
  ctx.beginPath()
  // Creates the size of the circle/knee we're going to draw
  ctx.arc(0, 0, 100, 0, 2 * Math.PI, false)
  // Close path
  ctx.closePath()

  // Draw the outline of the circle/knee
  ctx.stroke()
  // Added just to see the elements better because they're so small, could fill a color of the heat map and add points onto it also
  ctx.fill()

  // Hardcoding some elements in circle
  drawElement()
}

function drawElement () {
  const ctx = canvas.getContext('2d')

  // Drawing red element
  ctx.strokeStyle = 'red'
  ctx.fillStyle = 'red'

  // Connect x, y points given in data
  ctx.beginPath()
  ctx.moveTo(-35.948081, 44.580554)
  ctx.lineTo(-35.948081, 44.580554)
  ctx.lineTo(-36.626789, 42.016439)
  ctx.lineTo(-37.337202, 42.335068)
  ctx.closePath()

  // Coloring in the element
  ctx.stroke()
  ctx.fill()

  // Changing next element to be blue
  ctx.strokeStyle = 'blue'
  ctx.fillStyle = 'blue'

  // Copying points from first element in data but moving the +/- around
  ctx.beginPath()
  ctx.moveTo(35.948081, 44.580554)
  ctx.lineTo(35.948081, 44.580554)
  ctx.lineTo(36.626789, 42.016439)
  ctx.lineTo(37.337202, 42.335068)
  ctx.closePath()

  // Coloring the new element
  ctx.stroke()
  ctx.fill()

  // Changing the next element to be green
  ctx.strokeStyle = 'green'
  ctx.fillStyle = 'green'

  // Copying points from first element in data but moving the +/- around
  ctx.beginPath()
  ctx.moveTo(35.948081, -44.580554)
  ctx.lineTo(35.948081, -44.580554)
  ctx.lineTo(36.626789, -42.016439)
  ctx.lineTo(37.337202, -42.335068)
  ctx.closePath()

  // Coloring the new element
  ctx.stroke()
  ctx.fill()

  // Changing the next element to be yellow
  ctx.strokeStyle = 'yellow'
  ctx.fillStyle = 'yellow'

  // Copying points from first element in data but moving the +/- around
  ctx.beginPath()
  ctx.moveTo(-35.948081, -44.580554)
  ctx.lineTo(-35.948081, -44.580554)
  ctx.lineTo(-36.626789, -42.016439)
  ctx.lineTo(-37.337202, -42.335068)
  ctx.closePath()

  // Coloring the new element
  ctx.stroke()
  ctx.fill()
}

class Node {
  constructor (xVal, yVal) {
    this.xVal = xVal
    this.yVal = yVal
  }
}

// Calls function to draw the knee
drawKnee()
