const dial2 = document.getElementById('body-weight')
const val2 = document.getElementById('number-dial-2')
const maxVal2 = val2.getAttribute('max')

// track x and y of mouse positions
let prevX2 = 0
let prevY2 = 0

function parameterDial2 (e) {
  // calculate 1/2 of dial wodith and height
  const width = (dial2.clientWidth / 2)
  const height = (dial2.clientHeight / 2)

  // get current mouse coordinates
  const x = (e.clientX - dial2.offsetLeft)
  const y = (e.clientY - dial2.offsetTop)

  // calculate delta values
  const deltaX = (width - x)
  const deltaY = (height - y)

  // calculate mouse position in radians
  const rad = Math.atan2(deltaY, deltaX)
  // convert to degrees
  const deg = rad * (180 / Math.PI)

  // track mouse in each quarter of the dial
  if (y < height && x > width) { // top right quarter
    if (prevX2 <= x && prevY2 <= y) { // increasing
      val2.stepUp()
    } else if (prevX2 >= x && prevY2 >= y) { // decreasing
      val2.stepDown()
    }
  } else if (y > height && x > width) { // bottom right quarter
    if (prevX2 >= x && prevY2 <= y) { // increasing
      val2.stepUp()
    } else if (prevX2 <= x && prevY2 >= y) { // decreasing
      val2.stepDown()
    }
  } else if (y < height && x < width) { // top left quarter
    if (prevX2 <= x && prevY2 >= y) { // increasing
      val2.stepUp()
    } else if (prevX2 >= x && prevY2 <= y) { // decreasing
      val2.stepDown()
    }
  } else if (y > height && x < width) { // bottom left quarter
    if (prevX2 >= x && prevY2 >= y) { // increasing
      val2.stepUp()
    } else if (prevX2 <= x && prevY2 <= y) { // decreasing
      val2.stepDown()
    }
  }

  // update x and y values
  prevX2 = x
  prevY2 = y

  return deg
}

// Dial rotation
function rotate2 (e) {
  // final calculations for the mouse position
  parameterDial2(e)
  const value2 = val2.value * (360 / maxVal2)

  // rotate the dial based on final calculation - do not rotate further if value is at 0 or max
  if ((val2.value !== maxVal2) && (val2.value != 0)) { // eslint-disable-line
    dial2.style.transform = 'rotate(' + value2 + 'deg)'
  }
}

// When to rotate
function rotateStart2 () {
  window.addEventListener('mousemove', rotate2)
  window.addEventListener('mouseup', rotateEnd2)
}

function rotateEnd2 () {
  window.removeEventListener('mousemove', rotate2)
}

// Add event listener to dial
dial2.addEventListener('mousedown', rotateStart2)
