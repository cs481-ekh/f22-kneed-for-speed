const canvas = document.getElementById('map')
const parent = document.getElementById('canvas-container')
const draw = document.getElementById('draw')
const createdNodes = [[]]
const colorList = { red: '#FF0000', orange_red: '#FF4500', yellow: '#FFFF00', green_yellow: '#ADFF20', green: '#008000', teal: '#008080', light_blue: '#ADD8E0', blue: '#0000F0' }
canvas.width = (parent.offsetWidth * 0.996) // multiplication to reduce canvas size to account for 1px border
canvas.height = (parent.offsetHeight * 0.996)

// Canvas will resize itself when window is resized
window.onresize = function () {
  canvas.width = (parent.offsetWidth * 0.996)
  canvas.height = (parent.offsetHeight * 0.996)
  drawKnee()
}

// Draws on canvas when draw button is pushed after selecting files
draw.onclick = function () {
  draw.remove()
  drawKnee()
}

function drawKnee () {
  createNodes()
  console.log(createdNodes)
  console.log(nodes) // eslint-disable-line
  console.log(elements) // eslint-disable-line
  console.log(resultOutput) // eslint-disable-line
  const ctx = canvas.getContext('2d')
  ctx.translate(canvas.width / 1.7, canvas.height / 20)

  // Hardcoding some elements in circle
  ctx.scale(6, 6)
  drawElement()
}

function drawElement () {
  const ctx = canvas.getContext('2d')

  // Loop through createdNodes and draw each node
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

    ctx.beginPath()
    // Made radius bigger to make it easier to see to discuss how we want to move forward
    ctx.fillRect(createdNodes[i].xVal, createdNodes[i].yVal, 3, 3)
    ctx.closePath()

    ctx.stroke()
    ctx.fill()
  }
}

function createNodes () {
  for (let i = 0; i < nodes.length; i++) { // eslint-disable-line
    const n = new Node(nodes[i][0], nodes[i][1], nodes[i][2], Math.random()) // eslint-disable-line
    createdNodes.push(n)
  }
}

function heatmapKey (colorList) {
  const heatmapKey = document.getElementById('heatmap')

  for (const key in colorList) {
    const boxContainer = document.createElement('div')
    const box = document.createElement('div')
    // var label = document.createElement("span")

    // label.innerHTML = key
    box.className = 'box'
    box.style.backgroundColor = colorList[key]

    boxContainer.appendChild(box)
    // boxContainer.appendChild(label)

    heatmapKey.appendChild(boxContainer)
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

// Calls function to create our heatmap key
heatmapKey(colorList);
