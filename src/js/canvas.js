// Creating variables
const canvas = document.getElementById('map')
const parent = document.getElementById('canvas-container')
const draw = document.getElementById('draw')
let createdNodes = [[]]
let createdElements = [[]]
const colorList = { red: '#FF0000', orange_red: '#FF4500', yellow: '#FFFF00', green_yellow: '#ADFF20', green: '#008000', teal: '#008080', light_blue: '#ADD8E0', blue: '#0000F0' }

const translatePos = {
  x: canvas.width,
  y: canvas.height / 16
}

let mouseDown = false
const dragOffset = {}

let scale = 6.0
const scaleMultiplier = 0.8

document.getElementById('plus').addEventListener('click', function () {
  scale /= scaleMultiplier
  drawKnee(scale, translatePos)
})

document.getElementById('minus').addEventListener('click', function () {
  scale *= scaleMultiplier
  drawKnee(scale, translatePos)
})

canvas.addEventListener('mousedown', function (evt) {
  mouseDown = true
  dragOffset.x = evt.clientX - translatePos.x
  dragOffset.y = evt.clientY - translatePos.y
})

canvas.addEventListener('mouseup', function (evt) {
  mouseDown = false
})

canvas.addEventListener('mouseover', function (evt) {
  mouseDown = false
})

canvas.addEventListener('mouseout', function (evt) {
  mouseDown = false
})

canvas.addEventListener('mousemove', function (evt) {
  if (mouseDown) {
    translatePos.x = evt.clientX - dragOffset.x
    translatePos.y = evt.clientY - dragOffset.y
    drawKnee(scale, translatePos)
  }
})

// Adjusting width and height of canvas
canvas.width = (parent.offsetWidth * 0.996) // multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight * 0.996)

// creating the force spreads
const n = 8
let rangeDiff = ((highestForce - lowestForce) / (n - 1)); // eslint-disable-line
let forceRanges = [(lowestForce + rangeDiff * 0), (lowestForce + rangeDiff * 1), (lowestForce + rangeDiff * 2), (lowestForce + rangeDiff * 3), (lowestForce + rangeDiff * 4), (lowestForce + rangeDiff * 5), (lowestForce + rangeDiff * 6), (lowestForce + rangeDiff * 7)]; // eslint-disable-line

// Canvas will resize itself when window is resized
window.onresize = function () {
  // Adjusting canvas width and height
  canvas.width = (parent.offsetWidth * 0.996)
  canvas.height = (parent.offsetHeight * 0.996)
  drawKnee(scale, translatePos)
}

// Draws on canvas when draw button is pushed after selecting files
draw.onclick = function () {
  draw.disabled = true
  drawKnee(scale, translatePos)
}

// Clears the canvas and draws the knee with data from files selected to canvas
function drawKnee (scale, translatePos) {
  clearCanvas()
  createNodes()
  createElements(createdNodes)
  drawElement(scale, translatePos)
  recalculateHeatmapForces()
  // Can access result of forces
  console.log(resultOutput) // eslint-disable-line
  console.log(resultColumnToUse) // eslint-disable-line
}

// Changes the heatmap values based on data passed in, also draws the map on press of Draw (called in drawKnee())
function recalculateHeatmapForces () {
  rangeDiff = ((highestForce - lowestForce) / (n - 1)) // eslint-disable-line
  // forceRanges is created and populated with evenly spaced values between the highest and lowest force values found in resultsParser
  forceRanges = [(lowestForce + rangeDiff * 0), (lowestForce + rangeDiff * 1), (lowestForce + rangeDiff * 2), (lowestForce + rangeDiff * 3), (lowestForce + rangeDiff * 4), (lowestForce + rangeDiff * 5), (lowestForce + rangeDiff * 6), (lowestForce + rangeDiff * 7)] // eslint-disable-line
  heatmapKey(colorList)
}

// Draws each element from data on the canvas
function drawElement (scale, translatePos) {
  const ctx = canvas.getContext('2d')

  // Loop through createdNodes and set the fill and stroke color based on the force associated with each node
  for (let i = 0; i < createdElements.length; i++) {
    if (createdElements[i].force <= forceRanges[0]) {
      ctx.strokeStyle = '#0000F0'
      ctx.fillStyle = '#0000F0'
    } else if (createdElements[i].force <= forceRanges[1]) {
      ctx.strokeStyle = '#ADD8E0'
      ctx.fillStyle = '#ADD8E0'
    } else if (createdElements[i].force <= forceRanges[2]) {
      ctx.strokeStyle = '#008080'
      ctx.fillStyle = '#008080'
    } else if (createdElements[i].force <= forceRanges[3]) {
      ctx.strokeStyle = '#008000'
      ctx.fillStyle = '#008000'
    } else if (createdElements[i].force <= forceRanges[4]) {
      ctx.strokeStyle = '#ADFF20'
      ctx.fillStyle = '#ADFF20'
    } else if (createdElements[i].force <= forceRanges[5]) {
      ctx.strokeStyle = '#FFFF00'
      ctx.fillStyle = '#FFFF00'
    } else if (createdElements[i].force <= forceRanges[6]) {
      ctx.strokeStyle = '#FF4500'
      ctx.fillStyle = '#FF4500'
    } else {
      ctx.strokeStyle = '#FF0000'
      ctx.fillStyle = '#FF0000'
    }

    // Can begin drawing
    ctx.save()
    ctx.translate(translatePos.x, translatePos.y)
    ctx.scale(scale, scale)
    ctx.beginPath()
    // Using rectangles to draw our knee on the canvas
    ctx.fillRect(createdNodes[i].xVal, createdNodes[i].yVal, 3, 3)
    // Stop drawing
    ctx.closePath()
    ctx.restore()

    // Colors the rectangle on canvas
    ctx.stroke()
    ctx.fill()
  }
}

// Loops through the data from file passed in creating nodes to be drawn on canvas
function createNodes () {
  for (let i = 0; i < nodes.length; i++) { // eslint-disable-line
    const n = new Node(nodes[i][0], nodes[i][1], nodes[i][2]) // eslint-disable-line
    createdNodes.push(n)
  }
}

// Loops through the data of elements and creates each element of nodes
function createElements (nodes) {
  // Variable to store our nodes for each element
  const temp = []
  // Loop through elements array
  for (let i = 0; i < elements.length; i++) { // eslint-disable-line
    // Loop through each array at array position i
    for (let j = 0; j < elements[i].length; j++) { // eslint-disable-line
      // Loop through nodes to add the nodes to the correct elements
      for (let k = 0; k < nodes.lenght; k++) {
        // If j = 0, just add the id for our element
        if (j === 0) {
          var id = elements[i][j] // eslint-disable-line
          break
        } else if (elements[i][j] === nodes[k].id) { // eslint-disable-line
          temp.push(nodes[k])
          break
        }
      }
    }

    // Looping through resultOutput to find the force for each element
    for (let m = 0; m < resultOutput.length; m++) { // eslint-disable-line
      // If element id matches id corresponding to force in resultOutput, store force value
      if (id == resultOutput[m][0]) { // eslint-disable-line
        var f = resultOutput[m][resultColumnToUse] // eslint-disable-line
        break
      }
    }

    // Creating our element and adding to createdElements array
    const e = new Element(id, temp, f)
    createdElements.push(e)
  }
}

// Clears the canvas of a drawing and clears the data of nodes we created
function clearCanvas () {
  const ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  createdNodes = [[]]
  createdElements = [[]]
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
    // Had to switch the indexes, cant figure out why but this is what works so I wont question it
    if (i === 7) {
      const forceLabel = forceRanges[0].toFixed(5)
      boxContainer.append(forceLabel + ' ')
    }
    if (i === 0) {
      const forceLabel = forceRanges[7].toFixed(5)
      boxContainer.append(forceLabel + ' ')
    }

    boxContainer.appendChild(box)

    heatmapKey.appendChild(boxContainer)
    i++
  }
}

// Node class
class Node {
  constructor (id, xVal, yVal) {
    this.id = id
    this.xVal = xVal
    this.yVal = yVal
  }
}

// Element class
class Element {
  constructor (id, nodes, force) {
    this.id = id
    this.nodes = nodes
    this.force = force
  }
}
