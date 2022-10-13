// counter for hold interval
let counter
let count = 0

/* Dial 1 */

const num1 = document.getElementById('number-dial-1')
const sub1 = document.getElementById('minus-dial-1')
const add1 = document.getElementById('plus-dial-1')

// single click adds 1
add1.onclick = function () {
  num1.stepUp()
}

// holding mouse down continues to add 1
add1.onmousedown = function () {
  counter = setInterval(function () {
    num1.innerHTML = count
    count++
    num1.stepUp()
  }, 215) // speed of adding
}

// releasing mouse button resets hold counter and stops adding
add1.onmouseup = function () {
  clearInterval(counter)
}

// single click subtracts 1
sub1.onclick = function () {
  num1.stepDown()
}

// holding mouse down continues to subtract 1
sub1.onmousedown = function () {
  counter = setInterval(function () {
    num1.innerHTML = count
    count++
    num1.stepDown()
  }, 215) // speed of subtracting
}

// releasing mouse button resets hold counter and stops subtracting
sub1.onmouseup = function () {
  clearInterval(counter)
}

/* Dial 2 */
// Works same as dial above

const num2 = document.getElementById('number-dial-2')
const sub2 = document.getElementById('minus-dial-2')
const add2 = document.getElementById('plus-dial-2')

add2.onclick = function () {
  num2.stepUp()
}

add2.onmousedown = function () {
  counter = setInterval(function () {
    num2.innerHTML = count
    count++
    num2.stepUp()
  }, 250)
}

add2.onmouseup = function () {
  clearInterval(counter)
}

sub2.onclick = function () {
  num2.stepDown()
}

sub2.onmousedown = function () {
  counter = setInterval(function () {
    num2.innerHTML = count
    count++
    num2.stepDown()
  }, 250)
}

sub2.onmouseup = function () {
  clearInterval(counter)
}
