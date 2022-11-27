// Creating variables
const canvas = document.getElementById('map')
const parent = document.getElementById('canvas-container')
const draw = document.getElementById('draw')
let createdNodes = [[]]
const colorList = { red: '#FF0000', orange_red: '#FF4500', yellow: '#FFFF00', green_yellow: '#ADFF20', green: '#008000', teal: '#008080', light_blue: '#ADD8E0', blue: '#0000F0' }

// Adjusting width and height of canvas
canvas.width = (parent.offsetWidth * 0.996) // multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight * 0.996)

// Moving 0, 0 to middle of canvas and making drawing bigger and easier to view
const ctx = canvas.getContext('2d')
ctx.translate(canvas.width / 2, 0)
ctx.scale(6, 6)

// creating the force spreads
const n = 8
let rangeDiff = ((highestForce - lowestForce) / (n - 1)) // eslint-disable-line
let forceRanges = [(lowestForce + rangeDiff * 0), (lowestForce + rangeDiff * 1), (lowestForce + rangeDiff * 2), (lowestForce + rangeDiff * 3), (lowestForce + rangeDiff * 4), (lowestForce + rangeDiff * 5), (lowestForce + rangeDiff * 6), (lowestForce + rangeDiff * 7)] // eslint-disable-line

// Canvas will resize itself when window is resized
window.onresize = function () {
  // Adjusting canvas width and height
  canvas.width = (parent.offsetWidth * 0.996)
  canvas.height = (parent.offsetHeight * 0.996)
  drawKnee()
}

// Draws on canvas when draw button is pushed after selecting files
draw.onclick = function () {
  draw.disabled = true
  drawKnee()
}

// Clears the canvas and draws the knee with data from files selected to canvas
function drawKnee () {
  clearCanvas()
  createNodes()
  drawElement()
  recalculateHeatmapForces()
}

// Changes the heatmap values based on data passed in
function recalculateHeatmapForces () {
  rangeDiff = ((highestForce - lowestForce) / (n - 1)) // eslint-disable-line
  forceRanges = [(lowestForce + rangeDiff * 0), (lowestForce + rangeDiff * 1), (lowestForce + rangeDiff * 2), (lowestForce + rangeDiff * 3), (lowestForce + rangeDiff * 4), (lowestForce + rangeDiff * 5), (lowestForce + rangeDiff * 6), (lowestForce + rangeDiff * 7)] // eslint-disable-line
  heatmapKey(colorList)
}

// Draws each element from data on the canvas
function drawElement () {
  const ctx = canvas.getContext('2d')

  // Loop through createdNodes and set the fill and stroke color based on the force associated with each node
  for (let i = 0; i < createdNodes.length; i++) {
    if (createdNodes[i].force <= 0.5) {
      ctx.strokeStyle = '#0000F0'
      ctx.fillStyle = '#0000F0'
    } else if (createdNodes[i].force <= 0.6) {
      ctx.strokeStyle = '#ADD8E0'
      ctx.fillStyle = '#ADD8E0'
    } else if (createdNodes[i].force <= 0.7) {
      ctx.strokeStyle = '#008080'
      ctx.fillStyle = '#008080'
    } else if (createdNodes[i].force <= 0.75) {
      ctx.strokeStyle = '#008000'
      ctx.fillStyle = '#008000'
    } else if (createdNodes[i].force <= 0.8) {
      ctx.strokeStyle = '#ADFF20'
      ctx.fillStyle = '#ADFF20'
    } else if (createdNodes[i].force <= 0.85) {
      ctx.strokeStyle = '#FFFF00'
      ctx.fillStyle = '#FFFF00'
    } else if (createdNodes[i].force <= 0.9) {
      ctx.strokeStyle = '#FF4500'
      ctx.fillStyle = '#FF4500'
    } else {
      ctx.strokeStyle = '#FF0000'
      ctx.fillStyle = '#FF0000'
    }

    // Can begin drawing
    ctx.beginPath()
    // Using rectangles to draw our knee on the canvas
    ctx.fillRect(createdNodes[i].xVal, createdNodes[i].yVal, 3, 3)
    // Stop drawing
    ctx.closePath()

    // Colors the rectangle on canvas
    ctx.stroke()
    ctx.fill()
  }
}

// Loops through the data from file passed in creating nodes to be drawn on canvas
function createNodes () {
  for (let i = 0; i < nodes.length; i++) { // eslint-disable-line
    const n = new Node(nodes[i][0], nodes[i][1], nodes[i][2], Math.random()) // eslint-disable-line
    createdNodes.push(n)
  }
}

// Clears the canvas of a drawing and clears the data of nodes we created
function clearCanvas () {
  const ctx = canvas.getContext('2d')

  ctx.clearRect(-canvas.width / 2, 0, canvas.width, canvas.height)
  createdNodes = [[]]
}

// Creates the heatmap legend
function heatmapKey (colorList) {
  // Variable
  const heatmapKey = document.getElementById('heatmap')

  // Looping through and clearing any child nodes of the variable we created
  while (heatmapKey.firstChild) {
    heatmapKey.removeChild(heatmapKey.firstChild)
  }
  let i = 0

  // Creating each item in our heatmap legend
  for (const key in colorList) {
    const boxContainer = document.createElement('div')
    const box = document.createElement('div')
    const label = document.createElement('span')

    label.innerHTML = key
    box.className = 'box'
    box.style.backgroundColor = colorList[key]

    // Setting the max and min values in the heatmap legend
    if (i === 0 || i === 7) {
      const forceLabel = forceRanges[i].toFixed(5)
      boxContainer.append(forceLabel + ' ')
    }
    boxContainer.appendChild(box)

    heatmapKey.appendChild(boxContainer)
    i++
  }
}

// Node class
class Node {
  constructor (id, xVal, yVal, force) {
    this.id = id
    this.xVal = xVal
    this.yVal = yVal
    this.force = force
  }
}
