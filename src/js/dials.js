const dial = document.querySelector(".dial-container")

// track x and y of mouse positions
let prevX = 0
let prevY = 0

function parameterDial(e) {
  // calculate 1/2 of dial wodith and height
  const width = (dial.clientWidth / 2)
  const height = (dial.clientHeight / 2)

  // get current mouse coordinates
  const x = (e.clientX - dial.offsetLeft)
  const y = (e.clientY - dial.offsetTop)

  // calculate delta values
  const deltaX = (width - x)
  const deltaY = (height -y)

  // calculate mouse position in radians
  const rad = Math.atan2(deltaY, deltaX)
  //convert to degrees
  let deg = rad * (180 / Math.PI)

  // track mouse in each quarter of the dial
  if (y < height && x > width){ // top right quarter
    // increasing
    if (prevX <= x && prevY <= y){
      console.log("incrementing")
    }
    // decreasing
    else if (prevX >= x && prevY >= y){
      console.log("decreasing")
    }
  }
  else if (y > height && x > width){ // bottom right quarter
    // increasing
    if (prevX >= x && prevY <= y){
      console.log("incrementing")
    }
    // decreasing
    else if (prevX <= x && prevY >= y){
        console.log("decreasing")
      }
  }
  else if (y < height && x < width){ // top left quarter
    // increasing
    if (prevX <= x && prevY >= y){
      console.log("incrementing")
    }
    // decreasing
    else if (prevX >= x && prevY <= y){
        console.log("decreasing")
      }
  }
  else if (y > height && x < width){ // bottom left quarter
    // increasing
    if (prevX >= x && prevY >= y){
      console.log("incrementing")
    }
    // decreasing
    else if (prevX <= x && prevY <= y){
        console.log("decreasing")
      }
  }

  // update x and y values
  prevX = x
  prevY = y

  return deg
}

// Dial rotation
function rotate(e) {
    // final calculations for the mouse position
    const result = Math.floor(parameterDial(e)-80)
    
    // rotate the dial based on final calculation
    dial.style.transform = "rotate(" + result+ "deg)"
}

// When to rotate
function rotateStart() {
    window.addEventListener("mousemove", rotate)
    window.addEventListener("mouseup", rotateEnd)
}

function rotateEnd() {
    window.removeEventListener("mousemove", rotate)
}

// Add event listeners to dial
dial.addEventListener("mousedown", rotateStart)