const canvas = document.getElementById('map')
const parent = document.getElementById('canvas-container')
canvas.width = (parent.offsetWidth * 0.996) // multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight * 0.996)

// Canvas will resize itself when window is resized
window.onresize = function () {
  canvas.width = (parent.offsetWidth * 0.996)
  canvas.height = (parent.offsetHeight * 0.996)
  drawKnee()
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

  // Nodes to use as example
  const e1 = new Node(1, -35.948081, 44.580554, 1)
  const e2 = new Node(3, -36.626789, 40.016439, 2)
  const e3 = new Node(4, -37.337202, 42.335068, 3)

  // Array of nodes
  const elements = []
  elements.push(e1)
  elements.push(e2)
  elements.push(e3)

  // Loop through elements and draw each node
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].force <= 1) {
      ctx.strokeStyle = 'blue'
      ctx.fillStyle = 'blue'
    } else if (elements[i].force <= 2) {
      ctx.strokeStyle = 'green'
      ctx.fillStyle = 'green'
    } else {
      ctx.strokeStyle = 'red'
      ctx.fillStyle = 'red'
    }

    ctx.beginPath()
    // Made radius bigger to make it easier to see to discuss how we want to move forward
    ctx.arc(elements[i].xVal, elements[i].yVal, 10, 0, 2 * Math.PI, false)
    ctx.closePath()

    ctx.stroke()
    ctx.fill()
  }
}

class Node {
  constructor (id, xVal, yVal, force) {
    this.id = id
    this.xVal = xVal
    this.yVal = yVal
    this.force = force
  }
}

// Calls function to draw the knee
drawKnee()
