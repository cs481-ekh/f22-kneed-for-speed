const dial1 = document.getElementById('limb-alignment')
const val1 = document.getElementById('number-dial-1')
const maxVal1 = val1.getAttribute('max')

// track x and y of mouse positions
let prevX1 = 0
let prevY1 = 0

// track qhich quarter of the dial the mouse is in
let q = 0

function parameterDial1 (e) {
  // calculate 1/2 of dial wodith and height
  const width = (dial1.clientWidth / 2)
  const height = (dial1.clientHeight / 2)

  // get current mouse coordinates
  const x = (e.clientX - dial1.offsetLeft)
  const y = (e.clientY - dial1.offsetTop)

  // calculate delta values
  const deltaX = (width - x)
  const deltaY = (height - y)

  // calculate mouse position in radians
  const rad = Math.atan2(deltaY, deltaX)
  // convert to degrees
  const deg = rad * (180 / Math.PI)

  // track mouse in each quarter of the dial
  if (y < height && x > width) { // top right quarter
    q = 1
    if (prevX1 <= x && prevY1 <= y) { // increasing
      val1.stepUp()
    } else if (prevX1 >= x && prevY1 >= y) { // decreasing
      val1.stepDown()
    }
  } else if (y > height && x > width) { // bottom right quarter
    q = 2
    if (prevX1 >= x && prevY1 <= y) { // increasing
      val1.stepUp()
    } else if (prevX1 <= x && prevY1 >= y) { // decreasing
      val1.stepDown()
    }
  } else if (y < height && x < width) { // top left quarter
    q = 3
    if (prevX1 <= x && prevY1 >= y) { // increasing
      val1.stepUp()
    } else if (prevX1 >= x && prevY1 <= y) { // decreasing
      val1.stepDown()
    }
  } else if (y > height && x < width) { // bottom left quarter
    q = 4
    if (prevX1 >= x && prevY1 >= y) { // increasing
      val1.stepUp()
    } else if (prevX1 <= x && prevY1 <= y) { // decreasing
      val1.stepDown()
    }
  }

  // update x and y values
  prevX1 = x
  prevY1 = y

  return deg
}

// Dial rotation
function rotate1 (e) {
  // final calculations for the mouse position
  const result = Math.floor(parameterDial1(e) - 80)

  // rotate the dial based on final calculation
  if ((val1.value != maxVal1) && (val1.value != 0)) { // do not rotate further if value is at 0 or max
    // console.log(val1.value) // for testing
    dial1.style.transform = 'rotate(' + result + 'deg)'
  }
  
}

// When to rotate
function rotateStart1 () {
  window.addEventListener('mousemove', rotate1)
  window.addEventListener('mouseup', rotateEnd1)
}

function rotateEnd1 () {
  window.removeEventListener('mousemove', rotate1)
}

// Add event listener to dial
dial1.addEventListener('mousedown', rotateStart1)
